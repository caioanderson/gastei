import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components'
import { PiggyBank, SquaresFour } from 'phosphor-react-native';

import { colors } from '../../../constants/colorsGradient';

import { 
    Card, 
    ContainerCards, 
    HeaderContainer, 
    HeaderContent, 
    HiUser, 
    Message, 
    Separator, 
    TextCard, 
    WelcomeUserContainer, 
    WrapperImage, 
    WrapperWelcomeUserContainer } from './styles';

export function Header() {

  const { COLORS } = useTheme()

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 15;

  return (
    <HeaderContainer>
    <LinearGradient
      colors={colors}
      style={{ height: '100%', width: '100%' }}
    >
      <HeaderContent style={{ paddingTop }}>
        <WrapperWelcomeUserContainer>
          <WelcomeUserContainer>
            <HiUser>Oi Caio 👋🏽</HiUser>
            <Message>Vou tentar te ajudar a deixar{'\n'}tudo um pouco mais controlado.</Message>
          </WelcomeUserContainer>
          <WrapperImage>
            <Image source={{ uri: 'https://github.com/caioanderson.png' }} style={{ width: '100%', height: '100%', borderRadius: 10 }}/>
          </WrapperImage>
        </WrapperWelcomeUserContainer>

      </HeaderContent>
        <ContainerCards 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 15 }}
          horizontal
        >

          <Card activeOpacity={.8}>
            <SquaresFour size={24} color={COLORS.GRAY_100} />
            <Separator />
            <TextCard> Ver Grupos de gastos</TextCard>
          </Card>
          <Card activeOpacity={.8}>
            <PiggyBank size={24} color={COLORS.GRAY_100} />
            <Separator />
            <TextCard> Meu patrimônio</TextCard>
          </Card>

           
        </ContainerCards>
    </LinearGradient>
  </HeaderContainer>
  );
}