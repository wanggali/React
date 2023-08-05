import React, {useContext} from 'react';

const C = index => {
    const context = useContext(index)
    return (
        <div>
            <h1>我是C组件，我的名字为:{context}
            </h1>
        </div>
    );
};

export default C;