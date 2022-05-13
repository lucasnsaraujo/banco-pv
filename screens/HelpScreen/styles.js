import styled from 'styled-components'

export const Title = styled.Text`
  color: #FFA200;
  font-size: 27px;
  font-family: 'Poppins_700Bold';
  margin-bottom: 20px;
`

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #B1955F;
  font-family: 'Poppins_700Bold';
  margin-bottom: 50px;
`

export const FormTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_700Bold';
  color: white;
  margin-bottom: 5px;
  width: 85%
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
export const CancelButton = styled.TouchableOpacity`
  width: 35%; 
  height: 70px;
  border-radius: 10px;
  border: 1px solid #D0942C;
  justify-content: center;
  align-items: center;
`

export const SendButton = styled.TouchableOpacity`
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

export const SendButtonText = styled.Text`
  color: white;
  font-size: 20px;
  color: white;
  font-family: 'Poppins_700Bold';
`
export const ButtonsContainer = styled.View`
  flex-direction: row;
  padding-top: 30px;
`





