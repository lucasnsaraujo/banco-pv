import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  width: 300px;
  border-radius: 14px;
  border: 1px solid #D0942C;
  background-color: ${ (props) => (props.selected ? '#D0942C' : 'transparent')};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 25px;
`

export const Title = styled.Text`
  color: ${ (props) => (props.selected ? 'white' : '#D0942C')};
  font-size: 22px;
  font-family: 'Poppins_700Bold';
`