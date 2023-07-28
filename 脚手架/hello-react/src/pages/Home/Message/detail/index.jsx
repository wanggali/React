import React, {Component} from 'react';
import qs from "querystring"

const data = [
    {id: '01', content: 'hello world'},
    {id: '02', content: 'hello gali'},
    {id: '03', content: 'hello mikey'}
]

class Index extends Component {
    render() {
        // const {id, title} = this.props.match.params
        //接受search参数
        const {search, state: {id, title}} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))
        //接受state参数

        const findMessage = data.find((item) => {
            return item.id === id
        })
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>message:{findMessage.content}</li>
                </ul>
            </div>
        );
    }
}

export default Index;