import React, { useState } from 'react'

import {
  Container,
  Header,
  HeaderText,
  Input,
  Body,
  Label,
  PickFoodScroll,
  FoodItem,
  FoodImage,
  WrapButton
} from './styles'

import ThreeDots from '../../components/ThreeDots'
import Button from '../../components/Button'

import { StackScreenProps } from '@react-navigation/stack'

const Food = [
  {
    name: 'fast-food',
    image: require('./../../assets/images/food/fast-food.png')
  },
  {
    name: 'lollipop',
    image: require('./../../assets/images/food/lollipop.png')
  },
  {
    name: 'champagne',
    image: require('./../../assets/images/food/champagne.png')
  },
  {
    name: 'french-fries',
    image: require('./../../assets/images/food/french-fries.png')
  },
  { name: 'cheese', image: require('./../../assets/images/food/cheese.png') },
  { name: 'beer', image: require('./../../assets/images/food/beer.png') },
  { name: 'wine', image: require('./../../assets/images/food/wine.png') }
]

const MessageScreen = ({ navigation }: StackScreenProps<any>) => {
  const [foodActive, setFoodActive] = useState('')

  return (
    <Container>
      <Header>
        <HeaderText>Você gostaria de se identificar?</HeaderText>
        <Input placeholder="Digite seu nome ou apelido" />
      </Header>
      <Body>
        <ThreeDots />
        <Label>Escolha uma refeição abaixo</Label>
        <PickFoodScroll>
          {Food.map((data) => (
            <FoodItem
              active={foodActive === data.name}
              onPress={() => setFoodActive(data.name)}
              key={data.name}
              activeOpacity={0.4}
            >
              <FoodImage source={data.image} />
            </FoodItem>
          ))}
        </PickFoodScroll>
        <Label>E-mail</Label>
        <Input placeholder="Digite o e-mail dele ou dela" />
        <Label>Surpreenda</Label>
        <Input
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholder="Solte o verbo para seu/sua amado(a)"
        />
        <WrapButton>
          <Button onPress={() => navigation.navigate('Done')}>
            Enviar correio
          </Button>
        </WrapButton>
      </Body>
    </Container>
  )
}

export default MessageScreen
