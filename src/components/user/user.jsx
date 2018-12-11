import React from "react"
import {connect} from 'react-redux'
import UserHeader from '../../pages/shiwu/shiwu-header/shiwu-header'
class User extends React.Component {
    logOut = ()=>{

    };
    render() {
        const {user} = this.props.user;
        return (
            <div className="user">
                <UserHeader>
                    <div className="header-center">
                        <span>{user.name}</span>
                    </div>
                </UserHeader>
                <div className="user-content">
                    <button className="btn" onClick={()=>{this.logOut()}}>退出登录</button>
                </div>
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            user:state.User
        }
    },
    {}
)(User)