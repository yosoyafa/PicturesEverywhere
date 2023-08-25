import { useRef, useState } from 'react'
import { Animated } from 'react-native'

/**
 * The `useFade` function returns an object with properties and methods for fading in and fading out an
 * element using React Native's Animated API.
 * @returns The `useFade` function returns an object with the following properties:
 */
const useFade = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const opacity = useRef(new Animated.Value(0)).current

  const fadeIn = (options?: { delay?: number }) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: options?.delay || 200,
      useNativeDriver: true,
    }).start()
    setIsShowing(true)
  }

  const fadeOut = (options?: { delay?: number }) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 250,
      delay: options?.delay || 200,
      useNativeDriver: true,
    }).start()
    setIsShowing(false)
  }

  return {
    opacity,
    fadeIn,
    fadeOut,
    isShowing,
  }
}

export default useFade
