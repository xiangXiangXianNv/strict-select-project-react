import React from "react"
import './shiwu-header.styl'
import {withRouter} from 'react-router-dom'
class ShiWuHeader  extends React.Component {
    render() {
        return (
            <div className="shiwu-header-wrap">
                <header className="shiwu-header">
                    <div className="header-content">
                        <div className="header-left" onClick={()=>{this.props.history.replace('/home')}}>
                            <i className="iconfont icon-shouye1"/>
                        </div>
                        {
                            this.props.children
                        }
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
export default withRouter(ShiWuHeader)
