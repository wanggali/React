import {connect} from "react-redux"
import {DECR, INCR} from "../redux/constant";
import {createDecrAction, createIncrAction, createIncrAsyncAction} from "../redux/actions/count";
import {Component} from "react";


//mapStateToProps传递状态
const mapStateToProps = state => ({count: state})


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

class Count extends Component {
    // state = {
    //     count: 0
    // }

    // componentDidMount() {
    //     Store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    incr = () => {
        const {value} = this.selectNumber
        // const {count} = this.state

        // this.setState({count: count + parseInt(value)})
        //Store.dispatch(createIncrAction(value))

        this.props.incr(value)
    }

    decr = () => {
        const {value} = this.selectNumber
        // const {count} = this.state
        //
        // this.setState({count: count - parseInt(value)})
        //Store.dispatch(createDecrAction(value))

        this.props.decr(value)

    }

    incrIfOdd = () => {
        const {value} = this.selectNumber
        // const {count} = this.state

        // if (Store.getState() % 2 === 0) {
        //     return
        // }

        if (this.props.count % 2 === 0) {
            return
        }

        //Store.dispatch(createIncrAction(value))

        this.props.incr(value)

    }

    incrAsync = () => {
        const {value} = this.selectNumber
        // const {count} = this.state


        // setTimeout(() => {
        //Store.dispatch(createIncrAsyncAction(value, 500))
        // }, 500)

        this.props.asyncIncr(value, 500)
    }

    render() {
        return (
            <div>
                {/*<h1>当前求和为:{Store.getState()}</h1>*/}
                <h1>下方组件用户列表长度为{this.props.person.length}</h1>
                <h1>当前求和为:{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button onClick={this.incr}>+</button>
                <button onClick={this.decr}>-</button>
                <button onClick={this.incrIfOdd}>当前求和为奇数+</button>
                <button onClick={this.incrAsync}>异步+</button>

            </div>
        )
            ;
    }
}

//创建并暴露一个容器组件
export default connect(
    state => ({count: state.count, person: state.person}),
    //精简版写法mapDispatchToProps
    {
        incr: createIncrAction,
        decr: createDecrAction,
        asyncIncr: createIncrAsyncAction
    }
)
(Count)

