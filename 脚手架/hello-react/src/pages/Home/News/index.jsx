import React, {Component} from 'react';

class Index extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/home/message')
        }, 2000)
    }

    render() {
        return (
            <div>
                <ul>
                    <li>111</li>
                    <li>222</li>
                    <li>333</li>
                </ul>
            </div>
        );
    }
}

export default Index;