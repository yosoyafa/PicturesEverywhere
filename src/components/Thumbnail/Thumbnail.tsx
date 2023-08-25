import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import styles from './styles'

interface ThumbnailProps {
  uri: string
  onPress: () => void
}

/**
 * The `Thumbnail` component is a clickable image that uses a shared element transition when pressed.
 * @param {ThumbnailProps}  - - `uri`: The URI of the image to be displayed in the thumbnail.
 * @returns The Thumbnail component is returning a TouchableOpacity component that wraps an Image
 * component. The Image component displays an image specified by the uri prop. The TouchableOpacity
 * component is also given an onPress prop, which is a function that will be called when the
 * TouchableOpacity is pressed.
 */
const Thumbnail = ({ uri, onPress }: ThumbnailProps) => {
  return (
    <TouchableOpacity style={[styles.main]} onPress={onPress}>
      <SharedElement id={uri}>
        <Image style={[styles.image]} source={{ uri }} />
      </SharedElement>
    </TouchableOpacity>
  )
}

export default Thumbnail
