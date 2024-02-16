import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Sheet } from '../../components/BottomSheet';
import { TypeDebits } from '../../constants/mocks';
import { 
  ConfirmButton, 
  ConfirmTextButton, 
  Container, 
  ContainerButtons, 
  ContainerFlexRow, 
  DeleteExpenseButton, 
  DeleteExpenseTextButton, 
  Footer, 
  Header, 
  HeaderMain, 
  Main, 
  MainInfo, 
  NotYetButton, 
  NotYetTextButton, 
  Question, 
  Subtitle, 
  TextDayAndValue, 
  TextInfoPercents, 
  TextInfoValue, 
  Title,
  Wrapper 
} from './styles';
import { formmatNumber } from '../../constants/format-number';

type RootParamList = {
  debitdetail: {
    debit: TypeDebits;
  }
}

export function DebitDetail() {
  const navigation = useNavigation()
  const { COLORS } = useTheme();
  const { params: { debit } } = useRoute<RouteProp<RootParamList, 'debitdetail'>>()

  return (
    <Container>
      <Sheet>
          <Wrapper>
            <Header>
              <HeaderMain>
                <Title>{debit.name}</Title>
                {
                  debit.isShared 
                  && <Subtitle>Esse é um gasto em conjunto</Subtitle>
                }
              </HeaderMain>
              
              <ContainerFlexRow>
                <TextDayAndValue>Vence todo dia 10</TextDayAndValue>
                <TextDayAndValue>Valor: {formmatNumber(debit.value)}</TextDayAndValue>
              </ContainerFlexRow>

            </Header>
            
            <Main>
              <MainInfo>
                <TextInfoPercents>Seu percentual sobre o gasto: 70%</TextInfoPercents>
                <TextInfoValue>Valor a pagar: R$ 700,00</TextInfoValue>
              </MainInfo>

              <Question>Já pagou ?</Question>

              <ContainerButtons>
                <NotYetButton onPress={() => navigation.goBack()}>
                  <NotYetTextButton>Ainda não</NotYetTextButton>
                </NotYetButton>
                <ConfirmButton>
                  <ConfirmTextButton>Sim</ConfirmTextButton>
                </ConfirmButton>
              </ContainerButtons>
            </Main>

            <Footer>
              <DeleteExpenseButton activeOpacity={.7}>
                <Trash color={COLORS.ATTENCION} size={18}/>
                <DeleteExpenseTextButton>Deletar gasto</DeleteExpenseTextButton>
              </DeleteExpenseButton>
            </Footer>
            {/* < */}
          </Wrapper>
      </Sheet>
    </Container>
  );
}