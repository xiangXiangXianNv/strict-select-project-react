import React from "react"
import './home-sort.styl'
import PropTypes from "prop-types"
export default class HomeSort  extends React.Component {
    static propTypes = {
        sortList : PropTypes.array.isRequired
    };
    render() {
        const {sortList} = this.props;
        return (
            <nav className="home-sort">
                <div className="sort-wrap">
                    <div className="sort-content">
                        {
                            sortList.map((sort,index)=>{
                                return (
                                    <div className="sort-item" key={index}>
                                        <a href="javascript:" className="item-a">
                                            <div className="item-img">
                                                <img src={sort.picUrl} />
                                            </div>
                                            <span>{sort.text}</span>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                 </div>
            </nav>
        )
    }
}