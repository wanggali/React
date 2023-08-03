import React, {Component} from 'react';
import {connect} from "react-redux"
import {createAddPersonAction} from "../redux/actions/person";


class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value

        const person = {
            id: 1 + parseInt(age) + Math.random(),
            name,
            age
        }

        this.props.addPerson(person)

        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h1>上方组件求和为{this.props.count}</h1>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>

                <ol>
                    {this.props.person.map(person => {
                        return <li key={person.id}>名字:{person.name}---年龄:{person.age}</li>
                    })}
                </ol>
            </div>
        );
    }
}

export default connect(
    state => ({person: state.person, count: state.count}),
    {
        addPerson: createAddPersonAction
    }
)(Person);