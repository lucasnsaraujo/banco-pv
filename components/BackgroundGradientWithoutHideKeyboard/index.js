import * as React from 'react';
import { Background } from './styles';


export default function BackgroundGradientWithoutHideKeyboard({ children }) {
  return (
      <Background colors={['#17213D', '#000']}>
        {children}
      </Background>
  )
}