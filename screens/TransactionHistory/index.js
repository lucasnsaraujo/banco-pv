import * as React from 'react';

import { useState, useEffect } from 'react';

import { IgnoreStatusBar } from '../../components/IgnoreStatusBar'

import { Text, Platform } from 'react-native'

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
import { useTransaction } from '../../context/Transaction';


export default function TransactionHistory({navigation}) {

const { transactions } = useTransaction();

const { languages, lang } = useLanguage();


function formatCpf(value) {
  if (value.match(/^[0-9]+$/)) {
    console.log(value)
    value.trim().split();
    return `${value[0] + value[1] + value[2]}.${value[3] + value[4] + value[5]}.${value[6] + value[7] + value[8]}-${value[9] + value[10]}`
  }
  return value;
}

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
         data={transactions.sort((a, b) => b.date - a.date)}
         renderItem={({item}) => (
            <FlatListItem type={item.type}>
            <FlatListItemLeftContainer>
                <FlatListItemName>{(item.type === 'withdraw') ? formatCpf(item.receiver) : formatCpf(item.sender)}</FlatListItemName>
                <FlatListItemDate>{new Date(parseInt(item.date)).toLocaleDateString('pt-BR')}</FlatListItemDate>
            </FlatListItemLeftContainer>
            <FlatListItemRightContainer>
                <FlatListItemPrice type={item.type}>
                  {(item.type === 'deposit') ? '+' : '- '}
                  {(item.value < 200000) ? (item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})) : (item.value > 1000000 ? `R$ ${(item.value / 1000000).toFixed(0)}M` : `R$ ${(item.value / 1000).toFixed(0)}K`) }
                </FlatListItemPrice>
            </FlatListItemRightContainer>
            </FlatListItem>
         )}
         keyExtractor={item => item._id}
        />
      </FlatListContainer>

    </BackgroundGradientWithoutHideKeyboard>
  )
}
