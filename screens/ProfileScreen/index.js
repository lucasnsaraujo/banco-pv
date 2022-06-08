import * as React from 'react';

import BackgroundGradient from '../../components/BackgroundGradient'
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { Title, Header, ProfileInfoContainer, MyProfileText, Username, AccountNumber, UserProfilePhoto, UsernameContainer, AccountCreationDate, LogoutButton, ProfilePictureGrid, ProfilePictureTouchableOpacity, ProfileImage } from './styles'

import { Text } from 'react-native'

import { useLanguage } from '../../context/Language'
import { useUser } from '../../context/User';

import avatar1 from '../../assets/avatars/avatar1.png'
import avatar2 from '../../assets/avatars/avatar2.png'
import avatar3 from '../../assets/avatars/avatar3.png'
import avatar4 from '../../assets/avatars/avatar4.png'
import avatar5 from '../../assets/avatars/avatar5.png'
import avatar6 from '../../assets/avatars/avatar6.png'

import { useAvatar } from '../../context/Avatar'

export default function ProfileScreen({navigation}) {

  const { languages, lang } = useLanguage();
  const { currentUser, setCurrentUser } = useUser();
  const { getAvatarPicture, setCurrentAvatar } = useAvatar();

  return (
    <>
    <BackgroundGradient>
      <IgnoreStatusBar/>
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Header>
        <MyProfileText>{languages[lang].myProfile}</MyProfileText>
        <ProfileInfoContainer>
          <UserProfilePhoto source={getAvatarPicture(currentUser.profile)}/>
          <UsernameContainer>
            <Username>{currentUser.firstName}</Username>
            <AccountCreationDate>{currentUser.birthdate}</AccountCreationDate>
            <AccountNumber>{languages[lang].account} {currentUser.accountNumber}</AccountNumber>
          </UsernameContainer>
        </ProfileInfoContainer>
      </Header>
      <ProfilePictureGrid>
        <Title>{languages[lang].chooseProfilePhoto}:</Title>
        <ProfilePictureTouchableOpacity onPress={() => {setCurrentUser({...currentUser, profile:'avatar1'})}}>
          <ProfileImage source={avatar1}/>
        </ProfilePictureTouchableOpacity>
        <ProfilePictureTouchableOpacity onPress={() => {setCurrentUser({...currentUser, profile:'avatar2'})}}>
          <ProfileImage source={avatar2}/>
        </ProfilePictureTouchableOpacity>
        <ProfilePictureTouchableOpacity onPress={() => {setCurrentUser({...currentUser, profile:'avatar3'})}}>
          <ProfileImage source={avatar3}/>
        </ProfilePictureTouchableOpacity>
        <ProfilePictureTouchableOpacity onPress={() => {setCurrentUser({...currentUser, profile:'avatar4'})}}>
          <ProfileImage source={avatar4}/>
        </ProfilePictureTouchableOpacity>
        <ProfilePictureTouchableOpacity onPress={() => {setCurrentUser({...currentUser, profile:'avatar5'})}}>
          <ProfileImage source={avatar5}/>
        </ProfilePictureTouchableOpacity>
        <ProfilePictureTouchableOpacity onPress={() => {setCurrentUser({...currentUser, profile:'avatar6'})}}>
          <ProfileImage source={avatar6}/>
        </ProfilePictureTouchableOpacity>
      </ProfilePictureGrid>
      <LogoutButton onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white'}}>Logout</Text>
      </LogoutButton>


     
    </BackgroundGradient>
    </>
  )
}