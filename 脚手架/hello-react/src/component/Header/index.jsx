import React, {Component} from 'react';
import * as PropTypes from "prop-types";

export default class Header extends Component {

    //对接收的props进行类型必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handlerKeyUp = (event) => {
        const {addTodo} = this.props
        if (event.keyCode !== 13) {
            return
        }

        if (event.target.value.trim() === '') {
            alert('输入不能为空')
            return;
        }
        const todo = {
            id: Date.now(),
            name: event.target.value,
            done: false
        }
        addTodo(todo)
    }

    render() {
        return (
            <div className="todo-herder">
                <input type="text" onKeyUp={this.handlerKeyUp} placeholder="请输入任务名称，按回车键确认"/>
            </div>
        );
    }
}

