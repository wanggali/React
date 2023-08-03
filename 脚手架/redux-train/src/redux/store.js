import {createStore, applyMiddleware, combineReducers} from 'redux'
//引入为count组件服务的
import countReducer from './reducer/count'
//引入为person组件服务的
import personReducer from "./reducer/person";
//异步action，redux-thunk
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducer from "./reducer";


//暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))