import React, {useState} from 'react';
import {Navigate, NavLink, Outlet} from "react-router-dom";
import About from "./About";


const Home = () => {
    const [sum, setSum] = useState(1)
    return (
        <div>
            <h1>Home</h1>
            {sum > 1.5 ? <Navigate to={"/about"}/> : <h4>当前的sum是:{sum}</h4>}
            <button onClick={() => {
                setSum(2 * Math.random())
            }
            }>点我将sum变为2
            </button>
            <br/>

            <NavLink to={"news"}>News</NavLink><br/>
            <NavLink to={"message"}>Message</NavLink>
            {/*指定出现组件位置i*/}
            <Outlet/>
        </div>
    );
};

export default Home;