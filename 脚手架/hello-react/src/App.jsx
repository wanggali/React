import './App.css';
import React from 'react'
import Footer from "./component/Footer";
import Header from "./component/Header";
import List from "./component/List";

export default class App extends React.Component {
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: false
            },
            {
                id: '002',
                name: '睡觉',
                done: false
            },
            {
                id: '003',
                name: '打豆豆',
                done: true
            }
        ]
    }

    /**
     * 用于添加一个todo
     *  子传父
     * @param todoObj
     */
    addTodo = (todoObj) => {
        this.setState({todos: [todoObj, ...this.state.todos]})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

