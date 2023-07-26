import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            // 标签体内容在props中的children中
            <div>
                <NavLink activeClassName="gali"
                         className="list-group-item" {...this.props}/>
            </div>
        );
    }
}

export default Index;