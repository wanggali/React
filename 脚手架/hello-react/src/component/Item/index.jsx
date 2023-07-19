import React, {Component} from 'react';

export default class Item extends Component {
    state = {
        mouse: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
        }
    }

    //有传参 需要写入高阶函数
    handleCheck = (id) => {
        return (event) => {
            this.props.changeTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        return () => {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        return (
            <div>
                <li style={{background: this.state.mouse ? 'blue' : 'white'}} onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type='checkbox' checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" onClick={this.handleDelete(id)}>删除</button>
                    <button className="btn btn-edit">编辑</button>
                </li>
            </div>
        )
    }
}

