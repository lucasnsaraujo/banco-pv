import * as React from 'react'
import { useState } from 'react'

import BackgroundGradient from '../../components/BackgroundGradient'
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { Title, Subtitle, FormTitle, FormInputContainer, FormInput, SendButton, CancelButton, CancelButtonText, SendButtonText, ButtonsContainer } from './styles'

import Icon from 'react-native-vector-icons/Entypo'

import { useLanguage } from '../../context/Language'


export default function HelpScreen({navigation}) {

  const [username, setUsername] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { languages, lang } = useLanguage()

  return(
    <BackgroundGradient>
      <IgnoreStatusBar/>
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Title>{languages[lang].help}</Title>
      <Subtitle>{languages[lang].contactUs}</Subtitle>
      <FormTitle>{languages[lang].name}:</FormTitle>
      <FormInputContainer>
        <Icon name="user" size={30} color="white"/>
        <FormInput/>
      </FormInputContainer>
      <FormTitle>{languages[lang].subject}:</FormTitle>
      <FormInputContainer>
        <Icon name="text" size={30} color="white"/>
        <FormInput/>
      </FormInputContainer>
      <FormTitle>{languages[lang].message}:</FormTitle>
      <FormInputContainer style={{height: 250, marginBottom: 0}}>
        <FormInput style={{height: 250, paddingTop: 15}} multiline/>
      </FormInputContainer>
      <ButtonsContainer>
        <CancelButton onPress={()=> navigation.goBack()}>
          <CancelButtonText>{languages[lang].cancel}</CancelButtonText>
        </CancelButton>
        <SendButton>
          <SendButtonText>{languages[lang].cancel}</SendButtonText>
        </SendButton>
      </ButtonsContainer>
    </BackgroundGradient>
  )
}