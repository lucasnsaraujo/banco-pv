import styled from 'styled-components';
import TextInputMask from 'react-native-masked-text'
import MaskInput from 'react-native-mask-input'


export const MaskedInput = styled(MaskInput)`
  width: 90%;
  padding-left: 15px;
  font-size: 24px;
  color: white;
`

export const Title = styled.Text`
  font-size: 25px;
  font-family: 'Poppins_700Bold';
  color: #FFA200;
  margin-bottom: 50px;
`

export const InputAboveText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 18px;
  color: #D6D6D6;
  margin-left: -250px;
  margin-bottom: 15px;
`

export const ValueTextInputContainer = styled.View`
  width: 90%;
  background-color: rgba(180,180,180,0.15);
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  border-radius: 15px;
  margin-bottom: 70px
`

export const ValueTextInput = styled.TextInput`
  height: 50px;
`


export const CancelButton = styled.TouchableOpacity`
  width: 35%; 
  height: 70px;
  border-radius: 10px;
  border: 1px solid #D0942C;
  justify-content: center;
  align-items: center;
`

export const DonateButton = styled.TouchableOpacity`
  width: 45%; 
  height: 70px;
  border-radius: 10px;
  border: 1px solid #D0942C;
  background-color: #D0942C;
  margin-left: 10%;
  justify-content: center;
  align-items: center;
`

export const CancelButtonText = styled.Text`
  color: #D0942C;
  font-size: 20px;
  font-family: 'Poppins_400Regular';
`

export const DonateButtonText = styled.Text`
  color: white;
  font-size: 20px;
  color: white;
  font-family: 'Poppins_700Bold';
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  padding-top: 100px;
`

export const CpfInput = styled.TextInput`
  height: 50px;
  width: 100%;
  font-size: 24px;
  padding-left: 10px;
  color: white;
`


export const CpfInputContainer = styled.View`
  width: 90%;
  background-color: rgba(180,180,180,0.15);
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  border-radius: 15px;
  margin-bottom: 70px
`