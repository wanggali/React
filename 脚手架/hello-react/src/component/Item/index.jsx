import React, {Component} from 'react';

export default class Item extends Component {
    render() {
        return (
            <div>
                <li>

                    <button className="btn btn-danger">删除</button>
                    <button className="btn btn-edit">编辑</button>
                </li>
            </div>
            )
    }
    }

