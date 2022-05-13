import * as React from 'react'
import { useContext } from 'react';
import { Text } from 'react-native'

import BackgroundGradient from '../../components/BackgroundGradient'
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'

import { SettingsButton, HeaderContainer, AppLogo, Title, FormInputContainer, FormInput, FormTitle, EnterButton, EnterButtonText, CreateAccountButton, CreateAccountButtonText } from './styles'
import {  Settings } from 'react-native-feather'

import { useForm, Controller } from 'react-hook-form'

import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Toast from 'react-native-toast-message';

import { useLanguage, LanguageContext } from '../../context/Language'



export default function LoginScreen({navigation}) {

  const {languages, lang} = useLanguage();


  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      cpf: '12345678901',
      password: 'password'
    }
  });
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Dashboard')
  };


  return (
    <BackgroundGradient>
      <IgnoreStatusBar/>
      {(errors.cpf || errors.password) && Toast.show({type: 'error', text1: 'CPF ou senha inválidos.', text2: ' Por favor, , tente novamente.'})}
      <HeaderContainer>
        <SettingsButton onPress={() => navigation.navigate('Settings')}>
          <Settings width={30} height={30} color="#fff"/>
        </SettingsButton>
      </HeaderContainer>
      <AppLogo source={logo}/>
      <Title>LOGIN</Title>
      <FormTitle>{languages[lang].id}:</FormTitle>
      <Controller
        control={control}
        rules={{ required: true, minLength: 11, maxLength: 11 }}
        render={({field: { onChange, onBlur, value }}) => (
          <FormInputContainer>
            <Icon name="address-card" size={30} color="white"/>
            <FormInput
            onBlue={onBlur}
            onChangeText={onChange}
            value={value}
            style={{marginLeft: 0}}
            />
          </FormInputContainer>
        )}
        name="cpf"
      />
      <FormTitle>{languages[lang].password}:</FormTitle>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: { onChange, onBlur, value }}) => (
          <FormInputContainer>
            <Icon name="lock" size={30} color="white" style={{marginLeft: 5}}/>
            <FormInput
            onBlue={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            style={{marginLeft: 5}}
            />
          </FormInputContainer>
        )}
        name="password"
      />
      <EnterButton onPress={handleSubmit(onSubmit)}>
        <EnterButtonText>{languages[lang].login}</EnterButtonText>
      </EnterButton>
      <Text style={{color: 'white', paddingTop: 20, paddingBottom: 20, fontSize: 24}}>ou</Text>
      <CreateAccountButton onPress={() => navigation.navigate('Register')}>
        <CreateAccountButtonText>{languages[lang].register}</CreateAccountButtonText>
      </CreateAccountButton>

    </BackgroundGradient>
  )
}