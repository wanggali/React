import React from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const Content = () => {
    const params = useParams()
    const [search, setSearch] = useSearchParams()
    const stateParams = useLocation()
    console.log(stateParams)
    return (
        <div>
            <h1>content</h1>
            {/*<h3>{search.get('id')}</h3>*/}
            {/*<h3>{search.get('title')}</h3>*/}
            {/*<h3>{search.get('content')}</h3>*/}

            <h3>{stateParams.state.id}</h3>
            <h3>{stateParams.state.title}</h3>
            <h3>{stateParams.state.content}</h3>

        </div>
    );
};

export default Content;