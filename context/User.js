import * as React from 'react'
import {useState, useContext, createContext} from 'react'

const UserContext = createContext({})

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
    })
    const [transactions, setTransactions] = useState([])

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, transactions, setTransactions}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const { currentUser, setCurrentUser, transactions, setTransactions } = useContext(UserContext)
    return {currentUser, setCurrentUser, transactions, setTransactions};
}