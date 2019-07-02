import * as types from './constants';

const initialState = {
  list: [],
  isAddDialogOpen: false,
  isChangeDialogOpen: false,
  isInfoDialogOpen: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST:
      return {
        ...state,
        list: action.data
      }
    case types.ADD_DIALOG_OPEN:
      return {
        ...state,
        isAddDialogOpen: true
      }
    case types.ADD_DIALOG_CLOSE:
      return {
        ...state,
        isAddDialogOpen: false
      }
    default: {
      return state;
    }
  }
}