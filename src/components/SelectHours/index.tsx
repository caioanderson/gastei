import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Alarm } from 'phosphor-react-native';

import { 
  BackdropIcon, 
  Container,
  ContainerHours,
  ErrorMessage,
  HourName,
  Label,
  WrapperHour
} from './styles';
import moment from 'moment';
import { Loading } from '../Loading';

type renderHourProps = {
  item: string;
}

export type SelectHoursRoot = {
  label: string;
  hide?: boolean;
  error?: string;
}

export type SelectHoursProps = SelectHoursRoot & {
  value: string;
  onChange: (value: string) => void;
}



export function SelectHours({ label, value, hide, error, onChange  }: SelectHoursProps) {

  console.log(value)

  const { COLORS } = useTheme()

  const [hours, setHours] = useState<string[]>([]);

  function getHours(){
    const startOfDay = moment().startOf('day');
    const hoursOfDay = Array.from({ length: 24 }, (_, i) =>
      startOfDay.clone().add(i, 'hours').format('HH:mm')
    );

    setHours(hoursOfDay)
  }

  function renderHours({ item }: renderHourProps) {
    return(
      <WrapperHour
        key={item}
        isHourSelected={item === value ? true : false}
        onPress={() => onChange(item)}            
        >
        <HourName 
          isHourSelected={item === value ? true : false}>
            {item}
          </HourName>
      </WrapperHour>
    )
  }

  useEffect(() => {
    getHours();
  }, []);

  return (
    <Container>
      <Label>{label}</Label>

      {
        hours
        ? <ContainerHours>
            <BackdropIcon>
              <Alarm color={COLORS.BRAND_SECONDARY_LIGHT} size={24} weight='bold'/>
            </BackdropIcon>
            <FlatList 
              data={hours}
              keyExtractor={(item) => String(item)}
              renderItem={renderHours}
              horizontal
              contentContainerStyle={{  paddingHorizontal: 10, gap: 10  }}
              showsHorizontalScrollIndicator={false}
            />
          </ContainerHours>
        : <Loading />
      }

    {error && <ErrorMessage>{error}</ErrorMessage>}

    </Container>
  );
}