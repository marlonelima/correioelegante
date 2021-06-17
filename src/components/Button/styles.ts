import styled from 'styled-components/native'
import theme from '../../constants/theme'

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 55px;
  background: ${theme.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`

export const Text = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  font-family: 'PoppinsSemiBold';
`
