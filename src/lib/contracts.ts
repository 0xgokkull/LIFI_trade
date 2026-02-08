export const CONTRACT_ADDRESSES = {
    localhost: {
        mockWETH: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        mockUSDC: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
        swapRouter: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
        tradingEngine: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
        priceOracle: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    },
};

export const SWAP_ROUTER_ABI = [
    {
        "inputs": [
            { "internalType": "uint256", "name": "amountIn", "type": "uint256" },
            { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" },
            { "internalType": "address", "name": "tokenIn", "type": "address" },
            { "internalType": "address", "name": "tokenOut", "type": "address" },
            { "internalType": "uint24", "name": "fee", "type": "uint24" },
            { "internalType": "address", "name": "recipient", "type": "address" }
        ],
        "name": "swapExactInputSingle",
        "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "slippageTolerance",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
] as const;

export const TRADING_ENGINE_ABI = [
    {
        "inputs": [
            { "internalType": "address", "name": "tokenIn", "type": "address" },
            { "internalType": "address", "name": "tokenOut", "type": "address" },
            { "internalType": "uint256", "name": "amountPerInterval", "type": "uint256" },
            { "internalType": "uint256", "name": "interval", "type": "uint256" },
            { "internalType": "uint256", "name": "totalIntervals", "type": "uint256" }
        ],
        "name": "createDCA",
        "outputs": [{ "internalType": "uint256", "name": "planId", "type": "uint256" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "tokenIn", "type": "address" },
            { "internalType": "address", "name": "tokenOut", "type": "address" },
            { "internalType": "uint256", "name": "amountIn", "type": "uint256" },
            { "internalType": "uint256", "name": "stopPrice", "type": "uint256" },
            { "internalType": "uint256", "name": "expiresIn", "type": "uint256" }
        ],
        "name": "createStopLossOrder",
        "outputs": [{ "internalType": "uint256", "name": "tradeId", "type": "uint256" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "tokenIn", "type": "address" },
            { "internalType": "address", "name": "tokenOut", "type": "address" },
            { "internalType": "uint256", "name": "amountIn", "type": "uint256" },
            { "internalType": "uint256", "name": "targetPrice", "type": "uint256" },
            { "internalType": "uint256", "name": "expiresIn", "type": "uint256" }
        ],
        "name": "createTakeProfitOrder",
        "outputs": [{ "internalType": "uint256", "name": "tradeId", "type": "uint256" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStatistics",
        "outputs": [
            { "internalType": "uint256", "name": "swaps", "type": "uint256" },
            { "internalType": "uint256", "name": "bridges", "type": "uint256" },
            { "internalType": "uint256", "name": "trades", "type": "uint256" },
            { "internalType": "bool", "name": "isPaused", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "tradeId", "type": "uint256" },
            { "indexed": false, "internalType": "string", "name": "strategyType", "type": "string" }
        ],
        "name": "TradePlaced",
        "type": "event"
    }
] as const;

export const PRICE_ORACLE_ABI = [
    {
        "inputs": [{ "internalType": "string", "name": "symbol", "type": "string" }],
        "name": "getLatestPrice",
        "outputs": [
            {
                "components": [
                    { "internalType": "uint256", "name": "price", "type": "uint256" },
                    { "internalType": "uint8", "name": "decimals", "type": "uint8" },
                    { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
                    { "internalType": "uint80", "name": "roundId", "type": "uint80" }
                ],
                "internalType": "struct PriceOracle.PriceData",
                "name": "priceData",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "string", "name": "symbol", "type": "string" }],
        "name": "getNormalizedPrice",
        "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
] as const;

export const ERC20_ABI = [
    {
        "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "spender", "type": "address" },
            { "internalType": "uint256", "name": "value", "type": "uint256" }
        ],
        "name": "approve",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "owner", "type": "address" },
            { "internalType": "address", "name": "spender", "type": "address" }
        ],
        "name": "allowance",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256", "name": "amount", "type": "uint256" }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as const;
