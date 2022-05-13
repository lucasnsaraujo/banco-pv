import * as React from 'react'

import BackgroundGradient from '../../components/BackgroundGradient/index'
import {IgnoreStatusBar} from '../../components/IgnoreStatusBar/index'
import TopNavigationButtons from '../../components/TopNavigationButtons'

import { useForm, Controller } from 'react-hook-form'

import { Title, FormInputContainer, FormInput, FormTitle, SubmitButton, CancelButton, ButtonsContainer } from  './styles'

import { Text, KeyboardAvoidingView } from 'react-native'
 
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useLanguage } from '../../context/Language'

export default function CreateAccount({navigation}) {

  const { languages, lang } = useLanguage()

  const { control, handleSubmit, formState: { errors }} = useForm({})

  const onSubmit = (data) => {
    console.log(data)
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
              <FormInput
              onBlue={onBlur}
              onChangeText={onChange}
              value={value}
              style={{marginLeft: 0}}
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
          <Text style={{ 
            color: 'white', 
            fontSize: 21,  
            fontFamily: 'Poppins_700Bold'
            }}>{languages[lang].register}</Text>
        </SubmitButton>
      </ButtonsContainer>
      
    </BackgroundGradient>
  )

}