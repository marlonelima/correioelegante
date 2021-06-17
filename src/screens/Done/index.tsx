import React from 'react'

import {
  Container,
  Header,
  Body,
  DoneIcon,
  SuccessText,
  MailCard
} from './styles'

import ThreeDots from '../../components/ThreeDots'

const DoneScreen = () => {
  return (
    <Container>
      <Header></Header>
      <Body>
        <ThreeDots />
        <DoneIcon source={require('./../../assets/images/done.png')} />
        <SuccessText>Seu correio foi enviado com sucesso</SuccessText>
        <MailCard source={require('./../../assets/images/mail.png')} />
      </Body>
    </Container>
  )
}

export default DoneScreen
