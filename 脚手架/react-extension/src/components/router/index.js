import {Navigate} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import News from "./News";
import Message from "./Message";
import Content from "./Content";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>,
                children: [
                    {
                        // path: 'content/:id/:title/:content',
                        path: 'content',
                        element: <Content/>,
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={"/about"}/>
    },
]