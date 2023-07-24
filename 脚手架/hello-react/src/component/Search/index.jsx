import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'


class Index extends Component {

    searchUsers = async () => {
        //const {UpdateAppState} = this.props
        //连续解构赋值
        const {keyWordEl: {value}} = this
        console.log(value)

        //发送请求前 更新app状态
        const props = {isFirst: false, isLoading: true}
        //UpdateAppState({isFirst: false, isLoading: true})
        PubSub.publish('gali', {...props})
        // axios.get(`https://api.github.com/search/users?q=${value}`)
        //     .then(
        //         (res) => {
        //             PubSub.publish('gali', {githubList: res.data.items, isLoading: false})
        //             //UpdateAppState({githubList: res.data.items, isLoading: false})
        //         },
        //         (error) => {
        //             //UpdateAppState({err: error.message})
        //             PubSub.publish('gali', {err: error.message})
        //         }
        //     )

        //fecth请求
        // fetch(`https://api.github.com/search/users?q=${value}`).then(
        //     (res) => {
        //         //PubSub.publish('gali', {githubList: res.data.items, isLoading: false})
        //         return res.json()
        //     }
        // ).then(
        //     (res) => {
        //         PubSub.publish('gali', {githubList: res.items, isLoading: false})
        //     }
        // ).catch(
        //     (err) => {
        //         console.log(err)
        //         PubSub.publish('gali', {err: err})
        //     }
        // )

        try {
            const res = await fetch(`https://api.github.com/search/users?q=${value}`)
            const data = await res.json()
            PubSub.publish('gali', {githubList: data.items, isLoading: false})
        } catch (e) {
            PubSub.publish('gali', {err: e})
        }

    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordEl = c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button
                            onClick={this.searchUsers}>Search
                        </button>
                    </div>
                </section>
            </div>
        )
            ;
    }
}

export default Index;