import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>请求的地址不存在!</h2>
        <button onClick={() => this.props.history.replace('/home')}>回到首页</button>
      </div>
    )
  }
}