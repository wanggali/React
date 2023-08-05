import React, {createContext, useState} from 'react';
import B from "./B";

const Index = () => {
        const [username,setUserName] = useState('gali')
        const usernameContext = createContext()
        return (
            <div>
                <h1>我是祖组件，我的名字为:{username}</h1>
                <usernameContext.Provider value={username}>
                    <B/>
                </usernameContext.Provider>
            </div>
        );
    }
;

export default Index;