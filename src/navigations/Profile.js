import React from 'react';
import { TabNavigator } from 'react-navigation';
import ProfileScreen from '../scenes/authorized/Profile';

const Home = TabNavigator({
  Profile: {
    screen: ProfileScreen
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
  activeTintColor: '#e91e63',
},
});

export default Home;
