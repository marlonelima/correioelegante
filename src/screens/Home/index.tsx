import React from 'react'

import {
  Container,
  Header,
  Image,
  Welcome,
  MainText,
  SecondaryText
} from './styles'

import Button from './../../components/Button'

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Image source={require('./../../assets/images/image_first.png')} />
      </Header>
      <Welcome>
        <MainText>Surpreenda seu amor</MainText>
        <SecondaryText>Envie mensagens e presentes incríveis</SecondaryText>
        <Button>Começar</Button>
      </Welcome>
    </Container>
  )
}

export default HomeScreen
