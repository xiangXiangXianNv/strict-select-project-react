import React from "react"
import {connect} from 'react-redux'
import './home-header.styl'
import PropTypes from "prop-types"
import BScroll from "better-scroll"
class HomeHeader extends React.Component {
    static propTypes = {
        cateList : PropTypes.array.isRequired
    };
    state = {
        currentIndex : 0,  //标识当前index
        isShowPullDown : false,
    };
    handleIndex(index){
        this.setState({
            currentIndex:index
        })
    };
    handlePullDown(){
        const {isShowPullDown} = this.state;
        this.setState({
            isShowPullDown : !isShowPullDown ,
        })
    };
    componentDidMount(){
        //计算滑动区域包含块的宽度
        const tab = this.refs.tab;
        const {cateList} = this.props;
        const tabItemW = 1.2;
        const space = 0.1;
        const count = cateList.length;
        const width = (tabItemW + space) * count - space;
        tab.style.width = width + "rem";
        new BScroll('.wrap', {
            click:true,
            scrollX:true
        });
    };
    render() {
        const {cateList} = this.props;
        const {currentIndex,isShowPullDown} = this.state;
        return (
            <header className="header">
                <div className="header-top">
                    <span className="logo"></span>
                    <a className="header-input">
                        <i className="iconfont icon-sousuo icon"></i>
                        <span className="header-input-text">搜索商品,共6666件商品</span>
                    </a>
                    <a className="header-login">
                        <span className="header-login-text">登录</span>
                    </a>
                </div>
                <div className="header-bottom">
                    <div className="header-nav-wrap">
                        <div className="wrap">
                            <div className="tab" ref="tab">
                                {
                                    cateList.map((cate,index)=> {
                                        return (
                                            <div className="tab-item" key={index} onClick={()=>{this.handleIndex(index)}}>
                                            <span
                                                className={currentIndex===index?'active text':'text'}>
                                                {cate.name}
                                            </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="all" style={{display:isShowPullDown?'block':'none'}}>
                            <div className="text">全部频道</div>
                        </div>
                        <div className={isShowPullDown?'pullDown up':'pullDown down'} onClick={()=>{this.handlePullDown()}}>
                            <div className="icon">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="isShow" style={{display:isShowPullDown?'block':'none'}}>
                    <div className="isShow-content">
                        {
                            cateList.map((cate,index)=>{
                                return (
                                    <div
                                         className={currentIndex===index?'active text':'text'}
                                         key={index}>
                                        {cate.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mask" style={{display:isShowPullDown?'block':'none'}} />
            </header>
    )
    }
}
export default connect(

)(HomeHeader)