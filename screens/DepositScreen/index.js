import * as React from 'react';
import { useState } from 'react';

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

import CurrencyInput from 'react-native-currency-input';

import { useLanguage } from '../../context/Language'


export default function DepositScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState('pix');
  const [value, setValue] = useState(0);
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
         <DepositButton>
          <DepositButtonText>{languages[lang].deposit}</DepositButtonText>
         </DepositButton>
      </ButtonsContainer>
    </BackgroundGradient>
  );
}
