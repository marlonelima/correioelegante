import styled from 'styled-components/native'
import theme from '../../constants/theme'

interface IFoodItem {
  active: boolean
}

interface IInput {
  textArea?: boolean
}

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`

export const Header = styled.View`
  width: 100%;
  height: 300px;
  background: ${theme.primary.main};
  display: flex;

  padding: 80px 0 30px 0;
`
export const HeaderText = styled.Text`
  font-size: 19px;
  color: #fff;
  width: 100%;
  font-family: 'PoppinsSemiBold';
  margin-bottom: 20px;
  margin: 0 6%;
`
export const Input = styled.TextInput<IInput>`
  width: 88%;
  background: #fff;
  border: 2px solid ${theme.primary.dark};
  padding: 10px 15px;
  font-family: 'PoppinsSemiBold';
  border-radius: 10px;
  font-size: 15px;
  margin: 0 6%;
`

export const Body = styled.View`
  background: #fff;
  margin-top: -80px;
  width: 100%;
  flex: 1;
  border-radius: 30px;
  padding-bottom: 50px;
`
export const WrapButton = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
`

export const Label = styled.Text`
  font-size: 20px;
  line-height: 35px;
  text-align: left;
  letter-spacing: -1px;
  line-height: 37px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: ${theme.gray.main};
  font-family: 'PoppinsBold';
  padding: 0 6%;
`

export const PickFoodScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: '6%',
    paddingRight: '6%'
  },
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
}))`
  margin-bottom: 15px;
  height: 100px;
`

export const FoodItem = styled.TouchableOpacity<IFoodItem>`
  background: #ececec;
  border-radius: 9px;
  width: 98px;
  height: 98px;
  border: 2px solid ${({ active }) => (active ? theme.primary.dark : '#ececec')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`

export const FoodImage = styled.Image.attrs(() => ({
  resizeMode: 'contain'
}))`
  width: 70%;
  height: 70%;
`
