import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { CalendarList, ExpandableCalendar } from 'react-native-calendars';
import { CaretDown, CaretUp, X } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import moment from 'moment';

import { 
  Container,
  ContainerContentSelect,
  InputCalendar,
  Placeholder,
  Label,
  ResetValueButton,
  ErrorMessage
 } from './styles';

import { languageCalendar } from './utils/languageCalendar';

export type CalendarRoot = {
  label: string;
  placeholder: string;
  boxProps: number;
  isActive: (active: boolean) => void;
  error: string | undefined;
  forceActive?: boolean;
}

export type CalendarProps = CalendarRoot & {
  onChange: (date: string) => void;
  value: string;
}

export function Calendar({ 
  label, 
  placeholder, 
  boxProps, 
  isActive, 
  error, 
  onChange, 
  value,
  forceActive = false,
} : CalendarProps) {
 
  languageCalendar()

  const { COLORS, FONT_FAMILY } = useTheme()

  const [activeCalendar, setActiveCalendar] = useState(false)
  const [marker, setMarker] = useState('')

  function selectDay(day: string) {
    setMarker(day)
    const date = moment(day).format('DD/MM/YYYY')
    onChange(date)
    setActiveCalendar(false)
  }

  function resetValue() {
    setMarker('')
    onChange('')
  }

  useEffect(() => {
    isActive(activeCalendar)
  }, [activeCalendar])

  return (
    <Container>
      <Label>{label}</Label>
      <InputCalendar activeOpacity={1} onPress={() => setActiveCalendar((previous) => !previous)}>
            <ContainerContentSelect>
              <Placeholder>{value ? value : placeholder}</Placeholder>
              {
                value && !activeCalendar
                ? <ResetValueButton activeOpacity={.7} onPress={() => resetValue()}>
                    <X color={COLORS.BLACK} size={16} weight='bold'/>  
                  </ResetValueButton> 
                : activeCalendar
                ? <CaretUp color={COLORS.BLACK} size={16}/> 
                : <CaretDown color={COLORS.BLACK} size={16} />
              }
            </ContainerContentSelect>
      </InputCalendar>

        {
          activeCalendar
          && 
            <CalendarList 
                current={moment().format('YYYY-MM-DD')}
                onDayPress={(day) => selectDay(day.dateString)}
                horizontal
                hideExtraDays={false}
                firstDay={1}
                calendarWidth={Dimensions.get('window').width - boxProps * 2}
                markedDates={{
                  [marker]: {
                    selected: true, 
                    disableTouchEvent: true, 
                    selectedColor: COLORS.BRAND_PRIMARY_MID,
                  }
                }}
                theme={{
                  calendarBackground: COLORS.GRAY_100,
                  textDayFontFamily: FONT_FAMILY.REGULAR,
                  textDayHeaderFontFamily: FONT_FAMILY.REGULAR,
                }}
                scrollEnabled={true}
                pagingEnabled={true}
                showWeekNumbers={false}
            />
        }

    {error && !activeCalendar && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}