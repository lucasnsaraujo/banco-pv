import * as React from 'react'
import {useState, useContext, createContext} from 'react'
import { api } from '../services/api'

const UserContext = createContext({})

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState({
        profile: 'avatar1'
    })

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const { currentUser, setCurrentUser} = useContext(UserContext)
    return {currentUser, setCurrentUser};
}