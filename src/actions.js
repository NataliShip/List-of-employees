import * as types from './constants';

export const getList = (data) => {
  return { type: types.GET_LIST, data}
}