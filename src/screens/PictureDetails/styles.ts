import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  locationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 24,
  },
  locationLabel: {
    color: 'black',
    fontSize: 16,
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 90,
  },
  shareButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 90,
  },
})
