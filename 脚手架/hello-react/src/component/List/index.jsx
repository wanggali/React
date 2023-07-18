import React, {Component} from 'react';
import Item from "../Item";

export default class List extends Component {
    render() {
        const {todos} = this.props
        console.log(todos)
        return (
            <div className="todo-main">
                {todos.map(item => {
                    return <Item key={item.id} {...item}/>
                })}
            </div>
        );
    }
}

