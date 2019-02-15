import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import menuReducer from './menu/reducer'
import searchBarReducer from './searchbar/reducer'
import dashboardReducer from './dashboard/reducer'

export default history =>
    combineReducers({
        router: connectRouter(history),
        menu: menuReducer,
        searchBar: searchBarReducer,
        dashboard: dashboardReducer
    })
