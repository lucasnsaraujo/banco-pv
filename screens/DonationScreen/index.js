import * as React from 'react';
import { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import BackgroundGradient from '../../components/BackgroundGradient/index';
import { IgnoreStatusBar } from '../../components/IgnoreStatusBar/index';
import TopNavigationButtons from '../../components/TopNavigationButtons/index';
import SelectorItem from '../../components/SelectorItem/index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Title,
  Selector,
  ValueInput,
  CancelButton,
  DonateButton,
  ButtonsContainer,
  SelectorContainer,
  ValueText,
  ValueTextInputContainer,
  ValueTextInput,
  CancelButtonText,
  DonateButtonText
} from './styles';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { DollarSign, CreditCard, Grid } from 'react-native-feather';

import CurrencyInput from 'react-native-currency-input';

import { useLanguage } from '../../context/Language'
import { useTransaction } from '../../context/Transaction';
import { useUser } from '../../context/User';
import { api } from '../../services/api'
import Toast  from 'react-native-toast-message';


export default function DonationScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState('animals');
  const [value, setValue] = useState(0);
  const { languages, lang } = useLanguage()
  const { setTransactions } = useTransaction()
  const { currentUser, setCurrentUser } = useUser();
  const [isLoading, setIsLoading] = useState();

  function getDonationDestination(type) {
    switch(type) {
      case 'animals':
        return `${languages[lang].donation} ${languages[lang].animals}`
        break
      case 'education':
        return `${languages[lang].donation} ${languages[lang].education}`
        break
      case 'kids':
        return `${languages[lang].donation} ${languages[lang].kids}`
    }
  }

  function handleSubmit(){
    setIsLoading(true);
    api.post('transactions', {
      sender: currentUser.cpf,
      receiver: getDonationDestination(selectedValue),
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
                  text1: 'Doação concluída com sucesso!',
                  text2: 'Obrigado pela sua ajuda!'
                })
              })
            })
            .catch(error => {
              Toast.show({
                type: 'error', 
                text1: 'Ocorreu um erro!',
                text2: 'Tente novamente mais tarde'
              })
              navigation.navigate('Dashboard')
            })
  }

  return (
    <BackgroundGradient>
      <IgnoreStatusBar />
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')}  />
      <Title>{languages[lang].donation}</Title>
      <SelectorContainer>
        <SelectorItem
          title={languages[lang].animals}
          selected={selectedValue === 'animals'}
          onPress={() => {
            setSelectedValue('animals');
          }}>
          <Icon size={50} name="dog" color="#fff" />
        </SelectorItem>
        <SelectorItem
          title={languages[lang].education}
          selected={selectedValue === 'education'}
          onPress={() => {
            setSelectedValue('education');
          }}>
          <Icon size={50} name="notebook" color="#fff" />
        </SelectorItem>
        <SelectorItem
          title={languages[lang].kids}
          selected={selectedValue === 'kids'}
          onPress={() => {
            setSelectedValue('kids');
          }}>
          <Icon size={50} name="toy-brick" color="#fff" />
        </SelectorItem>
      </SelectorContainer>
      <ValueText>{languages[lang].value}: </ValueText>
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
         <DonateButton onPress={() => {handleSubmit()}}>
          {isLoading ? <ActivityIndicator color='white'/> : <DonateButtonText>{languages[lang].donate}</DonateButtonText>}
         </DonateButton>
      </ButtonsContainer>
    </BackgroundGradient>
  );
}
