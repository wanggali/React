import React, {useEffect, useState, useRef} from 'react';

const Index = () => {
    //第一次指定的参数会在内部做缓存
    const [count, setCount] = useState(0)
    const myRef = useRef()

    //类似于类式组件的onDidMount
    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])


    return (
        <div>
            <input ref={myRef}/>
            <button onClick={() => {
                alert(myRef.current.value)
            }}>点我提示数据
            </button>
            <h1>当前求和为:{count}</h1>
            <button onClick={() => {
                //setCount(count + 1)
                setCount(count => count + 1)
            }}>点我+1
            </button>
            <br/>
            <button onClick={() => {
                //ReactDOM.unmountComponentAtNode(document.getElementById('root'))
            }}>卸载组件
            </button>
        </div>
    );
};

export default Index;