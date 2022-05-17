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
                <FlatListItemName>{(item.type === 'withdraw') ? item.receiver : item.sender}</FlatListItemName>
                <FlatListItemDate>{new Date(parseInt(item.date)).toLocaleDateString('pt-BR')}</FlatListItemDate>
            </FlatListItemLeftContainer>
            <FlatListItemRightContainer>
                <FlatListItemPrice type={item.type}>
                  {(item.type === 'deposit') ? '+' : '- '}
                  {item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
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
