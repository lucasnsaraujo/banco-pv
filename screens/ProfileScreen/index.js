import * as React from 'react';

import BackgroundGradient from '../../components/BackgroundGradient'
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { Header, ProfileInfoContainer, MyProfileText, Username, AccountNumber, UserProfilePhoto, UsernameContainer, AccountCreationDate } from './styles'

import { useLanguage } from '../../context/Language'


export default function ProfileScreen({navigation}) {

  const { languages, lang } = useLanguage();

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
            <Username>João da Silva</Username>
            <AccountCreationDate>03/10/1992</AccountCreationDate>
            <AccountNumber>{languages[lang].account} 0001</AccountNumber>
          </UsernameContainer>
        </ProfileInfoContainer>
      </Header>


     
    </BackgroundGradient>
    </>
  )
}