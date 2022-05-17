import * as React from 'react';

import BackgroundGradient from '../../components/BackgroundGradient'
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { Header, ProfileInfoContainer, MyProfileText, Username, AccountNumber, UserProfilePhoto, UsernameContainer, AccountCreationDate, LogoutButton } from './styles'

import { Text } from 'react-native'

import { useLanguage } from '../../context/Language'
import { useUser } from '../../context/User';


export default function ProfileScreen({navigation}) {

  const { languages, lang } = useLanguage();
  const { currentUser } = useUser();

  return (
    <>
    <BackgroundGradient>
      <IgnoreStatusBar/>
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Header>
        <MyProfileText>{languages[lang].myProfile}</MyProfileText>
        <ProfileInfoContainer>
          <UserProfilePhoto source={{ uri: 'https://www.github.com/lucasnsaraujo.png' }}/>
          <UsernameContainer>
            <Username>{currentUser.firstName}</Username>
            <AccountCreationDate>03/10/1992</AccountCreationDate>
            <AccountNumber>{languages[lang].account} {parseInt(Math.random()*10000)}</AccountNumber>
          </UsernameContainer>
        </ProfileInfoContainer>
      </Header>
      <LogoutButton onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white'}}>Logout</Text>
      </LogoutButton>


     
    </BackgroundGradient>
    </>
  )
}