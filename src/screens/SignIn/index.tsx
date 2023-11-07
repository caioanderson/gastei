import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { Receipt } from 'phosphor-react-native';

import { Container, Footer, Header, LabelLogo, Message, WrapperButtonSignIn, WrapperLogo, WrapperMessage } from './styles';
import { ButtonSignIn } from '../../components/ButtonSignIn';
import { useNavigation } from '@react-navigation/native';

const actions = ['Organize', 'Crie', 'Lembre'];

export function SignIn() {
  const { FONT_SIZE, COLORS, FONT_FAMILY } = useTheme()

  const { navigate } = useNavigation();
  
  const [indexLabelMassage, setIndexLabelMassage] = useState(0)
  const [showAnimate, setShowAnimate] = useState(true)

  const styleWordAnimate = {
    fontSize: RFValue(FONT_SIZE.XXL),
    color: COLORS.GRAY_100,
    fontFamily: FONT_FAMILY.MEDIUM
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexLabelMassage(prevValue => (prevValue + 1) % actions.length)
      setShowAnimate((previous) => !previous)
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
    
  }, [indexLabelMassage]);

  return (
    <Container>
      <Header>
        <WrapperLogo>
          <Receipt color={COLORS.GRAY_100} size={50}/>
          <LabelLogo>Gastei</LabelLogo>
        </WrapperLogo>

        <WrapperMessage>
        {
          showAnimate ?
           <Animated.Text entering={FadeInUp} exiting={FadeOutDown} style={styleWordAnimate}>
            {actions[indexLabelMassage]}
          </Animated.Text>
          : 
          <View />
        }
        <Message>gastos de forma simples</Message>

        </WrapperMessage>
      </Header>
      <Footer>
        <WrapperButtonSignIn>
          <ButtonSignIn label='Entrar com google' onPress={() => navigate('home')} />
        </WrapperButtonSignIn>
      </Footer>
    </Container>
  );
}
