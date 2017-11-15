import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
// Middleware
import ReduxThunk from 'redux-thunk';
import { 
  FIREBASE_apiKey, 
  FIREBASE_authDomain, 
  FIREBASE_databaseURL, 
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId
} from 'react-native-dotenv';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  // Lifecycle method that will intialize as soon as app loads
  componentWillMount() {
    const config = {
      apiKey: FIREBASE_apiKey,
      authDomain: FIREBASE_authDomain,
      databaseURL: FIREBASE_databaseURL,
      projectId: FIREBASE_projectId,
      storageBucket: FIREBASE_storageBucket,
      messagingSenderId: FIREBASE_messagingSenderId
    };
    firebase.initializeApp(config);
  }
  
  render() {
    // Wire up redux-thunk
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      // STORE
      // Pass reducers through createStore call
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
