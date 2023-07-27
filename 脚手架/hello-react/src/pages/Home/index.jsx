import React, {Component} from 'react';
import {NavLink, Redirect, Route} from "react-router-dom";
import MyNavLink from "../../component/MyNavLink";
import News from "./News";
import Message from "./Message";

class Index extends Component {
    render() {
        return (
            <div>
                <span>我是Home</span>
                <MyNavLink to="/home/news">News</MyNavLink>
                <MyNavLink to="/home/message">Message</MyNavLink>

                <Route path="/home/news" component={News}/>
                <Route path="/home/message" component={Message}/>
                <Redirect to="/home/news"/>
            </div>
        );
    }
}

export default Index;