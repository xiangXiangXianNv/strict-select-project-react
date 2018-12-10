import React from "react"
import PropTypes from "prop-types"
import './home-slide.styl'
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
export default class HomeSlide extends React.Component {
    static propTypes = {
        slideList : PropTypes.array.isRequired
    };
    componentDidMount(){
        new Swiper(".swiper-container",{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay:true,
            delay:100,
        });
    };
    render() {
        const {slideList} = this.props;
        return (
            <nav className="msite_nav">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            slideList.map((slide,index)=>{
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img src={slide.picUrl} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"/>
                </div>
            </nav>
        )
    }
}