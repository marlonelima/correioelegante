import React from 'react';

import { Container, Text } from './styles';

interface IProps {
  children: string;
  onPress: any;
}

const Button = (props: IProps) => {
  return (
    <Container onPress={props.onPress}>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default Button;
