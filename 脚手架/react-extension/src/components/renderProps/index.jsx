import React from 'react';

const Index = () => {
    return (
        <div>
            <h3>我是fu</h3>
            <Zi render={() => <Sun/>}/>
        </div>
    );
};

export default Index;


const Zi = (props) => {
    return (
        <div>
            <h3>我是zi</h3>
            {/*插槽技术*/}
            {props.render()}
        </div>
    );
}


const Sun = () => {
    return (
        <div>
            <h3>我是Sun</h3>

        </div>
    );
}