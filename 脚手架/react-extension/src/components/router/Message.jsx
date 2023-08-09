import React, {useState} from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

const Message = () => {
    const [message] = useState([
        {id: '001', title: '消息1', content: '努力呀1'},
        {id: '002', title: '消息2', content: '努力呀2'},
        {id: '003', title: '消息3', content: '努力呀3'},
        {id: '004', title: '消息4', content: '努力呀4'},
    ])

    const navigate = useNavigate()
    const showDetail = (item) => {
        navigate('content', {
            replace: false,
            state: {
                id: item.id,
                title: item.title,
                content: item.content
            }
        })
    }

    return (
        <div>
            <h1>Message</h1>
            <ul>
                {message.map(item => {
                    return <li key={item.id}>
                        <button onClick={() => showDetail(item)}>点我啊</button>
                        {/*<NavLink to={`content/${item.id}/${item.title}/${item.content}`}>{item.title}</NavLink>*/}
                        {/*<NavLink*/}
                        {/*    to={`content?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</NavLink>*/}
                        <NavLink to={`content`}
                                 state={{id: item.id, title: item.title, content: item.content}}> {item.title}</NavLink>
                    </li>
                })}
            </ul>

            <Outlet/>
        </div>
    );
};

export default Message;