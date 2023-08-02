import React, {Component} from 'react';
import {connect} from "react-redux"


class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value

        const person = {
            id: 1,
            name,
            age
        }

    }

    render() {
        return (
            <div>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>

                <ul>
                    <li>名字：1，年龄：20</li>
                    <li>名字：2，年龄：30</li>
                    <li>名字：3，年龄：10</li>
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({person: state}),
    {}
)(Person);