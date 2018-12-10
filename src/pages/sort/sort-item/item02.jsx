import React from "react"
import PropTypes from 'prop-types'
import './item02.styl'
export default class  extends React.Component {
    static propTypes = {
        currentIndex :PropTypes.number.isRequired,
        sortData : PropTypes.array.isRequired
    };
    render() {
        const {currentIndex,sortData} = this.props;
        if(sortData[currentIndex]){
            if(sortData[currentIndex].type===0){
                return (
                    <div className="sort-right-2">
                        <div className="top-img" style={{backgroundImage:`url('${sortData[currentIndex].wapBannerUrl } ')`}}>
                        </div>
                        {
                            sortData[currentIndex].subCateList.map((subcate,index)=>{
                                return (
                                    <div className="sort-list" key={index}>
                                        <div className="name1">{subcate.name}</div>
                                        <ul className="list">
                                            {
                                                subcate.categoryList.map((cate,index)=>{
                                                    return (
                                                        <li className="list-item" key={index}>
                                                            <div className="img-wrap">
                                                                <img src={cate.wapBannerUrl} />
                                                            </div>
                                                            <div className="name">{cate.name}</div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }else {
                return null
            }
        }else {
            return null
        }

    }
}