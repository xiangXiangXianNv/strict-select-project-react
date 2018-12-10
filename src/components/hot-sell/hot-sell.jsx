import React from "react"
import './hot-sell.styl'
import PropTypes from 'prop-types'
export default class HotSell  extends React.Component {
    static propTypes = {
        categorys : PropTypes.object.isRequired
    };
    render() {
        const {categorys} = this.props;
        let i=2;
        const arr = [];
        categorys.categoryList.forEach((ele,index)=>{
            if(index>1){
                arr.push(ele)
            }
        });
        return (
            <div className="hot-sell">
                <div className="hot-header">
                    <span className="title">{categorys.title}</span>
                </div>
                <div className="hot-content">
                    <div className="content-top">
                        <div className="top-left">
                            <div className="left">
                                <span className="text">{categorys.categoryList[0].categoryName}</span>
                                <span className="line"/>
                            </div>
                            <div className="right">
                                <img src={categorys.categoryList[0].picUrl} alt="" />
                            </div>
                        </div>
                        <div className="top-right">
                            <div className="left">
                                <span className="text">{categorys.categoryList[1].categoryName}</span>
                                <span className="line"/>
                            </div>
                            <div className="right">
                                <img src={categorys.categoryList[1].picUrl} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content-down" >
                        {
                            arr.map((item,index)=>{
                               return (
                                   <div className="down-item" key={index}>
                                       <span className="item-text">{item.categoryName}</span>
                                       <img src={item.picUrl} alt="" />
                                   </div>
                               )
                            })
                        }
                    </div>
                </div>
         </div>
        )
    }
}