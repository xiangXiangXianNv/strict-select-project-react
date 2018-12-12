import React from "react"
import {connect} from 'react-redux'
import './shiwu-tab.styl'
import {getShiWuData,resetShiWuDataA,goSaveId} from '../../../store/actions'
class ShiWuTab extends React.Component {
    state = {
      page : 1,
      id : 4
    };
    componentWillMount(){
        const index = this.props.match.params.id;
        this.props.goSaveId(index);
        const id = this.props.NavList[index].tabId;
        const url = '/topic/v1/find/recAuto.json';
        const url2 = '/topic/v1/find/getTabData.json';
        const page = this.state.page;
        const {getShiWuData} = this.props;
        if(index==="0"){
            getShiWuData({index,url,page})
        }else if(index==="1"){
            getShiWuData({index: id,url:url2,page})
        }
        console.log(this.dispatch)
    };
    content =(rec) =>{
        const {ShiWuData} = this.props;
            if(this.props.match.params.id==='0'){
                return rec.topics;
            }else if(this.props.match.params.id==='1') {
                return ShiWuData.result;
            }
    };
    componentWillReceiveProps(props){
        const id = this.props.match.params.id;
        if(id!==props.match.params.id){
           this.props.resetShiWuDataA();
           const index = props.match.params.id;
           this.props.goSaveId(index);
           const page = this.state.page;
           const {getShiWuData} = this.props;
           const url = '/topic/v1/find/recAuto.json';
           const url2 = '/topic/v1/find/getTabData.json';
           const id =this.props.NavList[index].tabId;
           if(index==="1") {
               getShiWuData({index: id, url: url2, page})
           }else if(index==='0'){
               getShiWuData({index, url, page})
           }
        }

    };
    render() {
        const {ShiWuData} = this.props;
        if(ShiWuData.result){
            const arr = ShiWuData.result;
            return (
                <div className="recommend">
                    {
                     arr?arr.map((rec,index)=>{
                         return (
                             <div className="recommend-item"
                                  key={index}
                             >
                                 {
                                    this.content(rec)? this.content(rec).map((topic,index)=>{
                                        return (
                                            <div className="view-wrap" key={index}>
                                                {
                                                    topic.type===1||topic.type===2?
                                                        <div className="item-1">
                                                            <div className="item-info">
                                                                <div className="name">
                                                            <span className="span-img">
                                                              <img src={topic.avatar} alt="" />
                                                            </span>
                                                                    <span className="span-text">{topic.nickname}</span>
                                                                </div>
                                                                <div className="title">{topic.title}</div>
                                                                <div className="desc">{topic.subTitle}</div>
                                                                <div className="read-count">
                                                                    <i className="iconfont icon-faxian1"/>
                                                                    <span>{Math.floor(topic.readCount/1000)}k人看过</span>
                                                                </div>
                                                            </div>
                                                            <div className="item-pic">
                                                                <img src={topic.picUrl} alt="" />
                                                            </div>
                                                        </div>:
                                                        <div className="item-2">
                                                            <div className="name">
                                                            <span className="span-img">
                                                              <img src={topic.avatar} alt=""  />
                                                            </span>
                                                                <span className="span-text">{topic.nickname}</span>
                                                            </div>
                                                            <div className="title">{topic.title}</div>
                                                            <div className="img">
                                                                <img src={topic.picUrl} alt="" />
                                                            </div>
                                                            <div className="read-count">
                                                                <i className="iconfont icon-faxian1"/>
                                                                <span>{Math.floor(topic.readCount/1000)}k人看过</span>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                        )
                                    }):null
                                 }
                             </div>
                         )
                     }):null
                }
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
            NavList : state.NavList,
            ShiWuData : state.ShiWuData,
        }
    },
    {getShiWuData,resetShiWuDataA,goSaveId}
)(ShiWuTab)