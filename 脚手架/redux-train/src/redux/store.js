import {createStore, applyMiddleware} from 'redux'
//引入为count组件服务的
import countReducer from './reducer/count'
//异步action，redux-thunk
import thunk from 'redux-thunk'


//暴露store
export default createStore(countReducer,applyMiddleware(thunk))