import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common';
// import MapViews from '../map/MapView';

class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Map'} />
        // <MapViews />
      </View>
    );
  }
}

export default Map;
