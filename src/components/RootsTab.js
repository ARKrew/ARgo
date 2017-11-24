import React from 'react';
import { TabNavigator } from 'react-navigation';
import Profile from './screens/Profile';
import More from './screens/More';
import Map from './screens/Map';
import List from './screens/List';

const ProfileScreen = () => (
  <Profile />
);

const MapScreen = () => (
  <Map />
);

const ListScreen = () => (
  <List />
);

const MoreScreen = () => (
  <More />
);

const RootsTab = TabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Map',
    }
  },
  List: {
    screen: ListScreen,
    navigationOptions: {
      title: 'List',
    }
  },
  More: {
    screen: MoreScreen,
    navigationOptions: {
      title: 'More',
    }
  }
});

export default RootsTab;
