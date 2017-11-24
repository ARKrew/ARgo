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
    screen: ProfileScreen
  },
  Map: {
    screen: MapScreen
  },
  List: {
    screen: ListScreen
  },
  More: {
    screen: MoreScreen
  }
});

export default RootsTab;
