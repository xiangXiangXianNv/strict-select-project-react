import React from "react"
import ShiWuHeader from './shiwu-header/shiwu-header'
import {Route,Switch,Link,Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import {getNavList} from '../../store/actions'
import ShiWuTab from './shiwu-tab/shiwu-tab'
import './shiwu.styl'
class ShiWu  extends React.Component {
    state = {
        currentIndex:0
    };
    componentWillMount(){
        const {getNavList} = this.props;
        getNavList();
    };
    handleCurrentIndex = (index)=>{
      this.setState({
          currentIndex:index
      });

    };
    render() {
        const {NavList} = this.props;
        const {currentIndex} = this.state;
        if(NavList.length>0){
            return (
                <div className="find">
                    <ShiWuHeader/>
                    <div className="nav-wrap">
                        <div className="nav">
                            <ul className="nav-list">
                                {
                                    NavList.map((item,index)=>{
                                        return (
                                            <li className={index===currentIndex?'nav-item router-link-exact-active':'nav-item'}
                                                key={index}
                                                onClick={()=>{this.handleCurrentIndex(index)}}
                                            >
                                                <Link to={`/shiwu/tab/${index}`}>{item.tabName}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="view">
                        <Switch>
                            <Redirect exact from='/shiwu' to='/shiwu/tab/0'/>
                            <Route path='/shiwu/tab/:id' component={ShiWuTab}/>
                        </Switch>
                    </div>
                </div>
            )
        }else {
            return null
        }
}
}
export default connect(
    state => {
        return {
            NavList : state.NavList
        }
    },
    {getNavList}
)(ShiWu)