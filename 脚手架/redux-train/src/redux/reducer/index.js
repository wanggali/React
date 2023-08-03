import {combineReducers} from 'redux'
import countReducer from "./count";
import personReducer from "./person";

//汇总所有的reducer，变为一个总的reducer

export default combineReducers({
    count: countReducer,
    person: personReducer
})

