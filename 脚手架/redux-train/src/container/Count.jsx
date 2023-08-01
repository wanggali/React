import CountUI from "../component/Count"

import {connect} from "react-redux"
import {DECR, INCR} from "../redux/constant";
import {createDecrAction, createIncrAction, createIncrAsyncAction} from "../redux/count_action";


//mapStateToProps传递状态
function mapStateToProps(state) {
    return {count: state}
}

//mapDispatchToProps传递方法
function mapDispatchToProps(dispatch) {
    return {
        incr: (data) => {
            //执行加法计算
            dispatch(createIncrAction(data));
        },

        decr: (data) => {
            dispatch(createDecrAction(data));
        },

        asyncIncr: (data, time) => {
            dispatch(createIncrAsyncAction(data, time));
        }
    }
}

//创建并暴露一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

