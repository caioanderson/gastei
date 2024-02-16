import { TouchableOpacityProps } from 'react-native';
import { Container, WrapperContent } from './styles';
import { IconProps } from 'phosphor-react-native'

type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  icon: IconBoxProps;
}

export function CardButton({ icon: Icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <WrapperContent>
        <Icon />
      </WrapperContent>
    </Container>
  );
}