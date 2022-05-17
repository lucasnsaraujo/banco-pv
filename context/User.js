import * as React from 'react'
import {useState, useContext, createContext} from 'react'

const UserContext = createContext({})

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    return {currentUser, setCurrentUser};
}