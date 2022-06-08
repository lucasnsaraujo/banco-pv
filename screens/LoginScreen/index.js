import * as React from 'react'
import { useContext, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native'

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
import { useTransaction } from '../../context/Transaction';



export default function LoginScreen({navigation}) {

  const {languages, lang} = useLanguage();

  const { setCurrentUser, currentUser } = useUser();

  const { getTransactions, transactions, setTransactions } = useTransaction();

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      cpf: '',
      password: ''
    }
  });
  const onSubmit = data => {
    setLoading(true);
    api.get('/users')
    .then(response => {
      const users = response.data;
      const user = users.filter(user => user.cpf == data.cpf && user.password == data.password)
      if (user.length > 0) {
        console.log(user[0].firstName, user[0].lastName)
        const userInfo = {
          firstName: user[0].firstName,
          lastName: user[0].lastName,
          cpf: user[0].cpf,
          accountNumber: user[0].accountNumber || '0000',
          birthdate: user[0].birthdate,
          email: user[0].email
        }
        console.log(userInfo)
        return userInfo;
      } else {
        Toast.show({
          type: 'error',
          text1: 'Usuário ou senha incorretos.',
          text2: 'Verifique seus dados e tente novamente'
        })
        setLoading(false);
        return;
      }
    })
    .then((user) => {
      console.log('ASMDKASLD' + user)
      if (user) { 
        api.get('/transactions')
              .then(response => {
                const transactionsFiltered = response.data.filter(transaction => transaction.sender == user.cpf || transaction.receiver == user.cpf)
                const transactionsFormatted = transactionsFiltered.map(transaction => {
                  if (transaction.sender == data.cpf) {
                    return {...transaction, type: 'withdraw' }
                  }
                  else {
                    return {...transaction, type: 'deposit'}
                  }
                })
                setTransactions(transactionsFormatted);
                const balance = transactionsFormatted.reduce((acc, data) => {
                  if (data.type == 'withdraw')
                  return parseFloat(acc - parseFloat(data['value']))
                  else
                  return parseFloat(acc + parseFloat(data['value']))
                }, 0)
                console.log('USER == '+ user)
                setCurrentUser({firstName: user.firstName, lastName: user.lastName, cpf: user.cpf, accountNumber: user.accountNumber , balance, profile: currentUser.profile, birthdate: user.birthdate})
                setLoading(false)
                console.log(currentUser)
                navigation.navigate('Dashboard')
              }).catch(error => {
                console.log(error)
                setLoading(false)
              })
          }
    })
  };


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
        {loading ? <ActivityIndicator color="white"/> :<EnterButtonText>{languages[lang].login}</EnterButtonText>}
      </EnterButton>
      <Text style={{color: 'white', paddingTop: 20, paddingBottom: 20, fontSize: 24}}>ou</Text>
      <CreateAccountButton onPress={() => navigation.navigate('Register')}>
        <CreateAccountButtonText>{languages[lang].register}</CreateAccountButtonText>
      </CreateAccountButton>

    </BackgroundGradient>
  )
}