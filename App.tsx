import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/screens/Home'
const Stack = createStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('./src/assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./src/assets/fonts/Poppins-Bold.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <>
      <StatusBar translucent={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
