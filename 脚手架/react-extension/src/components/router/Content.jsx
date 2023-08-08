import React from 'react';
import {useParams} from "react-router-dom";

const Content = () => {
    const params = useParams()
    return (
        <div>
            <h1>content</h1>
            <h3>{params.id}</h3>
            <h3>{params.title}</h3>
            <h3>{params.content}</h3>
        </div>
    );
};

export default Content;