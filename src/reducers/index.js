import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import Navigation from './NavigationReducer';

export default combineReducers({
    auth: AuthReducer,
    nav: Navigation,
});
