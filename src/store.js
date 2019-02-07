import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(routerMiddleware(history), sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

sagaMiddleware.run(rootSaga)

export default store
