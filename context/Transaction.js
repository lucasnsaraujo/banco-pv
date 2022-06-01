import * as React from 'react'
import { useState, useContext, createContext } from 'react'
import { api } from '../services/api'

const TransactionContext = createContext({})

export function TransactionProvider({children}) {

    const [transactions, setTransactions] = useState()

    
    function createTransaction() {
        
    }

    return (
        <TransactionContext.Provider value={{transactions, setTransactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    const { transactions, setTransactions, createTransaction } = useContext(TransactionContext)
    return { transactions, setTransactions, createTransaction};
}


