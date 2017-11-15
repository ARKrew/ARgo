import firebase from 'firebase';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
    return {
        // Forms strong link between action and reducer (type: string)
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
    // Will get access to firebase servers
    firebase.auth().signInWithEmailAndPassword(email, password)
    // Not calling dispatch until request is complete
        .then(user => {
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
        });
    };
};
