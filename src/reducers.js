import * as types from './constants';

const initialState = {
  list: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST:
      return {
        ...state,
        list: action.data
      }
    default: {
      return state;
    }
  }
}