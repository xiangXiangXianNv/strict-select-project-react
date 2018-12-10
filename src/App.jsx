import React from "react"
import FooterGuide from './components/foot-guide/foot-guide'
import {withRouter,Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/home/home'
import ShopCart from './pages/shop-cart/shop-cart'
import ShiWu from './pages/shiwu/shiwu'
import Sort from './pages/sort/sort'
import Profile from './pages/profile/profile'
import NotFound from './pages/not-found/not-found'
class App extends React.Component {
    render() {
        const path = ['/home','/sort','/shiwu','/shopcart'];
        const currentP = this.props.location.pathname;
        const isShowFoot = path.indexOf(currentP)>=0;
        return (
            <div>
                <Switch>
                    {/*精确匹配'/'如果是'/'就跳转到home*/}
                    <Redirect exact from='/' to='/home'/>
                    <Route path='/home' component={Home}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/shiwu' component={ShiWu}/>
                    <Route path='/shopcart' component={ShopCart}/>
                    <Route path='/profile' component={Profile}/>
                    {/*如果上面的都没有匹配到就显示NotFound组件*/}
                    <Route component={NotFound}/>
                </Switch>
                {isShowFoot? <FooterGuide/>:null}
            </div>
        )
    }
}
export default withRouter(App)