import React from "react"
import {connect} from 'react-redux'
import HomeHeader from '../../components/home-header/home-header'
import HomeSlide from '../../components/home-slide/home-slide'
import HomeSort from '../../components/home-sort/home-sort'
import NewPeople from '../../components/new-people/new-people'
import HotSell from '../../components/hot-sell/hot-sell'
import {getHomeData} from "../../store/actions";
import './home.styl'
class Home extends React.Component {
    state = {
        toUpIsShow : false,
    };
    componentWillMount(){
        const {getHomeData} = this.props;
        getHomeData();
    };
    componentDidMount(){
        window.addEventListener("scroll", ()=>{
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>500){
                this.setState({
                    toUpIsShow : true ,
                })
            }else{
                this.setState({
                    toUpIsShow : false ,
                })
            }
        });
    };
    toUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    };
    render() {
        const {toUpIsShow} = this.state;
        const {homeData} = this.props;
        const {focusList,cateList,policyDescList,indexActivityModule,categoryHotSellModule} = homeData;
        let sortList;
        if(homeData.kingKongModule){
            sortList = homeData.kingKongModule.kingKongList;
        }
        if(cateList){
            return (
                <div className="home">
                    <HomeHeader cateList={cateList} />  {/*首页头部组件*/}
                    <HomeSlide  slideList={focusList}/> {/*首页轮播图组件*/}
                    <div className="home-content">
                        <div className="service">
                            <ul className="service-wrap">
                                {
                                    policyDescList.map((policy,index)=>{
                                        return (
                                            <li className="service-item" key={index}>
                                                <a href="#">
                                                    <i className="iconfont icon icon-kongxinduigou"/>
                                                    <span className="text">{policy.desc}</span>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <HomeSort sortList={sortList}/> {/*<!--首页分类组件-->*/}
                        <div className="rob">
                            <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt=""/>
                        </div>
                        <div className="place">
                            <div className="img-left">
                                <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt=""/>
                            </div>
                            <div className="img-right">
                                <div className="right-top">
                                    <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" alt=""/>
                                </div>
                                <div className="right-bottom">
                                    <img src="https://yanxuan.nosdn.127.net/15439064549673720.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="preference">
                            <div className="img-left">
                                <img src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt=""/>
                            </div>
                            <div className="img-right">
                                <img src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt=""/>
                            </div>
                            <div className="img-bottom">
                                <img src="https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1404_750_15" alt="" />
                            </div>
                        </div>
                        <NewPeople indexActivityModule={indexActivityModule}/> {/*<!--首页新人专享礼组件-->*/}
                        <div className="brand">
                            <div className="brand-header">
                                <span className="title">品牌制造商直供</span>
                                <div className="more">
                                    <span className="more-text">更多</span>
                                    <span className="icon-jiantouarrow487 iconfont"/>
                                </div>
                            </div>
                            <ul className="brand-content">
                                <li className="content-item one">
                                    <div className="title">海外制造商</div>
                                    <div className="price">9.9元起</div>
                                </li>
                                <li className="content-item two">
                                    <div className="title">海外制造商</div>
                                    <div className="price">9.9元起</div>
                                </li>
                                <li className="content-item three">
                                    <div className="title">海外制造商</div>
                                    <div className="price">9.9元起</div>
                                </li>
                                <li className="content-item four">
                                    <div className="title">海外制造商</div>
                                    <div className="price">9.9元起</div>
                                </li>
                            </ul>
                        </div>
                        <HotSell categorys={categoryHotSellModule}/>  {/*<!--首页热销组件-->*/}
                        <div className="recommend">
                            <div className="recommend-header">
                                <span className="title">人气推荐</span>
                                <div className="more">
                                    <span className="more-text">更多</span>
                                    <span className="icon-jiantouarrow487 iconfont"/>
                                </div>
                            </div>
                            <div className="recommend-content">
                                <div className="content-top">
                                    <div className="top-left">
                                        <img src="https://yanxuan.nosdn.127.net/06e5818658707bc182acabe92cae3d34.png?imageView&quality=65&thumbnail=280x280" alt="" />
                                    </div>
                                    <div className="top-right">
                                        <span className="ticket">券</span>
                                        <div className="title">30包 谷风一木软抽面巾纸囤货装</div>
                                        <div className="desc">环保取材，安全天然更亲肤</div>
                                        <div className="price">$75</div>
                                    </div>
                                </div>
                                <div className="content-down">
                                    <div className="each-recommend">
                                        <div className="item">
                                            <div className="item-img">
                                                <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=330x330" alt="" />
                                            </div>
                                            <span className="item-title">大牌特调 严选椒香鲜辣小龙...</span>
                                            <span className="item-price">$29.9</span>
                                            <span className="item-desc">开天辟地价</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src="https://yanxuan.nosdn.127.net/9ecf58a52dc6acf31b0c920cc0b3ff36.png?imageView&quality=65&thumbnail=330x330" alt="" />
                                            </div>
                                            <span className="item-title">保温电水壶</span>
                                            <span className="item-price">$29.9</span>
                                            <span className="item-desc">限时购</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-img">
                                                <img src="https://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=330x330" alt="" />
                                            </div>
                                            <span className="item-title">智能马桶盖</span>
                                            <span className="item-price">$29.9</span>
                                            <span className="item-desc">爆品</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <i className="toUp" style={{display:toUpIsShow?'block':'none'}} onClick={()=>{this.toUp()}} />
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}
export default connect(
    state => {
        return {
            homeData:state.homeData
        }
    },
    {getHomeData}
)(Home)