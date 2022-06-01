import styled from 'styled-components'
import { MaskInput } from 'react-native-mask-input'

export const Title = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 24px;
  color: #FFA200;
  margin-bottom: 30px;
`

export const FormInputContainer = styled.View`
  width: 90%;
  background-color: rgba(180,180,180,0.15);
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  border-radius: 15px;
  margin-bottom: 20px;
`
export const FormInput = styled.TextInput`
  width: 90%;
  padding-left: 15px;
  font-size: 24px;
  color: white;
`

export const FormTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_700Bold';
  color: white;
  margin-bottom: 5px;
  width: 85%
`

export const SubmitButton = styled.TouchableOpacity`
  width: 40%;
  height: 60px;
  background-color: #FFA200;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  
`

export const CancelButton = styled.TouchableOpacity`
  width: 30%
  height: 60px;
  border-radius: 10px;
  border: 1px solid #FFA200;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 105%;
  justify-content: space-around;
  padding-top: 15px;
`