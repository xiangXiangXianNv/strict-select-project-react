import React from "react"
import './sort.styl'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getSortData} from '../../store/actions'
import Item01 from './sort-item/item01'
import Item02 from './sort-item/item02'
class Sort extends React.Component {
    state = {
      currentIndex:0
    };
    componentWillMount(){
        const {getSortData} = this.props;
        getSortData();
    };
    componentDidMount(){
        new BScroll('.sort-left',{
            scrollY: true,
            click: true
        })
    };
    handleCurrentIndex = (index)=>{
        this.setState({
            currentIndex:index
        })
    };
    render() {
        const sortData = this.props.sortData;
        const {currentIndex} = this.state;
        if(sortData){
            return (
                <div className="sort">
                    <div className="sort-header">
                        <div className="header-wrap">
                            <i className="search"/>
                            <span className="text">搜索商品,共1212件好物</span>
                        </div>
                    </div>
                    <div className="sort-left">
                        <ul className="cateNav">
                            {
                                sortData.map((item,index)=>{
                                    return (
                                        <li className={currentIndex===index?'active item':'item'}
                                            onClick={()=>{this.handleCurrentIndex(index)}}
                                            key={index}
                                        >
                                            <a className="txt">{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Item01 currentIndex={currentIndex} sortData={sortData} />
                    <Item02 currentIndex={currentIndex} sortData={sortData} />
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
            sortData : state.sortData
        }
    },
    {getSortData}
)(Sort)