import * as types from './types';

export const loadInitalData = () => ({
  type: types.LOAD_INITAL_DATA
});

export const selectItem = pathTo => ({
  type: types.SELECT_ITEM_FROM_MENU,
  pathTo
});

export const setMenuItems = items => ({
  type: types.SET_MENU_ITEMS,
  items
})

export const setSchoolnetInfo = info => ({
  type: types.SET_SCHOOLNET_INFO,
  info
})
