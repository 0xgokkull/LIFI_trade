const { createConfig, getQuote, getStatus } = require('@lifi/sdk');
const { ethers } = require('ethers');
const hre = require('hardhat');

async function main() {
    console.log("🤖 LI.FI Monitoring Agent Started...");

    // 1. Setup Signer (Using Hardhat's first account for demo)
    const signers = await hre.ethers.getSigners();
    const signer = signers[0];
    const userAddress = await signer.getAddress();

    console.log(`👤 Monitoring for user: ${userAddress}`);
    try {
        const balance = await hre.ethers.provider.getBalance(userAddress);
        console.log(`💰 Balance: ${hre.ethers.formatEther(balance)} ETH`);
    } catch (e) {
        console.log(`💰 Balance: Error fetching balance (${e.message})`);
    }

    // 2. Initialize LI.FI SDK
    createConfig({
        integrator: 'trader-bot-demo',
    });

    // Debug: Check supported chains
    const { getChains } = require('@lifi/sdk');
    const chains = await getChains();
    console.log("Supported Chains:", chains.map(c => `${c.name} (${c.id})`).join(", "));

    // 3. Define Strategy Loop (Mainnet Demo)
    const strategy = {
        fromChain: 1, // Ethereum Mainnet
        toChain: 42161, // Arbitrum One
        fromToken: '0x0000000000000000000000000000000000000000', // Native ETH
        toToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC on Arbitrum
        amount: '10000000000000000', // 0.01 ETH
    };

    // Monitor Loop (Run once for demo, or loop with setInterval)
    console.log(`\n🔍 Scanning for cross-chain opportunities...`);

    try {
        // A. DECIDE: Get Quote
        console.log(`   Asking LI.FI for best route: Ethereum (ETH) -> Arbitrum (USDC)`);

        const quoteRequest = {
            fromChain: strategy.fromChain,
            toChain: strategy.toChain,
            fromToken: strategy.fromToken,
            toToken: strategy.toToken,
            fromAmount: strategy.amount,
            fromAddress: userAddress,
        };

        const quote = await getQuote(quoteRequest);

        if (!quote) {
            console.log("❌ No route found.");
            return;
        }

        console.log(`✅ Route Found!`);
        console.log(`   - Tool: ${quote.toolDetails?.key || 'Unknown'}`);
        console.log(`   - Estimated Output: ${quote.estimate.toAmountMin}`);
        if (quote.estimate.gasCosts && quote.estimate.gasCosts.length > 0) {
            console.log(`   - Gas Cost: ${quote.estimate.gasCosts[0].amountUSD} USD`);
        }

        // B. ACT: Execute Route
        console.log(`\n🚀 Executing Strategy...`);

        console.log(`   - Approving Token...`);
        console.log(`   - Signing Transaction...`);
        console.log(`   - Sending to LI.FI contract...`);

        // Uncomment to execute:
        // const { executeRoute } = require('@lifi/sdk');
        // await executeRoute(signer, quote);

        console.log(`🎉 Execution Simulated Successfully!`);
        console.log(`   (Uncomment executeRoute for real transaction on mainnet/testnet)`);

    } catch (error) {
        console.error("⚠️ Error in strategy loop:", error.message);
        if (error.cause) console.error("   Cause:", error.cause);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
