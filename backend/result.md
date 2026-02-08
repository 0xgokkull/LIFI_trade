
# Test Results (Local Integration)
Date: 2026-02-08T16:09:12.070Z

## Environment
- **Network**: Local Hardhat Loop
- **Simulation**: WETH -> LINK Swap

## 1. Deposit (Wrapping/Minting)
- **Status**: ✅ SUCCESS
- **Transaction Hash**: 0xc52a5832e2e44f16bb9c40099f7e96aa9a6fd5c3c85e410568b98aa730425284
- **Token**: WETH
- **Amount**: 10.0 WETH

## 2. Swap Execution (WETH -> LINK)
- **Status**: ✅ SUCCESS
- **Transaction Hash**: 0xb1503efdf29b9d48adeadc51c7749efa6ce89ca8edcf0beecb7e730ad97bca67
- **From**: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
- **To**: 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853 (SwapRouter)
- **Amount In**: 1.0 WETH
- **Amount Out**: 1.0 LINK

## 3. Withdraw (Unwrapping/Burning)
- **Status**: ✅ SUCCESS
- **Transaction Hash**: 0xa0d37e28c86fa584098cdcb0b475c17bf10815bbf15162d1b0685a0c17b5de27
- **Token**: WETH
- **Amount**: 2.0 WETH

## 4. Bridge Execution
- **Status**: ⚠️ SKIPPED (Mock CCIP Limitation)
- **Note**: BridgeRouter requires valid Chainlink CCIP Router on testnet.
