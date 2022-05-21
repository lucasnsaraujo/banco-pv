import * as React from 'react';
import { useContext, useState, createContext } from 'react'
import { } from 'react-native'

import avatar1 from '../assets/avatars/avatar1.png'
import avatar2 from '../assets/avatars/avatar2.png'
import avatar3 from '../assets/avatars/avatar3.png'
import avatar4 from '../assets/avatars/avatar4.png'
import avatar5 from '../assets/avatars/avatar5.png'
import avatar6 from '../assets/avatars/avatar6.png'

const AvatarContext = createContext({})

export function AvatarProvider({children}) {

    const [currentAvatar, setCurrentAvatar] = useState('avatar1')

    function getAvatarPicture(currentAvatar){
        switch (currentAvatar) {
          case 'avatar1':
            return avatar1;
          case 'avatar2':
            return avatar2;
          case 'avatar3':
            return avatar3;
          case 'avatar4':
            return avatar4;
          case 'avatar5':
            return avatar5;
          case 'avatar6':
            return avatar6;
        }
      }

    return (
        <AvatarContext.Provider value={{getAvatarPicture, currentAvatar, setCurrentAvatar}}>
            {children}
        </AvatarContext.Provider>
    )
}

export function useAvatar(){
    const { setCurrentAvatar, currentAvatar, getAvatarPicture } = useContext(AvatarContext);
    return { setCurrentAvatar, currentAvatar, getAvatarPicture}
}