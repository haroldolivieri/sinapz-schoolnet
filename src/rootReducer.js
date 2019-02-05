import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import menuReducer from './menu/reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    menu: menuReducer
  })