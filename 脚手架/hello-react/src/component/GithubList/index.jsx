import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class Index extends Component {

    componentDidMount() {
        this.token = PubSub.subscribe('gali', (msg, data) => {
            this.setState({...data})
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    state = {
        githubList: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    render() {
        const {githubList, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? '输入关键字点击搜索' :
                        isLoading ? <h2>loading</h2> : err ? <h2>{err}</h2> :
                            githubList.map((item) => {
                                return <div className="card" key={item.id}>
                                    <a target="_blank">
                                        <img src={item.avatar_url} style={{width: 100}} alt={item.avatar_url}/>
                                    </a>
                                </div>
                            })
                }
            </div>

        )
    }
}

export default Index;