import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold, 
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import theme from './src/theme';

import { Loading } from './src/components/Loading';

import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {

  const [loaded] = useFonts({ 
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold, 
    Poppins_800ExtraBold })

  if(!loaded){
    return(
      <Loading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      <Routes />
    </ThemeProvider>
  );
}