import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/Welcome'
import MessageScreen from '../screens/Message'
import DoneScreen from '../screens/Done'
import { verticalAnimation } from './animation'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={{ gestureDirection: 'vertical' }}
        />
        <Stack.Screen
          name="Done"
          component={DoneScreen}
          options={{
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300 } },
              close: { animation: 'timing', config: { duration: 300 } }
            },
            cardStyleInterpolator: verticalAnimation
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
