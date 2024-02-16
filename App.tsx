import 'react-native-gesture-handler';
import 'moment/locale/pt-br';
import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold, 
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './src/theme';

import { Loading } from './src/components/Loading';

import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
            <Routes />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}