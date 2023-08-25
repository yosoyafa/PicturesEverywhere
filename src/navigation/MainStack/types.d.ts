import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Picture } from '../../types'

export type MainStackParamList = {
  Gallery: undefined
  PictureDetails: {
    picture: Picture
  }
  Camera: undefined
}

export type GalleryScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Gallery'
>

export type CameraScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Camera'
>

export type PictureDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'PictureDetails'
>
