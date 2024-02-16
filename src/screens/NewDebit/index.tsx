import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Plus, Calendar } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import moment from 'moment';

import { Header } from '../../components/Header';
import { ControlledInput } from '../../components/controlled/ControlledInput';
import { ControlledSelect } from '../../components/controlled/ControlledSelect';
import { ControlledCalendar } from '../../components/controlled/ControlledCalendar';

import { 
  BackdropIcon,
  BottomSheetContainer,
  BottomSheetSubtitle,
  BottomSheetTitle,
  ButtonAddAlly,
  Container,
  ContainerBottomSheet,
  ContainerButton, 
  ContainerForm, 
  ContainerSteps, 
  PADDING_BOX,
  TextButtonAddAlly,
  WrapperButtons,
  WrapperMessage
} from './styles';

import { categories } from '../../constants/mocks';
import { Button } from '../../components/Button';
import { Sheet } from '../../components/BottomSheet';
import { debitFormSchema } from './schema';
import { MarkerStep } from '../../components/MarkerStep';
import { View } from 'react-native';

export type DebitValueType = z.infer<typeof debitFormSchema>

export function NewDebit() {
  const navigation = useNavigation()
  const { COLORS } = useTheme()
  const { 
    control, 
    handleSubmit, 
    reset,
    getValues,
    formState: { isSubmitting, errors, isValid } } 
    = useForm<DebitValueType>({
      resolver: zodResolver(debitFormSchema)
    })

    console.log(errors)
    
  const [hideComponents, setHideComponents] = useState(false)
  const [isPaymentFuture, setIsPaymentFuture] = useState(false)

  function sendDebit(data: DebitValueType) {
    const today = moment()
    const dayPaymentIsAfterToday = data.day_payment.isAfter(today)
    if(dayPaymentIsAfterToday){
      setIsPaymentFuture(true)
    } else {
      navigation.navigate('remember', { account: getValues() })
    }
  }

  function resetValueDate() {
    reset({
      ...getValues(),
      day_payment: ''
    })
    setIsPaymentFuture(false)
  }

  function onPressContinue() {
    navigation.navigate('remember', { account: { ...getValues() } })
    setIsPaymentFuture(false)
  }

  return (
    <Container>
      <Header title='Adicionar Gasto' onBack={() => navigation.goBack()}/>

      <ContainerSteps>
        <MarkerStep active={true}/>
        <MarkerStep active={false}/>
      </ContainerSteps>

      <ContainerForm>
        <ControlledInput 
          control={control}
          label='Nome' 
          placeholder='Digite o nome do gasto'
          name='name'
          hide={hideComponents}
          error={errors.name?.message}
        />

        <ControlledInput 
          control={control}
          label='Valor Total' 
          placeholder='Digite o valor'
          name='value'
          keyboardType='numeric'
          hide={hideComponents}
          error={errors.value?.message}
        />

        <ControlledCalendar
          control={control}
          label='Data da compra'
          placeholder='Selecione a data de compra'
          boxProps={PADDING_BOX}
          name='day_payment'
          isActive={setHideComponents}
          error={errors.day_payment?.message}
        />

        <ControlledSelect 
          control={control}
          data={categories}
          label='Categoria do gasto'
          placeholder='Ver categorias'
          name='category'
          hide={hideComponents}
          error={errors.category?.message}
        />

      </ContainerForm>

      <ButtonAddAlly disabled={false}>
        <Plus size={24} color={false ? COLORS.GRAY_500 : COLORS.BRAND_SECONDARY_MID}/>
        <TextButtonAddAlly disabled={false}>Adicionar pessoa(s) a esse gasto</TextButtonAddAlly>
      </ButtonAddAlly>


      <ContainerButton>
        <Button title='Avançar' onPress={handleSubmit(sendDebit)}/>
      </ContainerButton>

    {
      isPaymentFuture 
      && 
        <ContainerBottomSheet>
          <Sheet type='warning'>
            <BottomSheetContainer>
              <BackdropIcon>
                <Calendar color={COLORS.BRAND_SECONDARY_MID} size={50}/>
              </BackdropIcon>

              <WrapperMessage>
                <BottomSheetTitle>Só um momento de atenção aqui 😅</BottomSheetTitle>
                <BottomSheetSubtitle>Você está adicionando uma compra futura, é isso mesmo ? </BottomSheetSubtitle>
              </WrapperMessage>

              <WrapperButtons>
                <Button title='Quero editar' type='secondary' onPress={() => resetValueDate()}/>
                <Button title='É isso mesmo' onPress={() => onPressContinue()}/>
              </WrapperButtons>

            </BottomSheetContainer>
         </Sheet>
          </ContainerBottomSheet>
    }

    </Container>
  );
}