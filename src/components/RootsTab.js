import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Jizzys Profile</Text>
    <Image
      style={{ width: 350, height: 350 }}
      source={{
        uri: 'https://avatars1.githubusercontent.com/u/28130499?v=4&s=400'
      }}
    />
  </View>
);

const MapScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Map</Text>
  </View>
);

const ListScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>List View</Text>
  </View>
);

const MoreScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Mas</Text>
  </View>
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
