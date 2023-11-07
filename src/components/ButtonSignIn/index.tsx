import { TouchableOpacityProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Container, Content, TextButton } from './styles';
import { useTheme } from 'styled-components';

type ButtonProps = TouchableOpacityProps & {
  label: string;
}

export function ButtonSignIn({ label, ...rest }: ButtonProps) {

  const { COLORS } = useTheme()

  return (
    <Container {...rest} activeOpacity={0.7}>
      <Content>
        <AntDesign name="google" size={24} color={COLORS.GRAY_800} />
        <TextButton>{label}</TextButton>
      </Content>
    </Container>
  );
}