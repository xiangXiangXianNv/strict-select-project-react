import React, {Component} from 'react'
import './foot-guide.styl'
import {withRouter} from 'react-router-dom'

class FootGuide extends Component {
  handleClick = (path)=>{
      this.props.history.replace(path)
  };
  render() {
    const path = this.props.location.pathname;

    return (
        <footer className="footer_guide border-1px">
        <span className={path==='/home' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/home')}>
          <span className="item_icon">
            <i className="icon icon_home"></i>
          </span>
          <span>首页</span>
        </span>
            <span className={path==='/sort' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/sort')}>
          <span className="item_icon">
            <i className="icon icon_classify"></i>
          </span>
          <span>分类</span>
        </span>
            <span className={path==='/shiwu' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/shiwu')}>
          <span className="item_icon">
            <i className="icon icon_topic"></i>
          </span>
          <span>识物</span>
        </span>
            <span className={path==='/shopcart' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/shopcart')}>
          <span className="item_icon">
            <i className="icon icon_shopcart"></i>
          </span>
          <span>购物车</span>
        </span>
            <span className={path==='/profile' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/profile')}>
          <span className="item_icon">
            <i className="icon icon_login"></i>
          </span>
          <span>我的</span>
        </span>
        </footer>
    )
  }
}
export default withRouter(FootGuide)

