import React, { useContext } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { GalleryScreenProps } from '../../navigation/MainStack/types'
import { FloatingButton, Thumbnail } from '../../components'
import {
  PicturesContext,
  PicturesContextType,
} from '../../context/PicturesContext'
import Ionicons from 'react-native-vector-icons/Ionicons'

/* The code defines a functional component called `Gallery` that renders a gallery of pictures. It
takes a `navigation` prop from the `GalleryScreenProps` type. */
const Gallery = ({ navigation }: GalleryScreenProps): JSX.Element => {
  const { pictures } = useContext(
    PicturesContext
  ) as PicturesContextType

  return (
    <SafeAreaView style={[styles.main]}>
      <FlatList
        data={pictures}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={[styles.footer]} />}
        renderItem={({ item: picture }) => {
          const { uri } = picture
          return (
            <Thumbnail
              onPress={() => {
                navigation.navigate('PictureDetails', {
                  picture,
                })
              }}
              uri={uri}
            />
          )
        }}
        keyExtractor={({ uri }) => uri}
        style={[styles.list]}
        contentContainerStyle={[styles.contentContainer]}
        ListEmptyComponent={
          <View style={[styles.emptyListContainer]}>
            <Text style={[styles.emptyListLabel]}>
              Go take some pictures!
            </Text>
          </View>
        }
      />
      <FloatingButton
        label="Take Picture"
        icon={<Ionicons name="camera" size={20} color="white" />}
        onPress={() => {
          navigation.navigate('Camera')
        }}
      />
    </SafeAreaView>
  )
}

export default Gallery
