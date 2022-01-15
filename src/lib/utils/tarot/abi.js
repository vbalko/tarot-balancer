export const ABI = {
	cTarot: [
		{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'minter', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'mintAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'mintTokens', type: 'uint256' }
			],
			name: 'Mint',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newLiquidationIncentive',
					type: 'uint256'
				}
			],
			name: 'NewLiquidationIncentive',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'newSafetyMarginSqrt', type: 'uint256' }
			],
			name: 'NewSafetyMargin',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'redeemer', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'redeemAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'redeemTokens', type: 'uint256' }
			],
			name: 'Redeem',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'uint256', name: 'totalBalance', type: 'uint256' }],
			name: 'Sync',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			constant: true,
			inputs: [],
			name: 'DOMAIN_SEPARATOR',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'LIQUIDATION_INCENTIVE_MAX',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'LIQUIDATION_INCENTIVE_MIN',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'MINIMUM_LIQUIDITY',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'PERMIT_TYPEHASH',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'SAFETY_MARGIN_SQRT_MAX',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'SAFETY_MARGIN_SQRT_MIN',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_symbol', type: 'string' },
				{ internalType: 'address', name: '_underlying', type: 'address' },
				{ internalType: 'address', name: '_borrowable0', type: 'address' },
				{ internalType: 'address', name: '_borrowable1', type: 'address' }
			],
			name: '_initialize',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: '_setFactory',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'uint256', name: 'newLiquidationIncentive', type: 'uint256' }],
			name: '_setLiquidationIncentive',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'uint256', name: 'newSafetyMarginSqrt', type: 'uint256' }],
			name: '_setSafetyMarginSqrt',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'borrower', type: 'address' }],
			name: 'accountLiquidity',
			outputs: [
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'shortfall', type: 'uint256' }
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'borrower', type: 'address' },
				{ internalType: 'uint256', name: 'amount0', type: 'uint256' },
				{ internalType: 'uint256', name: 'amount1', type: 'uint256' }
			],
			name: 'accountLiquidityAmounts',
			outputs: [
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'shortfall', type: 'uint256' }
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'borrowable0',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'borrowable1',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'borrower', type: 'address' },
				{ internalType: 'address', name: 'borrowable', type: 'address' },
				{ internalType: 'uint256', name: 'accountBorrows', type: 'uint256' }
			],
			name: 'canBorrow',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'exchangeRate',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'factory',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'redeemer', type: 'address' },
				{ internalType: 'uint256', name: 'redeemAmount', type: 'uint256' },
				{ internalType: 'bytes', name: 'data', type: 'bytes' }
			],
			name: 'flashRedeem',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'getPrices',
			outputs: [
				{ internalType: 'uint256', name: 'price0', type: 'uint256' },
				{ internalType: 'uint256', name: 'price1', type: 'uint256' }
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'liquidationIncentive',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'minter', type: 'address' }],
			name: 'mint',
			outputs: [{ internalType: 'uint256', name: 'mintTokens', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'nonces',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'permit',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'redeemer', type: 'address' }],
			name: 'redeem',
			outputs: [{ internalType: 'uint256', name: 'redeemAmount', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'safetyMarginSqrt',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'liquidator', type: 'address' },
				{ internalType: 'address', name: 'borrower', type: 'address' },
				{ internalType: 'uint256', name: 'repayAmount', type: 'uint256' }
			],
			name: 'seize',
			outputs: [{ internalType: 'uint256', name: 'seizeTokens', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
			name: 'skim',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'sync',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'tarotPriceOracle',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'tokensUnlocked',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'underlying',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		}
	],
	bTarot: [
		{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'interestAccumulated', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'borrowIndex', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'totalBorrows', type: 'uint256' }
			],
			name: 'AccrueInterest',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'borrower', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'receiver', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'borrowAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'repayAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'accountBorrowsPrior', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'accountBorrows', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'totalBorrows', type: 'uint256' }
			],
			name: 'Borrow',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'BorrowApproval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'uint256', name: 'borrowRate', type: 'uint256' }],
			name: 'CalculateBorrowRate',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'uint256', name: 'kinkRate', type: 'uint256' }],
			name: 'CalculateKink',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'kinkBorrowRate', type: 'uint256' }
			],
			name: 'CalculateKinkBorrowRate',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'borrower', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'liquidator', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'seizeTokens', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'repayAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'accountBorrowsPrior', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'accountBorrows', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'totalBorrows', type: 'uint256' }
			],
			name: 'Liquidate',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'minter', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'mintAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'mintTokens', type: 'uint256' }
			],
			name: 'Mint',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'newAdjustSpeed', type: 'uint256' }
			],
			name: 'NewAdjustSpeed',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'address', name: 'newBorrowTracker', type: 'address' }
			],
			name: 'NewBorrowTracker',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'newKinkUtilizationRate', type: 'uint256' }
			],
			name: 'NewKinkUtilizationRate',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'newReserveFactor', type: 'uint256' }
			],
			name: 'NewReserveFactor',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'redeemer', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'redeemAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'redeemTokens', type: 'uint256' }
			],
			name: 'Redeem',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'uint256', name: 'totalBalance', type: 'uint256' }],
			name: 'Sync',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			constant: true,
			inputs: [],
			name: 'ADJUST_SPEED_MAX',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'ADJUST_SPEED_MIN',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'BORROW_FEE',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'BORROW_PERMIT_TYPEHASH',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'DOMAIN_SEPARATOR',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'KINK_BORROW_RATE_MAX',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'KINK_BORROW_RATE_MIN',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'KINK_MULTIPLIER',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'KINK_UR_MAX',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'KINK_UR_MIN',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'MINIMUM_LIQUIDITY',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'PERMIT_TYPEHASH',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'RESERVE_FACTOR_MAX',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_symbol', type: 'string' },
				{ internalType: 'address', name: '_underlying', type: 'address' },
				{ internalType: 'address', name: '_collateral', type: 'address' }
			],
			name: '_initialize',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'uint256', name: 'newAdjustSpeed', type: 'uint256' }],
			name: '_setAdjustSpeed',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'newBorrowTracker', type: 'address' }],
			name: '_setBorrowTracker',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: '_setFactory',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'uint256', name: 'newKinkUtilizationRate', type: 'uint256' }],
			name: '_setKinkUtilizationRate',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'uint256', name: 'newReserveFactor', type: 'uint256' }],
			name: '_setReserveFactor',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'accrualTimestamp',
			outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'accrueInterest',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'adjustSpeed',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'borrower', type: 'address' },
				{ internalType: 'address', name: 'receiver', type: 'address' },
				{ internalType: 'uint256', name: 'borrowAmount', type: 'uint256' },
				{ internalType: 'bytes', name: 'data', type: 'bytes' }
			],
			name: 'borrow',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'borrowAllowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'borrowApprove',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: 'borrower', type: 'address' }],
			name: 'borrowBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'borrowIndex',
			outputs: [{ internalType: 'uint112', name: '', type: 'uint112' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'borrowPermit',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'borrowRate',
			outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'borrowTracker',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'collateral',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'exchangeRate',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'exchangeRateLast',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'factory',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'getBlockTimestamp',
			outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'kinkBorrowRate',
			outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'kinkUtilizationRate',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'borrower', type: 'address' },
				{ internalType: 'address', name: 'liquidator', type: 'address' }
			],
			name: 'liquidate',
			outputs: [{ internalType: 'uint256', name: 'seizeTokens', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'minter', type: 'address' }],
			name: 'mint',
			outputs: [{ internalType: 'uint256', name: 'mintTokens', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'nonces',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'permit',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'rateUpdateTimestamp',
			outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'redeemer', type: 'address' }],
			name: 'redeem',
			outputs: [{ internalType: 'uint256', name: 'redeemAmount', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'reserveFactor',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
			name: 'skim',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'sync',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBorrows',
			outputs: [{ internalType: 'uint112', name: '', type: 'uint112' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'borrower', type: 'address' }],
			name: 'trackBorrow',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'underlying',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		}
	],
	vTarot: [
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'minter', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'mintAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'mintTokens', type: 'uint256' }
			],
			name: 'Mint',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'redeemer', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'redeemAmount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'redeemTokens', type: 'uint256' }
			],
			name: 'Redeem',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'caller', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'bounty', type: 'uint256' }
			],
			name: 'Reinvest',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'uint256', name: 'totalBalance', type: 'uint256' }],
			name: 'Sync',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			constant: true,
			inputs: [],
			name: 'DOMAIN_SEPARATOR',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'MINIMUM_LIQUIDITY',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'PERMIT_TYPEHASH',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'REINVEST_BOUNTY',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'WETH',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'contract IUniswapV2Router01', name: '_router', type: 'address' },
				{ internalType: 'contract IMasterChef', name: '_masterChef', type: 'address' },
				{ internalType: 'address', name: '_rewardsToken', type: 'address' },
				{ internalType: 'uint256', name: '_swapFeeFactor', type: 'uint256' },
				{ internalType: 'uint256', name: '_pid', type: 'uint256' }
			],
			name: '_initialize',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: '_setFactory',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'exchangeRate',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'factory',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'getReserves',
			outputs: [
				{ internalType: 'uint112', name: 'reserve0', type: 'uint112' },
				{ internalType: 'uint112', name: 'reserve1', type: 'uint112' },
				{ internalType: 'uint32', name: 'blockTimestampLast', type: 'uint32' }
			],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'isVaultToken',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'masterChef',
			outputs: [{ internalType: 'contract IMasterChef', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'minter', type: 'address' }],
			name: 'mint',
			outputs: [{ internalType: 'uint256', name: 'mintTokens', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'nonces',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'permit',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'pid',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'price0CumulativeLast',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'price1CumulativeLast',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'redeemer', type: 'address' }],
			name: 'redeem',
			outputs: [{ internalType: 'uint256', name: 'redeemAmount', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'reinvest',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'rewardsToken',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'router',
			outputs: [{ internalType: 'contract IUniswapV2Router01', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
			name: 'skim',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'swapFeeFactor',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'sync',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'token0',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'token1',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'underlying',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		}
	],
	erc20: [
		{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
			name: 'Paused',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
			name: 'PauserAdded',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
			name: 'PauserRemoved',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
			name: 'Unpaused',
			type: 'event'
		},
		{
			constant: true,
			inputs: [],
			name: 'ERR_INVALID_ZERO_VALUE',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'ERR_NO_ERROR',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
			name: 'addPauser',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' }
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
			],
			name: 'decreaseAllowance',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'deposit',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: true,
			stateMutability: 'payable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'addedValue', type: 'uint256' }
			],
			name: 'increaseAllowance',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
			name: 'isPauser',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'pause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'paused',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'renouncePauser',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'unpause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
			name: 'withdraw',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],
	pancakePair: [
		{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' }
			],
			name: 'Burn',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' }
			],
			name: 'Mint',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount0In', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'amount1In', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' }
			],
			name: 'Swap',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint112', name: 'reserve0', type: 'uint112' },
				{ indexed: false, internalType: 'uint112', name: 'reserve1', type: 'uint112' }
			],
			name: 'Sync',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			constant: true,
			inputs: [],
			name: 'DOMAIN_SEPARATOR',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'MINIMUM_LIQUIDITY',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'PERMIT_TYPEHASH',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
			name: 'burn',
			outputs: [
				{ internalType: 'uint256', name: 'amount0', type: 'uint256' },
				{ internalType: 'uint256', name: 'amount1', type: 'uint256' }
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'factory',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'getReserves',
			outputs: [
				{ internalType: 'uint112', name: '_reserve0', type: 'uint112' },
				{ internalType: 'uint112', name: '_reserve1', type: 'uint112' },
				{ internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' }
			],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: '_token0', type: 'address' },
				{ internalType: 'address', name: '_token1', type: 'address' }
			],
			name: 'initialize',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'kLast',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
			name: 'mint',
			outputs: [{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'nonces',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'permit',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'price0CumulativeLast',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'price1CumulativeLast',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
			name: 'skim',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
				{ internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'bytes', name: 'data', type: 'bytes' }
			],
			name: 'swap',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [],
			name: 'sync',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'token0',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'token1',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			payable: false,
			stateMutability: 'view',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			constant: false,
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],
	spiritRouter: [
		{
			inputs: [
				{ internalType: 'address', name: '_factory', type: 'address' },
				{ internalType: 'address', name: '_WETH', type: 'address' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [],
			name: 'WETH',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'tokenA', type: 'address' },
				{ internalType: 'address', name: 'tokenB', type: 'address' },
				{ internalType: 'uint256', name: 'amountADesired', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountBDesired', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'addLiquidity',
			outputs: [
				{ internalType: 'uint256', name: 'amountA', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountB', type: 'uint256' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'token', type: 'address' },
				{ internalType: 'uint256', name: 'amountTokenDesired', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'addLiquidityETH',
			outputs: [
				{ internalType: 'uint256', name: 'amountToken', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETH', type: 'uint256' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }
			],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'factory',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOut', type: 'uint256' },
				{ internalType: 'uint256', name: 'reserveIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'reserveOut', type: 'uint256' }
			],
			name: 'getAmountIn',
			outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'reserveIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'reserveOut', type: 'uint256' }
			],
			name: 'getAmountOut',
			outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOut', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' }
			],
			name: 'getAmountsIn',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' }
			],
			name: 'getAmountsOut',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountA', type: 'uint256' },
				{ internalType: 'uint256', name: 'reserveA', type: 'uint256' },
				{ internalType: 'uint256', name: 'reserveB', type: 'uint256' }
			],
			name: 'quote',
			outputs: [{ internalType: 'uint256', name: 'amountB', type: 'uint256' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'tokenA', type: 'address' },
				{ internalType: 'address', name: 'tokenB', type: 'address' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'removeLiquidity',
			outputs: [
				{ internalType: 'uint256', name: 'amountA', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountB', type: 'uint256' }
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'token', type: 'address' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'removeLiquidityETH',
			outputs: [
				{ internalType: 'uint256', name: 'amountToken', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETH', type: 'uint256' }
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'token', type: 'address' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
			outputs: [{ internalType: 'uint256', name: 'amountETH', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'token', type: 'address' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'bool', name: 'approveMax', type: 'bool' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'removeLiquidityETHWithPermit',
			outputs: [
				{ internalType: 'uint256', name: 'amountToken', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETH', type: 'uint256' }
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'token', type: 'address' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'bool', name: 'approveMax', type: 'bool' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
			outputs: [{ internalType: 'uint256', name: 'amountETH', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'tokenA', type: 'address' },
				{ internalType: 'address', name: 'tokenB', type: 'address' },
				{ internalType: 'uint256', name: 'liquidity', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
				{ internalType: 'bool', name: 'approveMax', type: 'bool' },
				{ internalType: 'uint8', name: 'v', type: 'uint8' },
				{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
				{ internalType: 'bytes32', name: 's', type: 'bytes32' }
			],
			name: 'removeLiquidityWithPermit',
			outputs: [
				{ internalType: 'uint256', name: 'amountA', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountB', type: 'uint256' }
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOut', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapETHForExactTokens',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapExactETHForTokens',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
			outputs: [],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapExactTokensForETH',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapExactTokensForTokens',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOut', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapTokensForExactETH',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'amountOut', type: 'uint256' },
				{ internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
				{ internalType: 'address[]', name: 'path', type: 'address[]' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'deadline', type: 'uint256' }
			],
			name: 'swapTokensForExactTokens',
			outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{ stateMutability: 'payable', type: 'receive' }
	]
};
