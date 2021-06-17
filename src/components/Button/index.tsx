import React from 'react'

import { Container, Text } from './styles'

const Button: React.FC = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default Button
