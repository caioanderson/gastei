import { LocaleConfig } from 'react-native-calendars';

export function languageCalendar() {
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro",  "Dezembro" 
  ]

  const monthNamesShort = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const dayNames = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
  ];
  
  const dayNamesShort = ["D", "S", "T", "Q", "Q", "S", "S"];
  const today = "Hoje";

  LocaleConfig.locales['pt-br'] = {
    monthNames,
    monthNamesShort,
    dayNames,
    dayNamesShort,
    today
  }

  LocaleConfig.defaultLocale = 'pt-br'
}