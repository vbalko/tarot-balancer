import {
	ethers
} from 'ethers';
import {
	ABI
} from './abi';
import {
	geckoApi
} from '../gecko';
import {
	debankApi
} from '../debankapi';
import {
	defaultEvmStores
} from 'svelte-ethers-store';

import {
	errorCodes as ec,
	TarotUtilsError
} from '$lib/utils/customError.js';

export const errorCodes = ec.tarot;

const routers = {
	'0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52': {
		'name': 'SpiritSwap',
		'address': '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52'
	},
	'0xF491e7B69E4244ad4002BC14e878a34207E38c29': {
		'name': 'SpookySwap',
		'address': '0xF491e7B69E4244ad4002BC14e878a34207E38c29'
	},
	'0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506': {
		'name': 'SushiSwap',
		'address': '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
	},
	getByAddress: (address) => routers[address],
	getByName: (name) => (Object.values(routers).filter(n => n.name == name))[0]
}

class TarotUtil {
	constructor() {}

	async tarotVaultsDebank(walletAddress) {
		const data = await debankApi.getUserProtocol(walletAddress, 'ftm_tarot');
		const farmVaults = data.portfolio_item_list.filter(item => item.name === 'Leveraged Farming');
		const ret = [];
		for (let vault of farmVaults) {
			ret.push({
				asset_usd_value: vault.stats.asset_usd_value,
				debt_usd_value: vault.stats.debt_usd_value,
				equity_usd_valut: vault.stats.net_usd_value,
				name: `${vault.detail.supply_token_list[0].symbol}/${vault.detail.supply_token_list[1].symbol}`,
				debt_ratio: vault.detail.debt_ratio,
				token0: {
					id: vault.detail.supply_token_list[0].id,
					name: vault.detail.supply_token_list[0].name,
					symbol: vault.detail.supply_token_list[0].symbol,
					price: vault.detail.supply_token_list[0].price,
					supply_quantity: vault.detail.supply_token_list[0].amount,
					borrow_quantity: vault.detail.borrow_token_list[0].amount,
					ratio: vault.detail.borrow_token_list[0].amount / vault.detail.supply_token_list[0].amount,
					supply_amount: vault.detail.supply_token_list[0].amount * vault.detail.supply_token_list[0].price,
					borrow_amount: vault.detail.borrow_token_list[0].amount * vault.detail.supply_token_list[0].price,
					ratio_usd: (vault.detail.borrow_token_list[0].amount * vault.detail.supply_token_list[0].price) / (vault.detail.supply_token_list[0].amount * vault.detail.supply_token_list[0].price),
					daily_cost_rate: vault.detail.borrow_token_list[0].daily_cost_rate
				},
				token1: {
					id: vault.detail.supply_token_list[1].id,
					name: vault.detail.supply_token_list[1].name,
					symbol: vault.detail.supply_token_list[1].symbol,
					price: vault.detail.supply_token_list[1].price,
					supply_quantity: vault.detail.supply_token_list[1].amount,
					borrow_quantity: vault.detail.borrow_token_list[1].amount,
					ratio: vault.detail.borrow_token_list[0].amount / vault.detail.supply_token_list[0].amount,
					supply_amount: vault.detail.supply_token_list[1].amount * vault.detail.supply_token_list[1].price,
					borrow_amount: vault.detail.borrow_token_list[1].amount * vault.detail.supply_token_list[1].price,	
					ratio_usd: (vault.detail.borrow_token_list[0].amount * vault.detail.supply_token_list[0].price) / (vault.detail.supply_token_list[0].amount * vault.detail.supply_token_list[0].price),				
					daily_cost_rate: vault.detail.borrow_token_list[1].daily_cost_rate
				}				
			});
		};

		return ret;
	}

	async cTarotInfo(address) {
		try {
		const signer = defaultEvmStores.$signer;
		const signerAddress = defaultEvmStores.$signerAddress;
		const cTarot = await Web3Methods.getContractObj(address, ABI.cTarot, signer);
		const balanceOfBN = await cTarot.balanceOf(signerAddress);
		const balanceOf = Web3Methods.tokenToPrecision(balanceOfBN, 18);
		const liqIncentive = (await cTarot.liquidationIncentive()) / 10 ** 18;
		const safeMarginSqrt = (await cTarot.safetyMarginSqrt()) / 10 ** 18;

		const token0Address = await cTarot.borrowable0();
		const token1Address = await cTarot.borrowable1();

		const token0 = await this.bTarotInfo(token0Address);
		const token1 = await this.bTarotInfo(token1Address);

		try {
			token0.geckoPrice = await geckoApi.getTokenPriceByContract(token0.underlying);
			token0.borrowedUSD = token0.geckoPrice * token0._borrowed;
			token1.geckoPrice = await geckoApi.getTokenPriceByContract(token1.underlying);
			token1.borrowedUSD = token1.geckoPrice * token1._borrowed;
		} catch (err) {
			const args = {
				status: errorCodes.VAULT_TYPE,
				prev: err
			};
			this._errorLog(`Problem getting price.`, 'cTarotInfo', false, args);
		}


		const LPName = `${token0.symbol}/${token1.symbol}`;

		let exchangeRate;
		try {
			exchangeRate = (await this.cTarotExchangeRate(address)).exchangeRate;
		} catch (err) {
			exchangeRate = 1;
		}
		const totalCollateralLP = exchangeRate * balanceOf;

		const routerRecord = await this.cTarotGetRouter(address);
		const router = await Web3Methods.getContractObj(routerRecord.vault.dex.address, ABI.spiritRouter, signer);

		const usdPrice = await router.getAmountsOut(1, ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75']);

		let reserveRate;
		try {
			reserveRate = await this.vTarotReservesRate(address);
		} catch (err) {
			reserveRate = 1;
		}

		let LPreserveRate;
		try {
			//  LPreserveRate = await this.vTarotReservesRate(address);
			LPreserveRate = await this.LPReservesRate(address);
		} catch (err) {
			LPreserveRate = 1;
		}

		const LPPrice = ((token0.geckoPrice * LPreserveRate.reserves[0]) + (token1.geckoPrice * LPreserveRate.reserves[1])) / LPreserveRate.totalSupply;
		const LPrice0 = LPreserveRate.totalSupply / (2 * LPreserveRate.reserves[0]);
		const LPrice1 = LPreserveRate.totalSupply / (2 * LPreserveRate.reserves[1]);

		token0.reserves = LPreserveRate.reserves[0];
		token1.reserves = LPreserveRate.reserves[1];

		

		const m0 = this.calculateM0(token0, token1, LPrice0, LPrice1, safeMarginSqrt, liqIncentive);
		console.log(`${routerRecord.vault.dex.name} ${LPName} m0: ${m0}`);

		const totalBorrowed = token0.borrowedUSD + token1.borrowedUSD;
		const totalCollateral = totalCollateralLP * LPPrice;
		const totalEquity = totalCollateral - totalBorrowed;

		const debankInfoAll = await this.tarotVaultsDebank(signerAddress);
		const debankInfo = debankInfoAll.filter(item => item.token0.borrow_quantity == token0._borrowed)[0];
		debankInfo.LPPrice = debankInfo.asset_usd_value / totalCollateralLP;

		const swings = this.calcSwings(totalCollateralLP,liqIncentive,LPrice0,LPrice1,token0, token1,safeMarginSqrt);
		const liqp = this.calcLiqPrices(LPreserveRate.inverseRate, LPreserveRate.rate, swings.swingA, swings.swingB,safeMarginSqrt);

		console.log('swings: ',liqp[0], liqp[1]);

		const ret = {
			address,
			LPPrice,
			LPrice0,
			m0,
			LPrice1,
			type: routerRecord.vault.type == 1 ? 'Farm' : 'Vault+Farm',
			dex: routerRecord.vault.dex.name,
			token0,
			token0rate: LPreserveRate.inverseRate,
			liqPrices0: liqp[0],
			token0off: token0.borrowed * LPreserveRate.inverseRate,
			token1,
			token1rate: LPreserveRate.rate,
			liqPrices1: liqp[1],
			token1off: token1.borrowed * LPreserveRate.rate,
			LPName,
			totalCollateralLP,
			totalCollateral,
			totalBorrowed,
			LPtotalSupply: this.LPReservesRate.totalSupply,
			totalEquity,
			safeMarginSqrt,
			liqIncentive,
			debankInfo
		};

		console.dir(ret);
		return ret;
	} catch (err) {
		const args = {
			status: errorCodes.GENERAL_ERROR,
			prev: err
		};
		this._errorLog(`Error readin cTarotInfo`, 'cTarotInfo', true, args);		
	}

	}

	calcSwings(totalCollateralLP,liqIncentive,LPrice0, LPrice1, token0, token1, safetyMarginSqrt) {
		const valueA = LPrice0 * token0._borrowed;
		const valueB = LPrice1 * token1._borrowed;
		const actualCollateral = totalCollateralLP / liqIncentive;
		const rad = Math.sqrt(actualCollateral ** 2 - 4 * valueA * valueB );
		const t = (actualCollateral + rad) / (2 * safetyMarginSqrt);
		const swingA = (t / valueA ) ** 2;
		const swingB = (t / valueB ) ** 2;
		return {swingA, swingB};
	}

	calcLiqPrices(twap1, twap2, swingA, swingB,safetyMarginSqrt) {
		const lp1 = { price: [twap1 / swingB, twap1 * swingA]};
		lp1.risk = [];
		lp1.risk.push(this.calcRiskFactor(lp1.price[0],twap1,safetyMarginSqrt));
		lp1.risk.push(this.calcRiskFactor(lp1.price[1],twap1,safetyMarginSqrt));
		const lp2 = { price: [twap2 / swingB, twap2 * swingA]};
		lp2.risk = [];
		lp2.risk.push(this.calcRiskFactor(lp2.price[0],twap2,safetyMarginSqrt));
		lp2.risk.push(this.calcRiskFactor(lp2.price[1],twap2,safetyMarginSqrt));
		return [lp1,lp2];
	}

	calcRiskFactor(liqPrice,twapPrice,safetyMarginSqrt) {
		const LIQ_K = 1.7;
		const safetyFactor = liqPrice > twapPrice ? liqPrice / twapPrice - 1 : twapPrice / liqPrice - 1;
		const riskFactor = safetyMarginSqrt;
		const riskClass = 
			safetyFactor > riskFactor * LIQ_K ** 2 ? 0 :
				safetyFactor > riskFactor * LIQ_K ** 1 ? 1 :
					safetyFactor > riskFactor * LIQ_K ** 0 ? 2 :
						safetyFactor > riskFactor * LIQ_K ** -1 ? 3 :
							safetyFactor > riskFactor * LIQ_K ** -2 ? 4 : 5;
		return riskClass;
	}

	calculateM0(token0, token1, LPrice0, LPrice1, safeMarginSqrt, liqIncentive) {
		const bor0 = token0.borrowed / 10 ** 18;
		const bor1 = token1.borrowed / 10 ** 18;
		const r0 = bor0 * LPrice0;
		const r1 = bor1 * LPrice1;
		let ret = 0;
		if (r0 > r1) {
			ret = (r0 * safeMarginSqrt + r1 * (1 / safeMarginSqrt)) * (1 + liqIncentive);
		} else {
			ret = (r0 * (1 / safeMarginSqrt) + r1 * safeMarginSqrt) * (1 + liqIncentive);
		}

		return ret;
	}

	async vTarotReservesRate(cTarotAddress) {
		const signer = defaultEvmStores.$signer;
		const cTarot = await Web3Methods.getContractObj(cTarotAddress, ABI.cTarot, signer);
		try {

			const vTarotAddress = await cTarot.underlying();

			const vTarot = await Web3Methods.getContractObj(vTarotAddress, ABI.vTarot, signer);

			const reserves = await vTarot.getReserves();
			const totalSupply = await vTarot.totalSupply();

			const rate = reserves[0] / reserves[1];

			return {
				rate: rate,
				inverseRate: 1 / rate,
				totalSupply,
				reserves
			};

		} catch (err) {
			const args = {
				status: errorCodes.VAULT_TYPE,
				prev: err
			};
			this._errorLog(`Not a Vault type vault`, 'vTarotReservesRate', true, args);
		}
	}

	async LPReservesRate(cTarotAddress) {
		const signer = defaultEvmStores.$signer;
		const cTarot = await Web3Methods.getContractObj(cTarotAddress, ABI.cTarot, signer);
		let LPAddress = {};
		try {
			const vTarotAddress = await cTarot.underlying();

			const vTarot = await Web3Methods.getContractObj(vTarotAddress, ABI.vTarot, signer);

			LPAddress = await vTarot.underlying();

		} catch (err) {
			const args = {
				status: errorCodes.VAULT_TYPE,
				prev: err
			};
			this._errorLog(`Not a Vault type vault`, 'LPReservesRate', false, args);
			LPAddress = await cTarot.underlying();
		}

		const LP = await Web3Methods.getContractObj(LPAddress, ABI.pancakePair, signer)
		const reserves = await LP.getReserves();
		const totalSupply = await LP.totalSupply();

		const rate = reserves[0] / reserves[1];

		return {
			rate: rate,
			inverseRate: 1 / rate,
			totalSupply,
			reserves
		};
	}

	async cTarotExchangeRate(cTarotAddress) {
		try {
			const signer = defaultEvmStores.$signer;
			const cTarot = await Web3Methods.getContractObj(cTarotAddress, ABI.cTarot, signer);

			const vTarotAddress = await cTarot.underlying();

			const vTarot = await Web3Methods.getContractObj(vTarotAddress, ABI.vTarot, signer);
			const exchangeRateBN = await vTarot.exchangeRate();
			const exchangeRate = Web3Methods.tokenToPrecision(exchangeRateBN, 18);

			return {
				exchangeRate,
				exchangeRateBN
			};
		} catch (err) {
			const args = {
				status: errorCodes.VAULT_TYPE,
				prev: err
			};
			this._errorLog(`Not a Vault type vault`, 'cTarotExchangeRate', true, args);
		}

	}

	async bTarotInfo(address) {
		try {
			const signer = defaultEvmStores.$signer;
			const signerAddress = defaultEvmStores.$signerAddress;
			const contract = await Web3Methods.getContractObj(address, ABI.bTarot, signer);
			const underlyingAddress = await contract.underlying();
			const token = await Web3Methods.getContractObj(underlyingAddress, ABI.erc20, signer);
			const borrowed = await contract.borrowBalance(signerAddress)
			const ret = {
				bTarot: address,
				underlying: await contract.underlying(),
				balance: await contract.balanceOf(signerAddress),
				name: await token.name(),
				symbol: await token.symbol(),
				borrowed: borrowed,
				_borrowed: borrowed / 10 ** 18
			};
			return ret;
		} catch (err) {
			const args = {
				status: errorCodes.GENERAL_ERROR,
				prev: err
			};
			this._errorLog(`Error reading bTarot info`, 'bTarotInfo', true, args);
		}
		
	}

	async cTarotGetRouter(cTarotAddress) {
		const signer = defaultEvmStores.$signer;
		const cTarot = await Web3Methods.getContractObj(cTarotAddress, ABI.cTarot, signer);

		const vTarotAddress = await cTarot.underlying();

		const vTarot = await Web3Methods.getContractObj(vTarotAddress, ABI.vTarot, signer);
		//if vTarot dont have router method it is Farm only Vault (without vault part) 
		const ret = {};
		try {
			const routerAddress = await vTarot.router();
			ret.dex = routers[routerAddress] == undefined ? 'unknown' : routers.getByAddress(routerAddress);
			ret.type = 2;
		} catch {
			const LPName = await vTarot.name();
			const name = LPName.split(' ');
			ret.dex = routers.getByName(name[0]);
			ret.type = 1;
		}

		return {
			'vault': ret
		};
	}

	_errorLog(msg, method, _throw = false, {
		status,
		prev
	} = {
		status: 0,
		prev: undefined
	}) {
		const errmsg = `ERR: ${this.constructor.name}/${method} <<< ${msg}`;
		console.log(errmsg);
		if (_throw) {
			throw new TarotUtilsError(status, prev, errmsg);
		}
	}
}

const Web3Methods = {
	getContractObj: async (adr, abi, signer) => {
		return await new ethers.Contract(adr, abi, signer);
	},

	tokenToPrecision: (value, BNprecision, fixed = 4) => Number.parseFloat(Number(value) / 10 ** BNprecision).toFixed(fixed)
};

export const TarotUtils = new TarotUtil();
export const w3utils = Web3Methods;