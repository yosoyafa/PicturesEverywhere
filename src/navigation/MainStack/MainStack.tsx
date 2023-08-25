import React from 'react'

import { Camera, Gallery, PictureDetails } from '../../screens'
import { MainStackParamList } from './types'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

const Stack = createSharedElementStackNavigator<MainStackParamList>()

/**
 * The MainStack function returns a React component that renders a stack navigator with three screens:
 * Gallery, Camera, and PictureDetails.
 * @returns The MainStack component is being returned.
 */
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PictureDetails"
        component={PictureDetails}
        options={{ headerShown: false }}
        sharedElements={(route) => {
          return [route.params.picture.uri]
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
