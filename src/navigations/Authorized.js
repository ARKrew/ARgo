import React from 'react';
import { TabNavigator } from 'react-navigation';
import Profile from './Profile';

const Authorized = TabNavigator({
    Profile: {
      screen: Profile
    }
  }, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default Authorized;
