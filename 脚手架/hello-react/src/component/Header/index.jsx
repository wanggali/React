import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="todo-herder">
                <input type="text" placeholder="请输入任务名称，按回车键确认"/>
            </div>
        );
    }
}

