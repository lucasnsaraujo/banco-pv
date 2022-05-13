import * as React from 'react'

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function HideKeyboard({children}) {
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      {children}
    </TouchableWithoutFeedback>
  )
}