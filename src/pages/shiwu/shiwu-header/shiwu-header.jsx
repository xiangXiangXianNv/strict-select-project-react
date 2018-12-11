import React from "react"
import './shiwu-header.styl'
export default class ShiWuHeader  extends React.Component {
    render() {
        return (
            <div className="shiwu-header-wrap">
                <header className="shiwu-header">
                    <div className="header-content">
                        <div className="header-left" onClick={()=>{this.props.history.replace('/home')}}>
                            <i className="iconfont icon-shouye1"/>
                        </div>
                        <div className="header-center">
                            <span className="one">发现</span>
                            <span>甄选家</span>
                        </div>
                        <div className="header-right">
                            <i className="iconfont icon-sousuo1" onClick={()=>{this.props.history.replace('/search')}}/>
                            <i className="iconfont icon-gouwuche1"/>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}