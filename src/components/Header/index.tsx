import { Container, OnBackButton, Title } from './styles';
import { View } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderProps = {
  title: string;
  onBack: () => void;
}

export function Header({ title, onBack }: HeaderProps) {

  const { COLORS } = useTheme()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 25

  return (
    <Container style={{ paddingTop }}>
      <OnBackButton activeOpacity={.7} onPress={onBack}>
        <ArrowLeft color={COLORS.GRAY_600} size={24}/>
      </OnBackButton>
        <Title>{title}</Title>
      <View style={{ width: 24 }} />
    </Container>
  );
}