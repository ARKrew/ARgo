import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { updateRegion } from '../../actions';

class MapViews extends Component {
  constructor(props) {
    super(props);
    watchId: null
  }

  componentWillMount() {
    this.watchId = navigator.geolocation.watchPosition(position => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      };

      this.onRegionChange(region, position.coords.accuracy);
    });
  }

  onRegionChange(region, gpsAccuracy) {
    this.props.updateRegion({ region, gpsAccuracy: gpsAccuracy || this.props.gpsAccuracy });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    console.log(this)
    return (
      <View style={styles.container}>
        <MapView
          style={ styles.map }
          region={this.props.region}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          onRegionChange={this.onRegionChange.bind(this)}
        />
      </View>
    )
  }
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};

const mapStateToProps = (state, hasOwnProps) => {
  return state.map;
}

export default connect(mapStateToProps, { updateRegion })(MapViews);