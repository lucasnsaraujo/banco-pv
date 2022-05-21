import styled from 'styled-components'
import { View, TouchableOpacity, Text, Platform } from 'react-native'


  export const TopButtonsContainer = styled.View`
    width: 100%;
    padding: 14px 25px 14px 25px;
    flex-direction: row;
    justify-content: space-between;
  `

  export const BackButton = styled.TouchableOpacity``

  export const SettingsButton = styled.TouchableOpacity``

  export const TransactionHistoryTitle = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: 30px;
    color: #FFA200;
    margin-top: 15px;
    margin-bottom: 35px;
  `

export const FlatListContainer = styled.View`
  width: 360px;
  height: ${(Platform.OS === 'ios') ? '650px' : '600px'};
  background-color: #2A3750;
  border-radius: 10px;
  padding: 15px 15px;
`

export const FlatListItem = styled.View`
  border-radius: 6px;
  background-color: ${(props) => (props.type === 'deposit') ? 'rgba(233, 255, 233, 1)' : 'rgba(255, 233, 233, 1)'};
  height: 62px;
  width: 100%;
  margin-bottom: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 10px;
`

export const FlatListItemRightContainer = styled.View`
  width: 60%;
  height: 100%
  justify-content: center;
  
`

export const FlatListItemLeftContainer = styled.View`
  width: 40%;
  height: 100%
  justify-content: center;
`

export const FlatListItemName = styled.Text`
  font-size: 13px;
  color: #121212;
  font-weight: bold;
  font-family: 'Poppins_700Bold';
  line-height: 30px;

`

export const FlatListItemDate = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 18px;
  
`

export const FlatListItemPrice = styled.Text`
  font-family: 'Poppins_400Regular';
  color: black;
  font-size: 21px;
  text-align: right;
  width: 100%;
  color: ${(props) => (props.type === 'deposit') ? '#40B936' : '#E03131'}
`
