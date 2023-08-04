import React, {Component} from 'react';

class Index extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={() => {
                    // const count = this.state.count
                    // //第一种写法 对象式 语法糖写法
                    // this.setState({count: count + 1}, () => {
                    //     console.log(this.state.count)
                    // })

                    //第二种写法 函数式
                    this.setState((state, props) => {
                        return {count: state.count + 1}
                    })
                }}>点我+1
                </button>
            </div>
        );
    }
}

export default Index;