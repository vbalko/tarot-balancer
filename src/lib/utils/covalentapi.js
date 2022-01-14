class CovalentAPIClass {
	constructor() {
		this.class = 'CovalentAPI';
        this.key = 'ckey_d7c3cf3d8b89449697271f9b89b';
		// this.message = message;
	}

    async getBalances(address) {
        const url = `https://api.covalenthq.com/v1/250/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${this.key}`;
        const balance = await this.makeAPICall(url);
        return balance.data;
      }    

	logError(msg, method, showToast = false) {
		const errmsg = `ERR: ${this.constructor.name}/${method} <<< ${msg}`;
		console.log(errmsg);
		if (showToast) {
			//   this.message.showToast(errmsg);
		}
	}

	async makeAPICall(url) {
		const method = 'makeAPICall';
		try {
			const response = await fetch(url);
			if (!response.ok) {
				this.logError(response.status, method, true);
				throw new Error(response.status);
			}
			return response.json();
		} catch (error) {
			return error;
		}
	}
}

export const CovalentAPI = new CovalentAPIClass();
