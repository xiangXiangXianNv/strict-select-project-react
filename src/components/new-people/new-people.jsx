import React from "react"
import PropTypes from 'prop-types'
import './new-people.styl'
export default class NewPeople  extends React.Component {
    static propTypes = {
        indexActivityModule : PropTypes.array.isRequired
    };
    render() {
        const {indexActivityModule} = this.props;
        return (
            <div className="newPeople">
                <div className="new-top">
                    <span className="line left"/>
                    <span className="text">新人专享礼</span>
                    <span className="line right"/>
                </div>
                <div className="new-bottom">
                    <div className="new-left">
                        <div className="name">新人专享礼包</div>
                        <img src="http://yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="" />
                    </div>
                    <div className="new-right">
                        <div className="right-top">
                            <div className="text">
                                <div className="title">{indexActivityModule[0].title}</div>
                                <div className="name">{indexActivityModule[0].subTitle}</div>
                            </div>
                            <div className="price-content">
                                <div className="price-new">{indexActivityModule[0].activityPrice}</div>
                                <div className="price-old">{indexActivityModule[0].originPrice}</div>
                            </div>
                            <div className="img">
                                <img src={indexActivityModule[0].picUrl} alt="" />
                            </div>
                        </div>
                        <div className="right-bottom">
                            <div className="text">
                                <div className="title">{indexActivityModule[1].title}</div>
                                <div className="name">{indexActivityModule[1].tag}</div>
                            </div>
                            <div className="price-content">
                                <div className="price-new">{indexActivityModule[1].activityPrice}</div>
                                <div className="price-old">{indexActivityModule[1].originPrice}</div>
                            </div>
                            <div className="img">
                                <img src={indexActivityModule[1].picUrl} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}