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
    case types.EDIT_EMPLOYEE:
      const newList = state.list;
      newList.forEach(item => {
        if (item.id === action.employee.id) {
          item.name = action.employee.name;
          item.surname = action.employee.surname;
          item.position = action.employee.position;
          item.description = action.employee.description;
        }
      })
      return {
        ...state,
        list: newList
      }
    default: {
      return state;
    }
  }
}