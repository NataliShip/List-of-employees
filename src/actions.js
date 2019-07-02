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