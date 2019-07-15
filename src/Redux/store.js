import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import listReducer from './Reducers/listReducer'
import tabbarReducer from './Reducers/tabbarReducer'
import stateReducer from './Reducers/stateReducer'
const reducer = combineReducers({
    list:listReducer,
    isShow:tabbarReducer,
    isState:stateReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware)
  ));
export default store
