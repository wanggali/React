import React, {Component} from 'react';
import Store from "../redux/store";

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
        Store.dispatch({type: 'incr', data: value})
    }

    decr = () => {
        const {value} = this.selectNumber
        // const {count} = this.state
        //
        // this.setState({count: count - parseInt(value)})
        Store.dispatch({type: 'decr', data: value})
    }

    incrIfOdd = () => {
        const {value} = this.selectNumber
        // const {count} = this.state

        if (Store.getState() % 2 === 0) {
            return
        }

        Store.dispatch({type: 'incr', data: value})
    }

    incrAsync = () => {
        const {value} = this.selectNumber
        // const {count} = this.state


        setTimeout(() => {
            Store.dispatch({type: 'incr', data: value})
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{Store.getState()}</h1>
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