// import CoingeckoApi from 'coingecko-api';
// import axios from 'axios';
// import cheerio from 'cheerio';

import { GeckoApiError, errorCodes as ec } from './customError';

const tokenSubstituteAddress = {
	250: {
		'0xcefb3816c2a2b86f65ccb8bdc206927bec8aac02': '0xcdad3683335a4a96d2c437dd4513b061e4aec4ff', //POKE
		'0X8D11EC38A3EB5E956B052F67DA8BDC9BEF8ABF3E': '0x04068da6c83afcfa0e13ba15a6696662335d5b75', //USDC for DAI (DAI is not on fantom in CoinGecko)
	}
};

class Gecko {
	constructor() {
		this.apiURL = 'https://api.coingecko.com/api/v3';
	}

	async getTokenPrice(token1, token2 = 'usd') {
		// await this.getWakaPrice();
		try {
			let request = await fetch(
				`${this.apiURL}/simple/price?ids=${encodeURIComponent(token1)}&vs_currencies=${token2}`
			);
			if (request.ok) {
				const res = await request.json();
				return res[this.cisKey(res,token1)][token2];
			}
			this.logError(
				`${request.status}:${request.statusText}: Getting price for ${token1} failed.`,
				'getTokenPrice'
			);
		} catch (err) {
			const args = { status: errorCodes.CANT_GET_PRICE, prev: err };
			this.logError(`Getting price for ${token1} failed`, 'getTokenPrice', true, args);
		}
		// const cisKey = (object, ObjKey) => Object.keys(object).find((key) => key.toLowerCase() === ObjKey.toLowerCase());
	}

	async getTokenPriceByContract(contract, vs = 'usd') {
		// await this.getWakaPrice();
		try {
			contract = this.substituteTokenAddress(contract);
			contract = contract.toUpperCase();
			let request = await fetch(
				`${this.apiURL}/simple/token_price/fantom?contract_addresses=${encodeURIComponent(
					contract
				)}&vs_currencies=${vs}`
			);
			if (request.ok) {
				const res = this.processResponse(await request.json());
				return res[this.cisKey(res,contract)][vs];
			}
			this.logError(
				`${request.status}:${request.statusText}: Getting price for ${contract} failed.`,
				'getTokenPriceByContract'
			);
		} catch (err) {
			if (err.status === errorCodes.PRICE_NOT_FOUND ) {
				throw err;
			}
			const args = { status: errorCodes.CANT_GET_PRICE, prev: err };
			this.logError(`Getting price for ${contract} failed`, 'getTokenPriceByContract', true, args);
		}		
	}

	cisKey (object, ObjKey) {
		return Object.keys(object).find((key) => key.toLowerCase() === ObjKey.toLowerCase());
	} 

	processResponse(response) {
		if (Object.keys(response).length == 0) { //is empty response
			const args = { status: errorCodes.PRICE_NOT_FOUND};
			this.logError(`Price not found in CoinGecko`, 'processResponse', true, args);
		}
		return response;
	}

	async getTxTokenPrice(tx, vs = 'usd') {
		let contract;
		try {
			contract = tx.txData.contractAddress;
			let request = await fetch(
				`${this.apiURL}/simple/token_price/fantom?contract_addresses=${encodeURIComponent(
					contract
				)}&vs_currencies=${vs}`
			);
			if (request.ok) {
				const res = await request.json();
				return res[contract][vs];
			}
			this.logError(
				`${request.status}:${request.statusText}: Getting price for ${contract} failed.`,
				'getTxTokenPrice'
			);
		} catch (err) {
			const args = { status: errorCodes.CANT_GET_PRICE, prev: err };
			this.logError(`Getting price for ${contract} failed`, 'getTxTokenPrice', true, args);
		}
	}

	substituteTokenAddress(contract, chainId = '250') {
		const records = tokenSubstituteAddress[chainId];
		return records[this.cisKey(records,contract)] ? records[this.cisKey(records,contract)] : contract;
	}

	// async getWakaPrice(vs_currency = 'usd') {
	// 	try {
	// 		let response = await axios.get(
	// 			'https://app.cors.bridged.cc/?method=GET&url=https://waka.finance&path=/'
	// 		);
	// 		let resHtml = response.data();
	// 		const cheer = cheerio.load(resHtml);
	// 		cheer('#root > div.sc-XxOsz.kWyOdN > div > div:nth-child(3) > span');
	// 		console.log(`>>> ${resHtml}`);
	// 	} catch (err) {
	// 		console.log(`ERR wAKA price: ${err}`);
	// 	}
	// }

	logError(msg, method, _throw = false, { status, prev } = { status: 0, prev: undefined }) {
		const errmsg = `ERR: ${this.constructor.name}/${method} <<< ${msg}`;
		console.log(errmsg);
		if (_throw) {
			throw new GeckoApiError(status, prev, errmsg);
		}
	}
}

export const errorCodes = ec.gecko;
export const geckoApi = new Gecko();
