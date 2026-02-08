import { create } from "zustand"

// Trade history entry
export interface TradeEntry {
    id: string
    timestamp: Date
    action: "buy" | "sell" | "bridge"
    asset: string
    amount: number
    price: number
    total: number
    status: "completed" | "pending" | "failed"
    txHash?: string
}

// Trade history state
interface TradeHistoryState {
    trades: TradeEntry[]
    isLoading: boolean
    page: number
    pageSize: number
    totalTrades: number

    // Actions
    setTrades: (trades: TradeEntry[]) => void
    addTrade: (trade: Omit<TradeEntry, "id">) => void
    setPage: (page: number) => void
    setLoading: (loading: boolean) => void
    fetchTrades: (page?: number) => Promise<void>
}

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9)

// Mock trade data
// Test result trades
const testTrades: TradeEntry[] = [
    {
        id: "tx3",
        timestamp: new Date(), // Withdraw (Recent)
        action: "sell", // Withdraw mapped to sell (Burn WETH)
        asset: "WETH",
        amount: 2.0,
        price: 2200,
        total: 4400,
        status: "completed",
        txHash: "0xa0d37e28c86fa584098cdcb0b475c17bf10815bbf15162d1b0685a0c17b5de27",
    },
    {
        id: "tx2",
        timestamp: new Date(Date.now() - 1000 * 60), // Swap (1 min ago)
        action: "buy", // Swap WETH->LINK mapped to Buy LINK
        asset: "LINK",
        amount: 1.0,
        price: 2200, // Value of 1 WETH input
        total: 2200,
        status: "completed",
        txHash: "0xb1503efdf29b9d48adeadc51c7749efa6ce89ca8edcf0beecb7e730ad97bca67",
    },
    {
        id: "tx1",
        timestamp: new Date(Date.now() - 1000 * 60 * 5), // Deposit (5 mins ago)
        action: "buy", // Deposit mapped to Buy WETH (Mint)
        asset: "WETH",
        amount: 10.0,
        price: 2200,
        total: 22000,
        status: "completed",
        txHash: "0xc52a5832e2e44f16bb9c40099f7e96aa9a6fd5c3c85e410568b98aa730425284",
    },
]

export const useTradeHistoryStore = create<TradeHistoryState>()((set, get) => ({
    trades: testTrades,
    isLoading: false,
    page: 1,
    pageSize: 10,
    totalTrades: testTrades.length,

    setTrades: (trades) => set({ trades }),

    addTrade: (trade) => {
        const newTrade: TradeEntry = {
            ...trade,
            id: generateId(),
        }
        set((state) => ({
            trades: [newTrade, ...state.trades],
            totalTrades: state.totalTrades + 1,
        }))
    },

    setPage: (page) => set({ page }),

    setLoading: (loading) => set({ isLoading: loading }),

    fetchTrades: async (page = 1) => {
        set({ isLoading: true })
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))
        set({
            isLoading: false,
            page,
            // In production, fetch paginated data
        })
    },
}))
