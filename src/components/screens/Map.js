import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common';
// import MapViews from '../map/MapView';

class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Map'} />
        <Text>
          Hello World! This is a map placeholder.
        </Text>
      </View>
    );
  }
}

export default Map;
