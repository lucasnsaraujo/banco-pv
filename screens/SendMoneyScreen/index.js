import * as React from 'react';
import { useState } from 'react';

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
  CpfInput
} from './styles';

import { DollarSign } from 'react-native-feather'

import CurrencyInput from 'react-native-currency-input';


import { useLanguage } from '../../context/Language'

import CancelButton from '../../components/CancelButton';


export default function SendMoneyScreen({navigation}) {

  const { languages, lang } = useLanguage()

  const [value, setValue] = useState(0);
  const [cpf, setCpf] = useState('04044600522')

  return (
    <BackgroundGradient>
      <IgnoreStatusBar />
      <TopNavigationButtons onPressBack={() => navigation.goBack()} onPressSettings={() => navigation.navigate('Settings')} />
      <Title>{languages[lang].transference}</Title>
      <InputAboveText>{languages[lang].value}: </InputAboveText>
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
      <InputAboveText style={{marginLeft: -165}}>{languages[lang].destination}:</InputAboveText>
      <CpfInputContainer>
        <Icon name="address-card" size={30} color="white"/>
        <CpfInput keyboardType="numeric" onChangeText={text => setCpf(text)} value={cpf}/>
      </CpfInputContainer>
      <ButtonsContainer>
         <CancelButton onPress={()=> navigation.goBack()}>
          <CancelButtonText>{languages[lang].cancel}</CancelButtonText>
         </CancelButton>
         <DonateButton>
          <DonateButtonText>{languages[lang].transfer}</DonateButtonText>
         </DonateButton>
      </ButtonsContainer>
    </BackgroundGradient>
  );
}
