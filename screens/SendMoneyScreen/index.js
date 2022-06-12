import * as React from 'react';
import { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import BackgroundGradient from '../../components/BackgroundGradient/index';
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar/index';
import TopNavigationButtons from '../../components/TopNavigationButtons/index';

import Icon from 'react-native-vector-icons/FontAwesome5'

import {
  Title,
  DonateButton,
  ButtonsContainer,
  InputAboveText,
  ValueTextInputContainer,
  ValueTextInput,
  CancelButtonText,
  DonateButtonText,
  CpfInputContainer,
  CpfInput,
  MaskedInput
} from './styles';

import { DollarSign } from 'react-native-feather'

import { api } from '../../services/api'

import CurrencyInput from 'react-native-currency-input';

import { useForm, Controller } from 'react-hook-form'

import { useLanguage } from '../../context/Language'

import CancelButton from '../../components/CancelButton';

import { useUser } from '../../context/User'

import { useTransaction } from '../../context/Transaction';

import Toast from 'react-native-toast-message'

import { Masks } from 'react-native-mask-input';

export default function SendMoneyScreen({navigation}) {

  const { languages, lang } = useLanguage()

  const { control, handleSubmit, formState: { errors } } = useForm();

  const { currentUser, setCurrentUser } = useUser();

  const { setTransactions } = useTransaction();

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = data => {
    setIsLoading(true);
    api.post('/transactions', {
      sender: currentUser.cpf,
      receiver: data.receiver,
      value: data.value,
      date: Date.now()
    })
    .then(response => {
      api.get('transactions')
      .then(response => {
                const transactionsFiltered = response.data.filter(transaction => transaction.sender == currentUser.cpf || transaction.receiver == currentUser.cpf)
                const transactionsFormatted = transactionsFiltered.map(transaction => {
                  if (transaction.sender == currentUser.cpf) {
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
                setCurrentUser({...currentUser, balance})
                console.log(currentUser)
                setIsLoading(false)
                navigation.navigate('Dashboard')
                Toast.show({
                  type: 'success',
                  text1: languages[lang].transferSuccessToast,
                  text2: languages[lang].transferSuccessToast2,
                })
      })
    })
    .catch(error => Toast.show({type: 'error', text1: 'Erro ao completar transação', text2: 'Tente novamente'}))
  }

  return (
    <BackgroundGradient>
      <IgnoreStatusBar />
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Title>{languages[lang].transference}</Title>
      <InputAboveText>{languages[lang].value}: </InputAboveText>
      <ValueTextInputContainer>
        <DollarSign width={30} height={30} color="#C7C1C1" />
        <Controller 
          name="value"
          control={control}
          rules={{ required: true, min: 1, max: 500000}}
          render={({field: { onChange, onBlur, value }}) => (
            <CurrencyInput
            value={value}
            onChangeValue={onChange}
            onBlur={onBlur}
            prefix="R$"
            delimiter="."
            separator=","
            precision={2}
            style={{ color: 'white', fontSize: 24, paddingLeft: 10 }}
            />
            
          )}
          />
      </ValueTextInputContainer>
      <InputAboveText style={{marginLeft: -165}}>{languages[lang].destination}:</InputAboveText>
      <CpfInputContainer>
        <Icon name="address-card" size={30} color="white"/>
        <Controller
          name="receiver"
          control={control}
          rules={{ required: true, minLength: 14, maxLength: 14 }}
          render={({field: { onChange, onBlur, value }}) => (
            <MaskedInput mask={Masks.BRL_CPF} keyboardType="numeric" onChangeText={onChange} value={value} onBlur={onBlur}/>
          )}
        />
      </CpfInputContainer>
      <ButtonsContainer>
         <CancelButton onPress={()=> navigation.goBack()}>
          <CancelButtonText>{languages[lang].cancel}</CancelButtonText>
         </CancelButton>
         <DonateButton onPress={handleSubmit(onSubmit)}>
         { isLoading ? <ActivityIndicator color="white"/> : <DonateButtonText>{languages[lang].transfer}</DonateButtonText>}
         </DonateButton>
      </ButtonsContainer>
    </BackgroundGradient>
  );
}
