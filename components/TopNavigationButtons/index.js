import * as React from 'react';

import {
  Settings,
  ChevronLeft
} from 'react-native-feather';

import { TopButtonsContainer, BackButton, SettingsButton } from './styles'

export default function TopNavigationButtons({onPressBack, onPressSettings}) {
  return (
    <TopButtonsContainer>
        <BackButton onPress={onPressBack}>
          <ChevronLeft width={30} height={30} color="#fff"/>
        </BackButton>
        <SettingsButton onPress={onPressSettings}>
          <Settings width={30} height={30} color="#fff"/>
        </SettingsButton>
    </TopButtonsContainer>
  )
}