import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet} from 'react-native'
import { House, Plus, Calendar, Receipt, Person, } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native' 

import { AppRoutesDebit, AppRoutesHome } from './app.routes';
// import { NewDebit } from '../screens/NewDebit';

const Tab = createBottomTabNavigator()

export function TabRoutes() {

  const { COLORS } = useTheme()

  return(
    <Tab.Navigator 
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) || ""
        return { 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.BRAND_PRIMARY_MID,
          tabBarInactiveTintColor: COLORS.GRAY_600,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.tabBar,
            { 
              display: routeName === 'debitdetail' ? 'none': 'flex',
            }],
          
          headerTransparent: true,
          tabBarBackground: () => (
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, .8)',
                'rgba(255, 255, 255, .9)',
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
              ]}
              style={{ flex: 1 }}
          />
          ),
          
        }
      }} 
      >

      <Tab.Screen
       name='Home'
       component={AppRoutesHome}
       options={{
        tabBarIcon: ({ color, size }) => {
          return (
          <House 
            color={color} 
            size={size}/>
          )},
       }}
       />

    <Tab.Screen
       name='NewDebit'
       component={AppRoutesDebit}
       options={{
        tabBarIcon: ({ color, size }) => {
          return (
          <Plus 
            color={color} 
            size={size}/>
          )},
          tabBarStyle: {
            display: 'none'
          }
       }}
       />

    <Tab.Screen
       name='Home3'
       component={AppRoutesHome}
       listeners={() => ({
        tabPress: event => { 
          event.preventDefault(); 
        }
       })}
       options={{
        tabBarIcon: ({ size }) => {
          return (
            <View style={{ paddingHorizontal: 12, paddingVertical: 20, backgroundColor: COLORS.BRAND_PRIMARY_MID, borderRadius: 5  }}>
              <Receipt 
                color={COLORS.GRAY_100} 
                size={29}/>
            </View>
          )}
       }}
       />

      <Tab.Screen
       name='Home4'
       component={AppRoutesHome}
       options={{
        tabBarIcon: ({ color, size }) => {
          return (
          <Calendar 
            color={color} 
            size={size}/>
          )},
       }}
       />

      <Tab.Screen
       name='Home5'
       component={AppRoutesHome}
       options={{
        tabBarIcon: ({ color, size }) => {
          return (
          <Person 
            color={color} 
            size={size}/>
          )},
       }}
       />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    height: 100,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
});