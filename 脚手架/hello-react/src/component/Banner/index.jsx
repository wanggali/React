import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <div>
                你好呀呀呀呀呀呀！！！！
            </div>
        );
    }
}


//withRouter ->+加上路由组件特有的东西 props
export default withRouter(Index);