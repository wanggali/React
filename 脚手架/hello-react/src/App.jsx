import './App.css';
import React from 'react'
import Footer from "./component/Footer";
import Header from "./component/Header";
import List from "./component/List";
import axios from "axios"
import Search from "./component/Search";
import GithubList from "./component/GithubList";
import {BrowserRouter, Link, NavLink, Route, Router} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Banner from "./component/Banner";

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
        ],
        githubList: [],
        isFirst: true,
        isLoading: false,
        err: ''
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

    queryStudent = () => {
        axios.get('getInit').then((response) => {
            console.log(response)
        }, (err) => {
        })
    }


    UpdateAppState = (stateObj) => {
        this.setState({...stateObj})
    }


    render() {
        const {todos} = this.state
        return (
            // <div className="todo-container">
            //     <div className="todo-wrap">
            //         <Header addTodo={this.addTodo}/>
            //         <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
            //         <Footer todos={todos} checkAll={this.doneAll} clearDoneAll={this.clearDoneAll}/>
            //     </div>
            // </div>

            // <div>
            //     <Search/>
            //     <GithubList/>
            // </div>

            // BrowserRouter-路由器
            <>
                {/*<a href={"/about"} className="list-group-item">About</a><br/>*/}
                {/*<a href={"/home"} className="list-group-item">Home</a>*/}

                <NavLink activeClassName="gali" to={"/about"} className="list-group-item">About</NavLink><br/>
                <NavLink activeClassName="gali" to={"/home"} className="list-group-item">Home</NavLink>

                <div>
                    {/*路由组件和一般组件
                    1.写法不同:一般组件 <demo/> 路由组件 component={Demo}
                    2.位置不同:component pages
                    3.接收到的props不同 路由组件接受到三个不同的属性history,location,match*/}
                    <Banner/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/home"} component={Home}/>
                </div>
            </>
        )
    }
}

