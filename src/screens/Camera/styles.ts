import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 90,
  },
  shutter: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    height: 80,
    width: 80,
    borderRadius: 80,
    borderWidth: 6,
    borderColor: 'white',
    zIndex: 1,
  },
})
