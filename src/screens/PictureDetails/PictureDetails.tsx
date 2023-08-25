import React, { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native'
import { PictureDetailsScreenProps } from '../../navigation/MainStack/types'
import { SharedElement } from 'react-navigation-shared-element'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { isNil } from 'ramda'
import Share from 'react-native-share'
import { useFade } from '../../hooks'

/**
 * The `PictureDetails` function is a React component that displays the details of a picture, including
 * the image, location, and buttons to go back and share the picture.
 * @param {PictureDetailsScreenProps}  - The `navigation` parameter is used for navigating between
 * screens in a React Navigation stack. It provides functions like `navigate`, `goBack`, and `push` to
 * navigate to different screens.
 * @returns The `PictureDetails` component is returning a JSX element.
 */
const PictureDetails = ({
  navigation,
  route,
}: PictureDetailsScreenProps) => {
  const {
    picture: { uri, location },
  } = route.params

  const { opacity, isShowing, fadeIn, fadeOut } = useFade()

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is used to fade in the picture details screen buttons with a delay of 500 milliseconds. */
  useEffect(() => {
    fadeIn({ delay: 500 })
  }, [])

  /**
   * The function `share` opens the `Share` module and then fades in.
   */
  const share = async () => {
    try {
      await Share.open({ url: uri })
      fadeIn()
    } catch {
      fadeIn()
    }
  }

  const AnimatedTouchable =
    Animated.createAnimatedComponent(TouchableOpacity)

  return (
    <SafeAreaView style={[styles.main]}>
      <Pressable
        onPress={isShowing ? () => fadeOut() : () => fadeIn()}
      >
        <SharedElement id={uri}>
          <Image style={[styles.image]} source={{ uri }} />
        </SharedElement>
      </Pressable>
      <Animated.View style={[styles.locationContainer, { opacity }]}>
        <Text style={[styles.locationLabel]}>
          {isNil(location)
            ? 'No location provided.'
            : `Location: ${location.latitude}, ${location.longitude}`}
        </Text>
      </Animated.View>
      <AnimatedTouchable
        onPress={() => navigation.goBack()}
        style={[styles.goBackButton, { opacity }]}
      >
        <Ionicons name="arrow-back" size={25} color="#6246df" />
      </AnimatedTouchable>
      <AnimatedTouchable
        onPress={share}
        style={[styles.shareButton, { opacity }]}
      >
        <Ionicons name="share" size={25} color="#6246df" />
      </AnimatedTouchable>
    </SafeAreaView>
  )
}

export default PictureDetails
