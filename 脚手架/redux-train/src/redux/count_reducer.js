/**
 * 用于创建一个为count组件服务的reducer,本质就是一个函数
 * reducer函数会接到两个参数分别为之前的状态，动作对象
 */

//初始化状态
const initPreState = 0

export default function countReducer(preState = initPreState, action) {
    const {type, data} = action

    switch (type) {
        case 'incr':
            return preState + parseInt(data)
        case 'decr':
            return preState - parseInt(data)
        default:
            return preState
    }
}
