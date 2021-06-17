import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import Navigation from './src/navigation'

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
      <Navigation />
    </>
  )
}
