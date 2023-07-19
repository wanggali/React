import React, {Component} from 'react';
import Item from "../Item";
import * as PropTypes from "prop-types";

export default class List extends Component {

    //对接收的props进行类型必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, changeTodo, deleteTodo} = this.props
        return (
            <div className="todo-main">
                {todos.map(item => {
                    return <Item key={item.id} {...item} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
                })}
            </div>
        );
    }
}

