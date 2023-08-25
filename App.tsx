import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
} from 'react-native'
import { MainStack } from './src/navigation'
import SplashScreen from 'react-native-splash-screen'
import PicturesProvider from './src/context/PicturesContext'
import Geolocation from 'react-native-geolocation-service'

const App = (): JSX.Element => {
  /* The `useEffect(() => { SplashScreen.hide() }, [])` is a React hook that is used to perform side
  effects in a functional component. In this case, it is used to hide the splash screen when the
  component mounts. The empty array `[]` as the second argument ensures that the effect is only run
  once, when the component is mounted. */
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is being used to request geolocation permissions when the component mounts. */
  useEffect(() => {
    const requestGeolocationPermissions = async () => {
      if (Platform.OS === 'ios') {
        return await Geolocation.requestAuthorization('whenInUse')
      }
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
    }
    requestGeolocationPermissions()
  }, [])

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
