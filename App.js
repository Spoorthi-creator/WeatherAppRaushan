import { View, Text,LogBox } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home';
import Details from './components/Details';
import * as Notifications from 'expo-notifications';

import FlashScreen from './components/FlashScreen';
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
  " Cannot update a component (`ForwardRef(BaseNavigationContainer)`) while rendering a different component (`Details`).",
]);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='FlashScreen' component={FlashScreen} options={{headerShown:false}} /> 
      <Stack.Screen name='Home' component={Home} options={{headerShown:false,headerTintColor:'#7393B3'}}/> 
      <Stack.Screen name='Your Weather' component={Details} options={{headerShown:true}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}