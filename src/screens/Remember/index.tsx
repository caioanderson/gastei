import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { DebitValueType } from '../NewDebit';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Sheet } from '../../components/BottomSheet';
import { ControlledSelect } from '../../components/controlled/ControlledSelect';
import { ControlledInput } from '../../components/controlled/ControlledInput';
import { ControlledSelectHours } from '../../components/controlled/ControlledSelectHours';

import { 
  Container,
  ContainerBottomSheet,
  ContainerSteps,
  Footer,
  FormContainer,
  WrapperButtons,
  WrapperMain
} from './styles';

import { TYPE_FREQUENCY_ALERT } from './constants';

import { rememberSchema } from './schema';
import { MarkerStep } from '../../components/MarkerStep';

type RootParamList = {
  remember: {
    account: DebitValueType;
  }
}

type RememberType = z.infer<typeof rememberSchema>

export function Remember() {

  const navigation = useNavigation();

  const { control, handleSubmit, watch, reset, getValues,
    formState: { errors, isValid } } = useForm<RememberType>({
      resolver: zodResolver(rememberSchema),
      defaultValues: {
        hour: undefined,
        frequency: { label: undefined, value: undefined },
        day: undefined,
        quantity_months: undefined
      }
    })

  const frequencyValue = watch('frequency')
  
  const { params: { account } } = useRoute<RouteProp<RootParamList, 'remember'>>()

  const [activeBottomSheet, setActiveBottomSheet] = useState(false);

  function saveRemember(data: RememberType){
      console.log(account)
      console.log(data)
  }

  function resetFrenquency() {
    setActiveBottomSheet(false)
  }

  useEffect(() => {
    reset({
      hour: getValues().hour,
      frequency: getValues().frequency,
      day: undefined,
      quantity_months: undefined,
    }); 
  }, [frequencyValue?.value]);

  return (
    <Container>
      <Header title='Lembrar pagamento 😉' onBack={() => navigation.goBack()}/>

      <ContainerSteps>
        <MarkerStep active={false}/>
        <MarkerStep active={true}/>
      </ContainerSteps>

      <WrapperMain>

        <FormContainer>

          <ControlledSelectHours
           control={control}
           name='hour'
           label='Selecione um horário' 
           error={errors.hour?.message}
          />

          <View>
            <ControlledSelect 
              control={control}
              data={TYPE_FREQUENCY_ALERT}
              label='Frequência'
              placeholder='Ver opções de frenquência'
              name='frequency'
              hide={false}
              error={errors.frequency?.message || errors.frequency?.value?.message}
            />

            {
              frequencyValue && frequencyValue.value === 'monthly' 
              &&
              <View>
                <ControlledInput 
                  control={control}
                  label='Quantas meses quer que eu lembre?'
                  name='quantity_months'
                  placeholder='Digite a quantidade de meses'
                  keyboardType='numeric'
                  hide={false}
                  error={errors.quantity_months?.message}
                />
                <ControlledInput 
                  control={control}
                  label='Qual dia do mês?'
                  name='day'
                  placeholder='Digite um dia entre 1 e 28'
                  keyboardType='numeric'
                  hide={false}
                  error={errors.day?.message}
                />
              </View>
            }

          </View>

        </FormContainer>

        <Footer>
          <Button title='Não quero ser lembrado(a)' type='secondary'/>
          <Button title='Salvar' onPress={handleSubmit(saveRemember)}/>
        </Footer>
      </WrapperMain>
      
      {
        activeBottomSheet && 
          <ContainerBottomSheet>
            <Sheet>
              <View style={{ paddingHorizontal: 20 }}>

                <WrapperButtons>
                  <Button title='Mudei de idéia' type='secondary' onPress={() => resetFrenquency()}/>
                  <Button title='Avançar'/>
                </WrapperButtons>
              </View>

            </Sheet>
          </ContainerBottomSheet>
      }

    </Container>
  );
}