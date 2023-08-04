import React, {Component, lazy, Suspense} from 'react';
import {Link, Redirect, Route, Switch, Routes} from "react-router-dom";


const Home = lazy(() => {
    import('./Home')
})

const About = lazy(() => {
    import('./About')
})

class Index extends Component {
    render() {
        return (
            <div>
                <Link activeClassName="gali" to={"/about"} className="list-group-item">About</Link><br/>
                <Link activeClassName="gali" to={"/home"} className="list-group-item">Home</Link>


                {/*精准匹配和模糊匹配*/}
                {/*路由组件和一般组件
                    1.写法不同:一般组件 <demo/> 路由组件 component={Demo}
                    2.位置不同:component pages
                    3.接收到的props不同 路由组件接受到三个不同的属性history,location,match*/}
                {/*当匹配完成时，直接返回，不轮询其他组件 单一匹配 提升效率
                    exact={true 严格匹配}*/}
                <Suspense>
                    <Routes>
                        <Route exact={true} path={"/about"} component={About}/>
                        <Route path={"/home"} component={Home}/>
                    </Routes>
                </Suspense>
            </div>
        );
    }
}

export default Index;