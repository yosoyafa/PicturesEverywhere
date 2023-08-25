# Pictures Everywhere
## Table of Content:

- [Pictures Everywhere](#pictures-everywhere)
  - [Table of Content:](#table-of-content)
  - [About The App](#about-the-app)
  - [Video recording](#video-recording)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Approach](#approach)
  - [License](#license)

## About The App
With **Pictures Everywhere** you can: 
- Take pictures with your device's camera
- Share your photos with friends and family
- See where your photos were taken

## Video recording

## Technologies
- React Native
- React Navigation
- Context API
- Async Storage
- TypeScript

## Setup
1. Download or clone the repository
2. Make sure you have your React Native development environment set up. (https://reactnative.dev/docs/environment-setup)
3. Run `yarn deps`
4. Run `yarn ios` or `yarn android`

## Approach
Used [react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera) to take pictures and saved them with [AsyncStorage](https://github.com/react-native-async-storage/async-storage). The cool transition from Gallery to Picture screen was made with [react-navigation-shared-element](https://github.com/IjzerenHein/react-navigation-shared-element), the share feature was possible thanks to [react-native-share](https://github.com/react-native-share/react-native-share), and the device's geolocation is obtained by [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service).

## License

This project is licensed under the MIT License.
