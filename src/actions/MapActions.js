import { REGION_CHANGE } from './types';

export const updateRegion = (data) => {
  return {
    type: REGION_CHANGE,
    payload: data
  };
};
