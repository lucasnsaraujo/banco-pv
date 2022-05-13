import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'

export const RoundedButton = styled.TouchableOpacity`
  background-color: ${props => props.color ? props.color : "white"};
  width: 154px;
  height: 141px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
`

export const ButtonText = styled.Text`
  font-size: 22px;
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  color: white;
  margin-top: 15px;
`
