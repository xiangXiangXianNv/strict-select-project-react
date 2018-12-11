import React from "react"
import './shop-cart.styl'
export default class ShopCart extends React.Component {
    render() {
        return (
            <div className="shop-cart">
                <div className="shop-header-wrap">
                    <div className="shop-header">
                        <span className="cart">购物车</span>
                        <span className="getCoupon">领券</span>
                    </div>
                </div>
                <div className="nav-wrap">
                    <ul className="nav">
                        <li className="item">
                            <i className="iconfont"/>
                            <span className="text">30天无忧退货</span>
                        </li>
                        <li className="item">
                            <i className="iconfont"/>
                            <span className="text">48小时快速退款</span>
                        </li>
                        <li className="item">
                            <i className="iconfont"/>
                            <span className="text">满88元免邮费</span>
                        </li>
                    </ul>
                </div>
                <div className="cart-content">
                    <div className="img-wrap">
                        <div className="img"/>
                    </div>
                    <div className="login-wrap">
                        <div className="add">去添加点什么吧</div>
                        <div className="login">登录</div>
                    </div>
                </div>
            </div>
        )
    }
}