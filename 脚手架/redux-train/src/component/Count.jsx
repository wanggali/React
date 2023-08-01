import React, {Component} from 'react';
import Store from "../redux/store";
import {createDecrAction, createIncrAction, createIncrAsyncAction} from "../redux/count_action";

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

        this.props.asyncIncr(value,500)
    }

    render() {
        return (
            <div>
                {/*<h1>当前求和为:{Store.getState()}</h1>*/}
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

export default Count;