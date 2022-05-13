import * as React from 'react';
import { useState } from 'react';

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


export default function DonationScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState('animals');
  const [value, setValue] = useState(0);
  const { languages, lang } = useLanguage()

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
         <DonateButton>
          <DonateButtonText>{languages[lang].donate}</DonateButtonText>
         </DonateButton>
      </ButtonsContainer>
    </BackgroundGradient>
  );
}
