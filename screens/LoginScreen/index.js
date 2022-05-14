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
import { api } from '../../services/api';
import { useUser } from '../../context/User';



export default function LoginScreen({navigation}) {

  const {languages, lang} = useLanguage();

  const { setTransactions, setCurrentUser } = useUser();


  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      cpf: '',
      password: ''
    }
  });
  const onSubmit = data => {
    api.get('/users')
    .then(response => {
      const users = response.data;
      const user = users.filter(user => user.cpf === data.cpf && user.password === data.password)
      if (user.length > 0) {
        getTransactions();
        navigation.navigate('Dashboard')
        setCurrentUser({firstName: data.firstName, lastName: data.lastName})
        

        
      } else {
        Toast.show({
          type: 'error',
          text1: 'Usuário ou senha incorretos.',
          text2: 'Verifique seus dados e tente novamente'
        })
      }
    })
  };

  const getTransactions = (cpf) => {
    api.get('/transactions')
    .then(response => {
      const transactions = response.data.filter(
        item => item.sender == cpf || item.receiver == cpf
        )
      setTransactions(transactions);
    })
  } 


  return (
    <BackgroundGradient>
      <IgnoreStatusBar/>
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