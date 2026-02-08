import { create } from "zustand"
import { persist } from "zustand/middleware"

// Portfolio asset type
export interface PortfolioAsset {
    symbol: string
    name: string
    amount: number
    value: number
    price: number
    change24h: number
    allocation: number
    icon?: string
}

// Portfolio state
interface PortfolioState {
    totalValue: number
    change24h: number
    unrealizedPnl: number
    stablecoinBalance: number
    assets: PortfolioAsset[]
    isLoading: boolean
    lastUpdated: Date | null

    // Actions
    setPortfolio: (data: Partial<PortfolioState>) => void
    setLoading: (loading: boolean) => void
    refreshPortfolio: () => Promise<void>
}

// Mock portfolio data for demo
// Test results data from verification script
const testAssets: PortfolioAsset[] = [
    {
        symbol: "WETH",
        name: "Wrapped Ether",
        amount: 7.0, // 10 (Deposit) - 1 (Swap) - 2 (Withdraw)
        value: 15400, // Approx $2200 * 7
        price: 2200,
        change24h: 1.2,
        allocation: 95,
        icon: "Ξ",
    },
    {
        symbol: "LINK",
        name: "Chainlink",
        amount: 1.0, // Swapped 1 WETH for 1 LINK (Mock Rate 1:1)
        value: 15, // Real world approx, though mock was 1:1
        price: 15,
        change24h: 0.5,
        allocation: 5,
        icon: "⛓",
    },
]

export const usePortfolioStore = create<PortfolioState>()((set) => ({
    totalValue: 15415.0,
    change24h: 1.2,
    unrealizedPnl: 415.0,
    stablecoinBalance: 0,
    assets: testAssets,
    isLoading: false,
    lastUpdated: new Date(),

    setPortfolio: (data) => set((state) => ({ ...state, ...data })),

    setLoading: (loading) => set({ isLoading: loading }),

    refreshPortfolio: async () => {
        set({ isLoading: true })
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        set({
            isLoading: false,
            lastUpdated: new Date(),
            // In production, fetch real data here
        })
    },
}))
