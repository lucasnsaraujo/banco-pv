import * as React from 'react';
import { Background } from './styles';

import HideKeyboard from '../HideKeyboard/index'

export default function BackgroundGradient({ children }) {
  return (
  <HideKeyboard>
      <Background colors={['#17213D', '#000']}>
        {children}
      </Background>
  </HideKeyboard>
  )
}