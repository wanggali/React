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

    changeTodo = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return {...item, done}
            } else {
                return item
            }
        })

        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        //需写window
        if (!window.confirm('确定删除吗？')) {
            return
        }
        const {todos} = this.state;
        const newTodos = todos.filter((item) => {
            return item.id !== id;
        })

        this.setState({todos: newTodos})
    }

    doneAll = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map((item) => {
            return {...item, done}
        })

        this.setState({todos: newTodos})
    }

    clearDoneAll = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((item) => {
            return !item.done;
        })

        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAll={this.doneAll} clearDoneAll={this.clearDoneAll}/>
                </div>
            </div>
        )
    }
}

