import * as types from './constants';

const initialState = {
  list: [],
  activeDialog: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST:
      return {
        ...state,
        list: action.data
      }
    case types.DIALOG_OPEN:
      return {
        ...state,
        activeDialog: action.name
      }
    case types.DIALOG_CLOSE:
      return {
        ...state,
        activeDialog: null
      }
    case types.ADD_EMPLOYEE:
      return {
        ...state,
        list: [...state.list, action.data]
      }
    default: {
      return state;
    }
  }
}