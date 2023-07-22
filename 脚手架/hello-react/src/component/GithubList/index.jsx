import React, {Component} from 'react';

class Index extends Component {

    componentDidMount() {

    }

    render() {
        const {githubList, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? '输入关键字点击搜索' :
                        isLoading ? <h2>loading</h2> : err ? <h2>{err}</h2> :
                            githubList.map((item) => {
                                return <div className="card">
                                    <a target="_blank">
                                        <img src={item} style={{width: 100}}/>
                                    </a>
                                </div>
                            })
                }
            </div>

        )
    }
}

export default Index;