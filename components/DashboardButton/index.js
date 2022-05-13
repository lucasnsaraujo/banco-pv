import * as React from 'react';
import { RoundedButton, ButtonText } from './styles'


export default function DashboardButton({ title, color, onPress, children }) {
  return (
    <RoundedButton color={color} onPress={onPress}>
      {children}
      <ButtonText>{title}</ButtonText>
    </RoundedButton>
  )
}