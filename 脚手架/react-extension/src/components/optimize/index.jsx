import React, {useState} from 'react';

export default () => {
    const [carName, setCarName] = useState('宝马五系')
    return (
        <div>
            <h1>Fu</h1>
            <h3>车名字为:{carName}</h3>
            <button onClick={() => {
                setCarName('迈巴赫')
            }}>点我换车
            </button>
            <Child carName={carName}/>
        </div>
    );
};


export const Child = (props) => {
    return (
        <div>
            <h1>Zi</h1>
            <h3>接受到的车名字为:{props.carName}</h3>
        </div>
    );
};

