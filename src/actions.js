import * as types from './constants';

export const getList = (data) => {
  return { type: types.GET_LIST, data}
}

export const dialogOpen = (name) => {
  return { type: types.DIALOG_OPEN, name }
}

export const dialogClose = () => {
  return { type: types.DIALOG_CLOSE }
}

export const addEmployee = (data) => {
  return { type: types.ADD_EMPLOYEE, data }
}

export const editEmployee = (employee) => {
  return { type: types.EDIT_EMPLOYEE, employee }
}