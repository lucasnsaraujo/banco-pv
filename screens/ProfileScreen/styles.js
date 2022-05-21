import styled from 'styled-components'

export const Header = styled.View`
  height: 220px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

export const MyProfileText = styled.Text`
  font-family: 'Poppins_700Bold';
  color: #FFA200;
  font-size: 25px;

`

export const ProfileInfoContainer = styled.View`
  flex-direction: row;
  padding: 30px;
  justify-content: space-between;
`
export const UserProfilePhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 7px;
`

export const UsernameContainer = styled.View`
  padding: 0px 30px;
`

export const Username = styled.Text`
  font-size: 20px;
  color: #DEDDDD;
  font-family: 'Poppins_700Bold';
`

export const AccountCreationDate = styled.Text`
  font-size: 18px;
  color: #DEDDDD;
  font-family: 'Poppins_400Regular';
`

export const AccountNumber = styled.Text`
  font-size: 18px;
  color: #DEDDDD;
  font-family: 'Poppins_400Regular';
  `

export const LogoutButton = styled.TouchableOpacity`
  width: 30%;
  height: 7%;
  background-color: red;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10%
`
export const ProfilePictureGrid = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 40%;
  background-color: rgba(255,255,255,0.05);
  border-radius: 20px
  padding: 10px;
`

export const ProfilePictureTouchableOpacity = styled.TouchableOpacity`
  width: 33%;
  height: 37%;
`

export const ProfileImage = styled.Image`
  width: 95%;
  height: 95%;
  border-radius: 10px;
`
export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_700Bold';
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`