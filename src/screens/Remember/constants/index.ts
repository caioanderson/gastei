import { DaysOfWeek, Frenquency } from ".."


export const TYPE_FREQUENCY_ALERT: Frenquency [] = [
  {
    value: 'daily',
    label: 'Diariamente'
  },
  {
    value: 'monthly',
    label: 'Mensalmente'
  },
  {
    value: 'specific_day',
    label: 'Dia em especifico'    
  }
]

export const DAYS_OF_WEEK: DaysOfWeek [] = [
  {
    value: '0',
    label: 'Domingo'
  },
  {
    value: '1',
    label: 'Segunda-feira'
  },
  {
    value: '2',
    label: 'Terça-feira'
  },
  {
    value: '3',
    label: 'Quarta-feira'    
  },
  {
    value: '4',
    label: 'Quinta-feira'
  },
  {
    value: '5',
    label: 'Sexta-feira'
  },
  {
    value: '6',
    label: 'Sábado'
  }
]
