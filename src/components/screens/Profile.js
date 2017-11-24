import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
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
  }
}

export default Profile;
