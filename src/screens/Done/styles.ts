import styled from 'styled-components/native'

import theme from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
  background: #fff;
`
export const Header = styled.View`
  width: 100%;
  height: 100px;
  background: ${theme.primary.main};
  display: flex;

  padding: 80px 0 30px 0;
`
export const Body = styled.View`
  background: #fff;
  margin-top: -90px;
  width: 100%;
  flex: 1;
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding-bottom: 50px;
`

export const DoneIcon = styled.Image`
  align-self: center;
  margin-top: 50px;
`
export const SuccessText = styled.Text`
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 37px;
  width: 80%;
  color: ${theme.gray.main};
  font-family: 'PoppinsBold';
  padding-top: 30px;
  align-self: center;
`

export const MailCard = styled.Image`
  align-self: center;
  width: 70%;
  height: 70%;
`
