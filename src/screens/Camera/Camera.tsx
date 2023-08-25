import React, { useContext, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { isNil } from 'ramda'
import { CameraScreenProps } from '../../navigation/MainStack/types'
import { LoadingPage } from '../../components'
import {
  Camera as VisionCamera,
  useCameraDevices,
} from 'react-native-vision-camera'
import {
  PicturesContext,
  PicturesContextType,
} from '../../context/PicturesContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

/**
 * The `Camera` component is a TypeScript React component that allows the user to take photos using the
 * device's camera and save them using the `savePicture` function from the `PicturesContext`.
 * @param {CameraScreenProps}  - - `navigation`: This is a prop provided by React Navigation that
 * allows navigation between screens in the app.
 * @returns The Camera component is returning a JSX element.
 */
const Camera = ({ navigation }: CameraScreenProps): JSX.Element => {
  const { savePicture } = useContext(
    PicturesContext
  ) as PicturesContextType

  const camera = useRef<VisionCamera>(null)
  const { back: backCamera } = useCameraDevices()

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is used to request camera permissions when the component is
  mounted. */
  useEffect(() => {
    const requestPermissions = async () => {
      await VisionCamera.requestCameraPermission()
    }
    requestPermissions()
  }, [])

  /**
   * The function `takePhoto` captures a photo using the camera, saves it, and then navigates back.
   */
  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto()
    if (!isNil(photo)) {
      savePicture(photo)
      navigation.goBack()
    }
  }

  if (isNil(backCamera)) return <LoadingPage />

  return (
    <SafeAreaView style={[styles.main]}>
      <VisionCamera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={backCamera}
        isActive
        photo
        zoom={backCamera?.neutralZoom}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.goBackButton]}
      >
        <Ionicons name="arrow-back" size={25} color="#6246df" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={takePhoto}
        style={[styles.shutter]}
      />
    </SafeAreaView>
  )
}

export default Camera
