import * as types from './constants';

export const getList = (data) => {
  return { type: types.GET_LIST, data}
}

export const addDialogOpen = () => {
  return { type: types.ADD_DIALOG_OPEN }
}

export const addDialogClose = () => {
  return { type: types.ADD_DIALOG_CLOSE }
}

export const addEmployee = (data) => {
  return { type: types.ADD_EMPLOYEE, data }
}