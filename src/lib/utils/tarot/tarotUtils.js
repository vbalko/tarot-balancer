import { ethers } from 'ethers';
import { ABI } from './abi';
import { defaultEvmStores } from 'svelte-ethers-store';

import { CovalentApiError, errorCodes as ec, TarotUtilsError } from '$lib/utils/customError.js';

export const errorCodes = ec.tarot;

const routers = {
	'0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52': {'name': 'SpiritSwap', 'address': '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52'},
	'0xF491e7B69E4244ad4002BC14e878a34207E38c29': {'name': 'SpookySwap', 'address': '0xF491e7B69E4244ad4002BC14e878a34207E38c29'},
	'0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506': {'name': 'SushiSwap', 'address': '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'},
	getByAddress: (address) => routers[address],
	getByName: (name) => (Object.values(routers).filter(n => n.name == name))[0]
}

class TarotUtil {
	constructor() {}

	async cTarotInfo(address) {
		const signer = defaultEvmStores.$signer;
		const signerAddress = defaultEvmStores.$signerAddress;
		const cTarot = await Web3Methods.getContractObj(address,ABI.cTarot,signer);
		const balanceOfBN = await cTarot.balanceOf(signerAddress);
		const balanceOf = Web3Methods.tokenToPrecision(balanceOfBN,18);

		const token0Address = await cTarot.borrowable0();
		const token1Address = await cTarot.borrowable1();

		const token0 = await this.bTarotInfo(token0Address);
		const token1 = await this.bTarotInfo(token1Address);

		const LPName = `${token0.symbol}/${token1.symbol}`;

		let exchangeRate;
		try {
			 exchangeRate = (await this.cTarotExchangeRate(address)).exchangeRate;
		} catch (err) {
			exchangeRate = 1;
		}
		const totalCollateral = exchangeRate * balanceOf;

		const router = await this.cTarotGetRouter(address);

		return {
			address,
			type: router.vault.type == 1 ? 'Farm' : 'Vault+Farm',
			dex: router.vault.dex.name,
			token0,
			token1,
			LPName,
			totalCollateral
		}

	}


	async cTarotExchangeRate(cTarotAddress) {
		try {
			const signer = defaultEvmStores.$signer;
			const cTarot = await Web3Methods.getContractObj(cTarotAddress,ABI.cTarot,signer);
	
			const vTarotAddress = await cTarot.underlying();
	
			const vTarot = await Web3Methods.getContractObj(vTarotAddress,ABI.vTarot,signer);
			const exchangeRateBN = await vTarot.exchangeRate();
			const exchangeRate = Web3Methods.tokenToPrecision(exchangeRateBN,18);
	
			return {exchangeRate, exchangeRateBN};
		} catch (err) {
			const args = { status: errorCodes.VAULT_TYPE, prev: err };
			this._errorLog(`Not a Vault type vault`, 'cTarotExchangeRate', true, args);
		}

	}

	async bTarotInfo(address) {
		const signer = defaultEvmStores.$signer;
		const signerAddress = defaultEvmStores.$signerAddress;
		const contract = await Web3Methods.getContractObj(address,ABI.bTarot,signer);
		const underlyingAddress = await contract.underlying();
		const token = await Web3Methods.getContractObj(underlyingAddress, ABI.erc20, signer);
		const ret = {
			bTarot: address,
			underlying: await contract.underlying(),
			balance: await contract.balanceOf(signerAddress),
			name: await token.name(),
			symbol: await token.symbol(),
			borrowed: await contract.borrowBalance(signerAddress)
		};
		return ret;
	}

	async cTarotGetRouter(cTarotAddress) {
		const signer = defaultEvmStores.$signer;
		const cTarot = await Web3Methods.getContractObj(cTarotAddress,ABI.cTarot,signer);

		const vTarotAddress = await cTarot.underlying();

		const vTarot = await Web3Methods.getContractObj(vTarotAddress,ABI.vTarot,signer);
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

		return {'vault':ret};
	}

	_errorLog(msg, method, _throw = false, { status, prev } = { status: 0, prev: undefined }) {
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

	tokenToPrecision: (value, precision) => Number(value) / 10 ** precision
};

export const TarotUtils = new TarotUtil();
export const w3utils = Web3Methods;