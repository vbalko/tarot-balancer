export class StatusError extends Error {
	constructor(status, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, StatusError);
		}

		this.name = this.constructor.name;
        this.status = status;
        this.date = new Date();
	}
};

export class GeckoApiError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, GeckoApiError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export class DebankApiError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, DebankApiError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export class TokenError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, TokenError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export class PriceSourceError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, PriceSourceError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export class WalletError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, WalletError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export class CovalentApiError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CovalentApiError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export class TarotUtilsError extends StatusError {
	constructor(status, prev = undefined, ...params) {
		super(...params);

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, TarotUtilsError);
		}

		this.name = this.constructor.name;
		this.prev = prev; //previous error
        this.status = status;
        this.date = new Date();
	}	
}

export const errorCodes = {
	'gecko': {
		'GENERAL_ERROR': 0,
		'CANT_GET_PRICE': 1,
		'PRICE_NOT_FOUND': 2
	},
	'token': {
		'GENERAL_ERROR': 0,
		'NOT_READY': 1,
		'PICINFO_NOTFOUND': 2,
		'TYPE_ERROR': 3,
		'PRICE_NOTFOUND': 4
	},
	'priceSource': {
		'GENERAL_ERROR': 0,
		'NOT_READY': 1,
		'HISTPRICE_EMPTY': 2,
		'NO_HISTPRICE': 3,
		'UNKNOWN_DEX': 4,
		'NO_POOLDATA': 5
	},
	'wallet': {
		'GENERAL_ERROR': 0,
		'TYPE_ERROR': 1,
		'CREATE_TOKEN': 2,
		'GET_BALANCES': 3,
		'NOT_READY': 4,
		'GET_TOKENS': 5,
		'NOT_FOUND': 6
	},
	'picture': {
		'GENERAL_ERROR': 0
	},
	'communication': {
		'GENERAL_ERROR': 0,
		'TYPE_ERROR': 1,	
		'CANT_GET_PRICE': 2,
		'PRICE_NOT_FOUND': 3	
	},
    'tarot': {
        'GENERAL_ERROR': 0,
        'VAULT_TYPE': 1
    },
    'debank': {
        'GENERAL_ERROR': 0
    }
}