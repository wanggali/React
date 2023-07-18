import React, {Component} from 'react';

export default class Item extends Component {
    render() {
        const {id, name, done} = this.props
        return (
            <div>
                <li>
                    <label>
                        <input type='checkbox' defaultChecked={done}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger">删除</button>
                    <button className="btn btn-edit">编辑</button>
                </li>
            </div>
        )
    }
}

