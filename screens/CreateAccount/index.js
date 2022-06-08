import * as React from 'react'

import { useState } from 'react'

import BackgroundGradient from '../../components/BackgroundGradient/index'
import {IgnoreStatusBar} from '../../components/IgnoreStatusBar/index'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { useForm, Controller } from 'react-hook-form'

import { MaskedInput, Title, FormInputContainer, FormInput, FormTitle, SubmitButton, CancelButton, ButtonsContainer } from  './styles'

import { Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
 
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useLanguage } from '../../context/Language'

import { api } from '../../services/api'

import { v4 as uuidv4} from 'uuid'

import Toast from 'react-native-toast-message'
import { useUser } from '../../context/User'

import { Masks } from 'react-native-mask-input'


export default function CreateAccount({navigation}) {

  const { languages, lang } = useLanguage()

  const { control, handleSubmit, formState: { errors }} = useForm({})

  const { generateAccountNumber, lastGeneratedId } = useUser()

  const [isLoading, setIsLoading] = useState(false);
  const [currentAccountNumber, setCurrentAccountNumber] = useState(0);

  const onSubmit = async (data) => {
    await api.get('/users')
    .then((response) => {
      const number = parseInt(response.data.length) + 1;
      console.log(`Number: ${number}`)
      setIsLoading(true)
      api.post('/users', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        cpf: data.cpf,
        birthdate: data.birthdate,
        password: data.password,
        createdAt: Date.now().toString(),
        active: true,
        accountNumber: number,
      }).then(response => {
        console.log(response.data)
        setIsLoading(false)
        navigation.navigate('Login')
        Toast.show({
          type: 'success',
          text1: 'Usuário criado com sucesso!',
          text2: 'Agora insira seus dados e logue em sua conta.'
        })
      })
      .catch(error => {
        console.log(error.response)
        Toast.show({
          type: 'error',
          text1: 'Ocorreu um erro',
          text2: 'Verifique seus dados e tente novamente.'
        })
        setIsLoading(false)
      })
    })
    }
    

  return(
    <BackgroundGradient>
      <IgnoreStatusBar/>
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')}/>
      <Title>{languages[lang].register}</Title>
      <Controller
        control={control}
        rules={ { required: true  } }
        render={({ field : { onChange, onBlur, value }}) => (
          <>
            <FormTitle>{languages[lang].email}</FormTitle>
            <FormInputContainer>
              <Icon name="envelope" size={30} color="white"/>
              <FormInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
              autoCapitalize="none"
              />
            </FormInputContainer>
          </>
  )}
        name="email"
      />

      <Controller
        control={control}
        rules={ { required: true, maxLength: 10 } }
        render={({ field : { onChange, onBlur, value }}) => (
          <>
            <FormTitle>{languages[lang].firstName}</FormTitle>
            <FormInputContainer>
              <Icon name="user" size={30} color="white"/>
              <FormInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
              />
            </FormInputContainer>
          </>
  )}
        name="firstName"
      />

      <Controller
        control={control}
        rules={ { required: true  } }
        render={({ field : { onChange, onBlur, value }}) => (
          <>
            <FormTitle>{languages[lang].lastName}</FormTitle>
            <FormInputContainer>
              <Icon name="user" size={30} color="white"/>
              <FormInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
              />
            </FormInputContainer>
          </>
  )}
        name="lastName"
      />

      <Controller
        control={control}
        rules={ { required: true, minLength: 11, maxLength: 11  } }
        render={({ field : { onChange, onBlur, value }}) => (
          <>
            <FormTitle>{languages[lang].id}</FormTitle>
            <FormInputContainer>
              <Icon name="address-card" size={30} color="white"/>
              <FormInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
              />
            </FormInputContainer>
          </>
  )}
        name="cpf"
      />

      <Controller
        control={control}
        rules={ { required: true  } }
        render={({ field : { onChange, onBlur, value }}) => (
          <>
            <FormTitle>{languages[lang].birthdate}</FormTitle>
            <FormInputContainer>
              <Icon name="calendar" size={30} color="white"/>
              <MaskedInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
              mask={Masks.DATE_DDMMYYYY}
              />
            </FormInputContainer>
          </>
  )}
        name="birthdate"
      />

      <Controller
        control={control}
        rules={ { required: true  } }
        render={({ field : { onChange, onBlur, value }}) => (
          <>
            <FormTitle>{languages[lang].password}</FormTitle>
            <FormInputContainer>
              <Icon name="lock" size={30} color="white" style={{marginLeft: 5}}/>
              <FormInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
              secureTextEntry
              autoCapitalize="none"
              />
            </FormInputContainer>
          </>
  )}
        name="password"
      />
      <ButtonsContainer>
        <CancelButton onPress={() => navigation.navigate('Login')}>
          <Text style={{
            color: '#FFA200', 
            fontSize: 21, 
            fontFamily: 'Poppins_700Bold'
            }}>{languages[lang].cancel}</Text>
        </CancelButton>
        <SubmitButton onPress={handleSubmit(onSubmit)}>
          {isLoading ? <ActivityIndicator color="white"/> : <Text style={{ 
            color: 'white', 
            fontSize: 21,  
            fontFamily: 'Poppins_700Bold'
            }}>{languages[lang].register}</Text>}
        </SubmitButton>
      </ButtonsContainer>
      
    </BackgroundGradient>
  )

}