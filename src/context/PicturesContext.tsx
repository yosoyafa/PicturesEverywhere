import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'
import { PhotoFile } from 'react-native-vision-camera'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Picture } from '../types'
import { isEmpty, isNil } from 'ramda'
import Geolocation from 'react-native-geolocation-service'
import { round } from '../utils'

const PICTURES = 'PICTURES'

export type PicturesContextType = {
  pictures: Picture[]
  savePicture: (picture: PhotoFile) => void
}

/* The code is creating a context object called `PicturesContext` using the `createContext` function
from React. The context object has a type of `PicturesContextType | null`, which means it can either
have a value of `PicturesContextType` or `null`. */
export const PicturesContext =
  createContext<PicturesContextType | null>({
    pictures: [],
    savePicture: () => null,
  })

/**
 * The `PicturesProvider` component is a context provider that manages an array of pictures, allows
 * saving pictures with their metadata, and persists the pictures to AsyncStorage.
 * @param  - - `children`: The child components that will be rendered within the `PicturesProvider`
 * component.
 * @returns The `PicturesProvider` component is returning a `PicturesContext.Provider` component with
 * the `pictures` and `savePicture` values provided as the context value. The `children` prop is
 * rendered as the children of the `PicturesContext.Provider` component.
 */
const PicturesProvider = ({ children }: { children: ReactNode }) => {
  const [pictures, setPictures] = useState<Picture[]>([])

  /**
   * The function `savePicture` saves a photo file with its path, width, and height, along with its
   * geolocation if available, to an array of pictures.
   * @param {PhotoFile}  - - `path`: The file path of the photo to be saved.
   */
  const savePicture = ({ path, width, height }: PhotoFile) => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setPictures([
          ...pictures,
          {
            uri: `file://${path}`,
            location: {
              latitude: round(latitude),
              longitude: round(longitude),
            },
            width,
            height,
          },
        ])
      },
      () => {
        setPictures([
          ...pictures,
          { uri: `file://${path}`, width, height },
        ])
      }
    )
  }

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is used to persist the `pictures` object to AsyncStorage whenever it changes. */
  useEffect(() => {
    const persistPictures = async () => {
      if (!isEmpty(pictures)) {
        try {
          await AsyncStorage.setItem(
            PICTURES,
            JSON.stringify(pictures)
          )
        } catch (e) {}
      }
    }
    persistPictures()
  }, [pictures])

  /* The `useEffect` hook is used to fetch the persisted pictures from AsyncStorage when the component
  mounts. */
  useEffect(() => {
    const getPictures = async () => {
      try {
        const jsonPictures = await AsyncStorage.getItem(PICTURES)
        if (!isNil(jsonPictures))
          setPictures(JSON.parse(jsonPictures))
      } catch (e) {}
    }
    getPictures()
  }, [])

  return (
    <PicturesContext.Provider
      value={{
        pictures,
        savePicture,
      }}
    >
      {children}
    </PicturesContext.Provider>
  )
}

export default PicturesProvider
