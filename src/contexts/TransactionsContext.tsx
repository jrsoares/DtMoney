import {ReactNode, useEffect, useState, createContext} from "react";

interface Transaction {
    id: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    category: string;
    createdAt: string
}

interface TransactionsProvidersProps {
    children: ReactNode
}

interface  TransactionContextType {
    transactions: Transaction[]
}

export const TransactionContext = createContext({} as TransactionContextType)
export function TransactionsProvider({ children} :TransactionsProvidersProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions');
        const data = await response.json();

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()

    },[])

    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}