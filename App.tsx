import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { MainStack } from './src/navigation'
import SplashScreen from 'react-native-splash-screen'
import PicturesProvider from './src/context/PicturesContext'
import Geolocation from 'react-native-geolocation-service'

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  useEffect(() => {
    const requestGeolocationPermissions = async () => {
      await Geolocation.requestAuthorization('whenInUse')
    }
    requestGeolocationPermissions()
  })

  return (
    <NavigationContainer>
      <PicturesProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainStack />
        </SafeAreaView>
      </PicturesProvider>
    </NavigationContainer>
  )
}

export default App
