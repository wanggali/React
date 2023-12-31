import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from "./redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*让所有app的后代组件都能收到redux中的state*/}
        <Provider store={Store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// //检测redux状态的改变，发生了改变，则重新渲染App组件
// Store.subscribe(() => {
//     root.render(
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     );
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
