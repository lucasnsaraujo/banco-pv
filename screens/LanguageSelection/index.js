import * as React from 'react';
import { useState, useEffect } from 'react';

import { IgnoreStatusBar } from '../../components/IgnoreStatusBar/index'
import BackgroundGradient from '../../components/BackgroundGradient/index'
import LanguageSelectionButton from '../../components/LanguageSelectionButton/index'

import { useLanguage } from '../../context/Language'

import { NavigationButtons, BackButton, SettingsTitle, SettingsSubtitle } from './styles';

import { ChevronLeft } from 'react-native-feather';

export default function LanguageSelection({navigation}) {

  const { languages, lang, changeLanguage } = useLanguage();

  return (
    <>
      <BackgroundGradient>
        <IgnoreStatusBar/>
        <NavigationButtons>
          <BackButton onPress={() => navigation.goBack()}>
            <ChevronLeft width={30} height={30} color="#fff"/>
          </BackButton>
        </NavigationButtons>
        <SettingsTitle>{languages[lang].settings}</SettingsTitle>
        <SettingsSubtitle>{languages[lang].selectLanguage}</SettingsSubtitle>
        <LanguageSelectionButton title="Português" selected={lang === 'portuguese'} onPress={() => {changeLanguage('portuguese')}}/>
        <LanguageSelectionButton title="English" selected={lang === 'english'} onPress={() => changeLanguage('english')}/>
        <LanguageSelectionButton title="Español" selected={lang === 'spanish'} onPress={() => changeLanguage('spanish')}/>
      </BackgroundGradient>
    </>
  )
}