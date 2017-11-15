// Make sure import statement is correct
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

// Update as you create new actions
const INITIAL_STATE = { 
    email: '', 
    password: ''
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // This will return as application's state
            // Take all properties on state, then use email value to replace state's email
            // Brand new object is created with ...! Immutable
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
