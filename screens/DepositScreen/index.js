import * as React from 'react';
import { useState, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';

import BackgroundGradient from '../../components/BackgroundGradient/index';
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar/index';
import TopNavigationButtons from '../../components/TopNavigationButtons/index';
import SelectorItem from '../../components/SelectorItem/index';

import {
  Title,
  Selector,
  ValueInput,
  CancelButton,
  DepositButton,
  ButtonsContainer,
  SelectorContainer,
  ValueText,
  ValueTextInputContainer,
  ValueTextInput,
  CancelButtonText,
  DepositButtonText
} from './styles';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { DollarSign, CreditCard, Grid } from 'react-native-feather';

import Toast from 'react-native-toast-message'

import CurrencyInput from 'react-native-currency-input';

import { useLanguage } from '../../context/Language'
import { api } from '../../services/api';
import { useUser } from '../../context/User';
import { useTransaction } from '../../context/Transaction';


export default function DepositScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState('pix');
  const [value, setValue] = useState(0);
  const { currentUser, setCurrentUser } = useUser()
  const { setTransactions } = useTransaction();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const unmount = () => {
      setIsLoading(false);
      setSelectedValue('');
      setValue(0)
    }
    return unmount;
  }, [])

  function handleSubmit(){
    setIsLoading(true);
    api.post('transactions', {
      sender: selectedValue,
      receiver: currentUser.cpf,
      value: value,
      date: Date.now(),
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
                  text1: 'Transação concluída com sucesso!'
                })
              })
            })
  }

  const { languages, lang } = useLanguage();

  return (
    <BackgroundGradient>
      <IgnoreStatusBar />
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Title>{languages[lang].deposit}</Title>
      <SelectorContainer>
        <SelectorItem
          title={languages[lang].pix}
          selected={selectedValue === 'pix'}
          onPress={() => {
            setSelectedValue('pix');
          }}>
          <Grid width={50} height={50} color="white" />
        </SelectorItem>
        <SelectorItem
          title={languages[lang].boleto}
          selected={selectedValue === 'boleto'}
          onPress={() => {
            setSelectedValue('boleto');
          }}>
          <DollarSign width={50} height={50} color="white" />
        </SelectorItem>
        <SelectorItem
          title={languages[lang].credit}
          selected={selectedValue === 'credito'}
          onPress={() => {
            setSelectedValue('credito');
          }}>
          <CreditCard width={50} height={50} color="white" />
        </SelectorItem>
      </SelectorContainer>
      <ValueText>{languages[lang].value}:</ValueText>
      <ValueTextInputContainer>
        <DollarSign width={30} height={30} color="#C7C1C1" />
        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          prefix="R$"
          delimiter="."
          separator=","
          precision={2}
          style={{ color: 'white', fontSize: 24, paddingLeft: 10 }}
        />
      </ValueTextInputContainer>
      <ButtonsContainer>
         <CancelButton onPress={()=> navigation.goBack()}>
          <CancelButtonText>{languages[lang].cancel}</CancelButtonText>
         </CancelButton>
         <DepositButton onPress={() => handleSubmit()}>
          {isLoading ? <ActivityIndicator color='white'/> : <DepositButtonText>{languages[lang].deposit}</DepositButtonText>}
         </DepositButton>
      </ButtonsContainer>
    </BackgroundGradient>
  );
}
