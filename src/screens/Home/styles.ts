import styled from 'styled-components/native'

import theme from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
  background: #fff;
`
export const Header = styled.View`
  width: 100%;
  height: 40%;
  background: ${theme.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20%;
`

export const Image = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 1;
`

export const Welcome = styled.View`
  margin-top: -20px;
  background: #fff;
  width: 100%;
  flex: 1;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding-top: 30%;
`

export const MainText = styled.Text`
  font-size: 40px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 37px;
  width: 90%;
  color: ${theme.gray.main};
  font-family: 'PoppinsBold';
  padding-top: 20px;
`

export const SecondaryText = styled.Text`
  font-size: 17px;
  color: ${theme.gray.light};
  width: 90%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: 'PoppinsRegular';
`
