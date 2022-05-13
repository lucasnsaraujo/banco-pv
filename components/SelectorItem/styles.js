import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  height: 150px;
  width: 110px;
  background-color: ${(props) => (props.selected ? '#A7710B' : 'transparent')};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  border: 1px solid #A7710B
`

export const Title = styled.Text`
  margin-top: 20px;
  font-family: 'Poppins_700Bold';
  font-size: 18px;
  color: white;
  text-align: center;
`