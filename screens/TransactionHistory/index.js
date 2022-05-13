import * as React from 'react';

import { useState, useEffect } from 'react';

import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'

import { Text, Platform } from 'react-native'

import NumberFormat from 'react-number-format';

import BackgroundGradientWithoutHideKeyboard from '../../components/BackgroundGradientWithoutHideKeyboard'

import { api } from '../../services/api'

import { useLanguage } from '../../context/Language'


import { 
  TopButtonsContainer,
  BackButton,
  SettingsButton,
  TransactionHistoryTitle,
  FlatListContainer,
  FlatListItem,
  FlatListItemName,
  FlatListItemDate,
  FlatListItemPrice,
  FlatListItemLeftContainer,
  FlatListItemRightContainer
} from './styles'

import { FlatList } from 'react-native';

import {
  Settings,
  ChevronLeft
} from 'react-native-feather';


export default function TransactionHistory({navigation}) {

const [transactions, setTransactions] = useState([])

const { languages, lang } = useLanguage();



useEffect(() => {
  api.get().then(response => setTransactions(response.data))
}, [])

  return (
    <BackgroundGradientWithoutHideKeyboard>
      <IgnoreStatusBar/>
      <TopButtonsContainer>
        <BackButton onPress={() => navigation.goBack()} >
          <ChevronLeft width={30} height={30} color="#fff"/>
        </BackButton>
        <SettingsButton onPress={() => navigation.navigate('Settings')}>
          <Settings width={30} height={30} color="#fff"/>
        </SettingsButton>
      </TopButtonsContainer>
      <TransactionHistoryTitle>{languages[lang].transactions}</TransactionHistoryTitle>
      <FlatListContainer>
        <FlatList
         data={transactions}
         renderItem={({item}) => (
            <FlatListItem>
            <FlatListItemLeftContainer>
                <FlatListItemName>{item.name}</FlatListItemName>
                <FlatListItemDate>{new Date(parseInt(item.date)).toLocaleDateString('pt-BR')}</FlatListItemDate>
            </FlatListItemLeftContainer>
            <FlatListItemRightContainer>
                <FlatListItemPrice type={item.type}>
                  {(item.type === 'deposit') ? '+' : '- '}
                  <NumberFormat
                    value={item.price}
                    displayType={'text'}
                    renderText={(value) => <Text>{value}</Text>}
                    thousandSeparator={'.'}
                    prefix="R$"
                    decimalScale={2}
                    decimalSeparator={','}
                  />
                </FlatListItemPrice>
            </FlatListItemRightContainer>
            </FlatListItem>
         )}
         keyExtractor={item => item.id}
        />
      </FlatListContainer>

    </BackgroundGradientWithoutHideKeyboard>
  )
}
