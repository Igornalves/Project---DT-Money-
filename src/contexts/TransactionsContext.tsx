import { createContext, ReactNode, useEffect, useState } from "react";

interface transaction {
    id: number;
    description: string; 
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: transaction[];
    fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps){

    const [transactions, setTransactions] = useState<transaction[]>([])

    async function fetchTransactions(query?: string){
        const url = new URL('http://localhost:3333/transactions')
        
        if (query) {
            url.searchParams.append('q', query)
        }

        console.log("Fetch URL:", url.toString());

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error("Erro ao buscar transações:", error); // Debug: Captura de erros
        }
        // const response = await fetch(url)
        // const data = await response.json()
        // setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}
