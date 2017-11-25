import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../common';
import { fbImage } from '../LoginForm';

class Profile extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Header headerText={'Profile'} />
            <Text>Izzys Profile</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ width: 350, height: 350 }}
                source={{
                    uri: fbImage
                }}
              />
            </View>
        </View>
    );
  }
}

export default Profile;
