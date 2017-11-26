import { REGION_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  region: null,
  gpsAccuracy: null
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case REGION_CHANGE: 
      return action.payload;
    default: 
      return state;
  }
}