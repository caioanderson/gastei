import { createNativeStackNavigator,  } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { DebitDetail } from '../screens/DebitDetail'
import { NewDebit } from '../screens/NewDebit';
import { Remember } from '../screens/Remember';

const { Navigator, Screen, Group } = createNativeStackNavigator()

export function AppRoutesHome(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name='signIn' component={SignIn}/> */}
      <Screen name='home' component={Home}/>
      <Screen 
        name='debitdetail' 
        component={DebitDetail} 
        options={{ 
          presentation: 'containedTransparentModal', 
          animation: 'none',
          }}/>
    </Navigator>
  )
}

export function AppRoutesDebit() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='newDebit' component={NewDebit}/>
      <Screen name='remember' component={Remember} />
    </Navigator>
  )
}