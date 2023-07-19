import React, {Component} from 'react';

export default class Footer extends Component {
    doneAll = (event) => {
        this.props.checkAll(event.target.checked)
    }

    handelClearAll = () => {
        this.props.clearDoneAll()
    }

    render() {
        const {todos} = this.props
        const total = todos.length
        const doneCount = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0)
        }, 0)
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.doneAll}/>
                    </label>
                    <span><span>已完成{doneCount}</span>/全部{total}</span>
                    <button className="btn btn-danger" onClick={this.handelClearAll}> 清除已完成任务</button>
                </div>
            </div>
        );
    }
}

