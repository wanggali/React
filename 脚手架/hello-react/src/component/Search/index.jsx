import React, {Component} from 'react';

import axios from 'axios'


class Index extends Component {

    searchUsers = () => {
        const {UpdateAppState} = this.props
        //连续解构赋值
        const {keyWordEl: {value}} = this
        console.log(value)

        //发送请求前 更新app状态
        UpdateAppState({isFirst: false, isLoading: true})

        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(
                (res) => {
                    UpdateAppState({githubList: res.data.item, isLoading: false})
                },
                (error) => {
                    UpdateAppState({err: error.message})

                }
            )

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