import * as React from 'react';

import { ButtonContainer, Title } from './styles'

import { CheckCircle } from 'react-native-feather'

export default function LanguageSelectionButton({ title, selected, onPress }) {

  return (
    <>
      <ButtonContainer selected={selected} onPress={onPress}>
        <Title selected={selected}>{title}</Title>
      </ButtonContainer>
    </>
  )
}