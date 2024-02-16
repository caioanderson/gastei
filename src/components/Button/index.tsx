import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Text } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: 'primary' | 'secondary'
}

export function Button({ title, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={.7} type={type} {...rest}>
      <Text type={type}>{title}</Text>
    </Container>
  );
}