import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../common';

class Profile extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Header headerText={'List'} />
            <Text>Jizzys Profile</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ width: 350, height: 350 }}
                source={{
                    uri: 'https://avatars1.githubusercontent.com/u/28130499?v=4&s=400'
                }}
              />
            </View>
        </View>
    );
  }
}

export default Profile;
