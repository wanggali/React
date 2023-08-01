/**
 * 为count生成action
 */
import {DECR, INCR} from "./constant";

//同步action 就是指action值为object对象
export const createIncrAction = data => ({type: INCR, data})

export function createDecrAction(data) {
    return {
        type: DECR,
        data
    }
}

//异步action 就是指action值为函数,异步action中一般都会调用同步action
export const createIncrAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrAction(data))
        }, time)
    }
}
