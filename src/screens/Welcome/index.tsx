import React from 'react'

import {
  Container,
  Header,
  Image,
  Welcome,
  MainText,
  SecondaryText
} from './styles'

import Button from '../../components/Button'
import ThreeDots from '../../components/ThreeDots'

import { StackScreenProps } from '@react-navigation/stack'

const WelcomeScreen = ({ navigation }: StackScreenProps<any>) => {
  return (
    <Container>
      <Header>
        <Image source={require('./../../assets/images/image_first.png')} />
      </Header>
      <Welcome>
        <ThreeDots />
        <MainText>Surpreenda seu amor</MainText>
        <SecondaryText>Envie mensagens e presentes incríveis</SecondaryText>
        <Button onPress={() => navigation.navigate('Message')}>Começar</Button>
      </Welcome>
    </Container>
  )
}

export default WelcomeScreen
