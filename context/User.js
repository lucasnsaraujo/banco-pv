import * as React from 'react'
import {useState, useContext, createContext} from 'react'
import { api } from '../services/api'

const UserContext = createContext({})

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState({
        profile: 'avatar1'
    })
    const [lastGeneratedId, setLastGeneratedId] = useState(0)

    function generateAccountNumber() {
        api.get('/users')
            .then(response => {
                    const lastUserCreated = response.data.length;
                    const number = parseInt(lastUserCreated) + 1
                    console.log('Number: ', number)
                    console.log('Number To String: ', number.toString())
                    setLastGeneratedId(number);
                    console.log(lastGeneratedId)
                })
    }

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, generateAccountNumber, lastGeneratedId}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const { currentUser, setCurrentUser, generateAccountNumber, lastGeneratedId } = useContext(UserContext)
    return {currentUser, setCurrentUser, generateAccountNumber, lastGeneratedId};
}