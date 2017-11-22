import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import FBSDK, { AccessToken, LoginManager } from 'react-native-fbsdk';
import { loginSuccess } from '../../actions/AuthActions';

const config = {
  apiKey: 'AIzaSyCUGO1U43_sMeTlVm9nl7ytwcILcrFsjOg',
  authDomain: 'argo-4cbff.firebaseapp.com',
  databaseURL: 'https://argo-4cbff.firebaseio.com',
  projectId: 'argo-4cbff',
  storageBucket: 'argo-4cbff.appspot.com',
  messagingSenderId: '246167725320'
};

firebase.initializeApp(config);

class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        animating: false,
        error: null
    }


    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error: null
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_photos']);
            if (result.isCancelled) {
                throw new Error('Please sign in before continue');
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);

            this.setState({
                animating: false,
                error: null
            });
            console.log(this.props);
            this.props.loginSuccess(user);
        } catch (error) {
            this.setState({
                animating: false,
                error: error.message
            });
        }
    }

    createUser = (uid, userData, token, dp) => {
    const defaults = {
      uid,
      token,
      dp,
      ageRange: [20, 30]
    };
    firebase.database().ref('users').child(uid).update({ ...userData, ...defaults });
  }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>Login Screen</Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#444"
                    size="large"
                />
                {
                    this.state.error ? (
                        <Text style={styles.error}>{this.state.error}</Text>
                    ) : null
                }
                <TouchableOpacity
                    onPress={this.onLogin.bind(this)}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: '#3b5998',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: '#fff' }}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    error: {
        fontSize: 18,
        color: 'red'
    }
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    logged: state.auth.loggedIn,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { loginSuccess })(Login);
