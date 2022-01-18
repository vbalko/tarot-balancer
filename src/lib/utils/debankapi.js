// import CoingeckoApi from 'coingecko-api';
// import axios from 'axios';
// import cheerio from 'cheerio';

import { DebankApiError, errorCodes as ec } from './customError';
// import fetch from 'node-fetch';

class Debank {
	constructor() {
		this.apiURL = 'https://openapi.debank.com/v1';
	}

    async getUserComplexProtocolList(userAddress,chainId='ftm') {
        try {
			let request = await fetch(
				`${this.apiURL}/user/complex_protocol_list?id=${userAddress}&chain_id=${chainId}`
			);       
            if (request.status == 200) {
                const res = await request.json();
                return res;
            }
			this.logError(
				`${request.status}:${request.statusText}: Getting complex protocol list failed.`,
				'getUserComplexProtocolList'
			);
        }  catch (err) {
			const args = { status: errorCodes.GENERAL_ERROR, prev: err };
			this.logError(`${request.status}:${request.statusText}: Getting complex protocol list failed.`, 'getUserComplexProtocolList', true, args);
		}
    }

    async getUserProtocol(userAddress,protocol='ftm_tarot') {
        try {
			let request = await fetch(
				`${this.apiURL}/user/protocol?id=${userAddress}&protocol_id=${protocol}`
			);       
            if (request.status == 200) {
                const res = await request.json();
                return res;
            }
			this.logError(
				`${request.status}:${request.statusText}: Getting protocol ${protocol} failed.`,
				'getUserProtocol'
			);
        }  catch (err) {
			const args = { status: errorCodes.GENERAL_ERROR, prev: err };
			this.logError(`${request.status}:${request.statusText}: Getting protocol ${protocol} failed.`, 'getUserProtocol', true, args);
		}
    }    

	processResponse(response) {
		if (Object.keys(response).length == 0) { //is empty response
			const args = { status: errorCodes.PRICE_NOT_FOUND};
			this.logError(`Price not found in CoinGecko`, 'processResponse', true, args);
		}
		return response;
	}

	logError(msg, method, _throw = false, { status, prev } = { status: 0, prev: undefined }) {
		const errmsg = `ERR: ${this.constructor.name}/${method} <<< ${msg}`;
		console.log(errmsg);
		if (_throw) {
			throw new DebankApiError(status, prev, errmsg);
		}
	}
}

export const errorCodes = ec.debank;
export const debankApi = new Debank();
