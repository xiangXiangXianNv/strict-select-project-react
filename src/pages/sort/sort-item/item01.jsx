import React from "react"
import PropTypes from 'prop-types'
import './item01.styl'
export default class  extends React.Component {
    static propTypes = {
        currentIndex : PropTypes.number.isRequired,
        sortData : PropTypes.array.isRequired
    };
    render() {
        const {currentIndex,sortData} = this.props;
        if(sortData[currentIndex]){
            if(sortData[currentIndex].type===1){
                return (
                    <div className="sort-right">
                        <div className="top-img" style={{backgroundImage:`url('${sortData[currentIndex].wapBannerUrl } ')`}}>
                        </div>
                        <div className="sort-list">
                            <ul className="list">
                                {
                                    sortData[currentIndex].subCateList.map((subcate,index)=>{
                                        return (
                                            <li className="list-item" key={index}>
                                                <div className="img-wrap">
                                                    <img src={subcate.wapBannerUrl} />
                                                </div>
                                                <div className="name">{subcate.name}</div>
                                            </li>
                                        )
                                    })

                                }
                            </ul>
                        </div>
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