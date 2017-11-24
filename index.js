// import React, { Component } from 'react';
// import { AppRegistry } from 'react-native';
// import LoginForm from './src/components/LoginForm';
// import Profile from './src/components/Profile';
// import { StackNavigator } from 'react-navigation'
// import * as firebase from 'firebase';
//
// const firebaseConfig = {
//   apiKey: 'AIzaSyCUGO1U43_sMeTlVm9nl7ytwcILcrFsjOg',
//   authDomain: 'argo-4cbff.firebaseapp.com',
//   databaseURL: 'https://argo-4cbff.firebaseio.com',
//   projectId: 'argo-4cbff',
//   storageBucket: 'argo-4cbff.appspot.com',
//   messagingSenderId: '246167725320'
// };
//
// firebase.initializeApp(firebaseConfig);
//
// const RouteConfigs = {
//     Login: { screen: LoginForm },
//     Profile: { screen: Profile }
// };
//
// const StackNavigatorConfig = {
//     headerMode: 'none',
// };
//
// const App = StackNavigator(RouteConfigs, StackNavigatorConfig);
//
// AppRegistry.registerComponent('ARgo', () => App);


import { AppRegistry } from 'react-native';
import NavigationalApp from './src/App';

AppRegistry.registerComponent('ARgo', () => NavigationalApp);
