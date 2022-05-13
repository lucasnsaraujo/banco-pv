import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  padding: 20px 27px;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

export const UserInfo = styled.View`
  padding: 15px 15px;
  padding-right: 40px;
  width: 180px;
`;

export const Username = styled.Text`
  margin-bottom: 3px;
  font-size: 20px;
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  color: white;
  flex: 1;
  width: 100%;
`;

export const AccountNumber = styled.Text`
  color: #C7C1C1;
  font-size: 17px;
  font-family: 'Poppins_400Regular';
`;
export const HelpButton = styled.TouchableOpacity`
  margin: 0px 20px;

`;

export const SettingsButton = styled.TouchableOpacity``;

export const BalanceStatus = styled.View`
  justify-content: center;
  align-items: center;
  height: 15%
`;

export const BalanceContainer = styled.View`
  border: 2px solid #D0942C;
  width: 340px;
  height: 100px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const CurrentBalanceText = styled.Text`
  color: #DEDDDD;
  font-size: 18px;
  font-family: 'Poppins_400Regular'
`;
export const Balance = styled.Text`
  color: #FFA200;
  font-size: 34px;
  font-family: 'Poppins_700Bold';
`;

export const ButtonsMenu = styled.View``;

export const DashboardButtonsContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const ProfileButton = styled.TouchableOpacity`
  width: 180px;
  height: 50px;
  border: 1px solid white;
  border-radius: 14px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const MyProfileText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 22px;
  color: white;
`;
