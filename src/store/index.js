/*
redux最核心的管理对象: store
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))