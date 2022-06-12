import * as React from 'react'
import { useState } from 'react'

import BackgroundGradient from '../../components/BackgroundGradient'
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { Title, Subtitle, FormTitle, FormInputContainer, FormInput, SendButton, CancelButton, CancelButtonText, SendButtonText, ButtonsContainer } from './styles'

import Icon from 'react-native-vector-icons/Entypo'

import { ActivityIndicator } from 'react-native'

import { useLanguage } from '../../context/Language'

import { sendEmail } from '../../services/sendEmail'

import { api } from '../../services/api'
import { useUser } from '../../context/User'

import Toast from 'react-native-toast-message'

export default function HelpScreen({navigation}) {

  const [username, setUsername] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { languages, lang } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)

  const { currentUser } = useUser();

  return(
    <BackgroundGradient>
      <IgnoreStatusBar/>
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Title>{languages[lang].help}</Title>
      <Subtitle>{languages[lang].contactUs}</Subtitle>
      <FormTitle>{languages[lang].subject}:</FormTitle>
      <FormInputContainer>
        <Icon name="text" size={30} color="white"/>
        <FormInput onChangeText={setSubject}/>
      </FormInputContainer>
      <FormTitle>{languages[lang].message}:</FormTitle>
      <FormInputContainer style={{height: 250, marginBottom: 0}}>
        <FormInput style={{height: 250, paddingTop: 15}} multiline onChangeText={setMessage}/>
      </FormInputContainer>
      <ButtonsContainer>
        <CancelButton onPress={()=> navigation.goBack()}>
          <CancelButtonText>{languages[lang].cancel}</CancelButtonText>
        </CancelButton>
        <SendButton 
          onPress={() => {
            setIsLoading(true)
            if (message != '' && subject != '') {
              
              api.post('/help', {
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                subject,
                message
              }).then(()=> {
                Toast.show({type: 'success', text1: languages[lang].helpSuccessToast})
                setIsLoading(false)
                navigation.goBack();
              })
            } else {
              Toast.show({
                type: 'error',
                text1: languages[lang].helpFailedToast,
                text2: languages[lang].helpFailedToast2,
              })
              setIsLoading(false)
            }
          }
          }>
          <SendButtonText>
            {isLoading ? <ActivityIndicator color="grey"/> : languages[lang].send}
          </SendButtonText>
        </SendButton>
      </ButtonsContainer>
    </BackgroundGradient>
  )
}