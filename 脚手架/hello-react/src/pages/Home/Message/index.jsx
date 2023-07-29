import React, {Component} from 'react';
import MyNavLink from "../../../component/MyNavLink";
import {NavLink, Route} from "react-router-dom";
import Detail from "./detail";

class Index extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'}
        ]
    }


    replace = (id, title) => {
        // params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        //search参数
        this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        //state
        this.props.history.replace(`/home/message/detail`, {id, title})
    }

    push = (id, title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`)


        this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        this.props.history.push(`/home/message/detail`, {id, title})

    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(item => {
                            return (
                                <li key={item.id}>
                                    {/*携带params参数*/}
                                    {/*<NavLink to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</NavLink>*/}
                                    {/*    携带search参数*/}
                                    <NavLink
                                        to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</NavLink>
                                    {/*    携带state参数*/}
                                    <NavLink
                                        to={{pathname: '/home/message/detail', state: {...item}}}>{item.title}</NavLink>

                                    <button onClick={() => this.push(item.id, item.title)}>push查看</button>
                                    <button onClick={() => this.replace(item.id, item.title)}>replace查看</button>
                                </li>

                            )
                        })
                    }
                </ul>
                {/*声明接受params参数*/}
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}></Route>*/}
                {/*search参数 state参数*/}
                <Route path="/home/message/detail/" component={Detail}></Route>

                <hr/>

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        );
    }
}

export default Index;