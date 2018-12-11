import React from "react"
import './profile.styl'
export default class Profile extends React.Component {
    render() {
        return (
            <div>111</div>
           /* {/!*<div className="profile">
                <FindHeader>
                    <div className="img-wrap header-center">
                    </div>
                </FindHeader>
                <div className="personalContent" v-if="flag===0">
                    <div className="logoWrap">
                        <div className="logo">
                            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                        </div>
                        <div className="btn">
                            <div className="phoneLogin" click="toLogin(1)">
                                <i className="iconfont icon-shouji"/>
                                <span>手机号码登录</span>
                            </div>
                            <div className="emailLogin" click="toLogin(2)">
                                <i className="iconfont icon-yonghuming"/>
                                <span>用户名密码登录</span>
                            </div>
                            <div className="register">
                                <span className="text">手机号快捷注册</span>
                                <i className="iconfont icon-jiantouarrow487"/>
                            </div>
                        </div>
                    </div>
                    <div className="thirdWrap">
                        <div className="wx item">
                            <i className="iconfont icon-weixin"/>
                            <span>微信</span>
                        </div>
                        <div className="qq item">
                            <i className="iconfont icon-qq"/>
                            <span>QQ</span>
                        </div>
                        <div className="wb item">
                            <i className="iconfont icon-weibo"/>
                            <span>微博</span>
                        </div>
                    </div>
                </div>
                <div className="login-view" v-else>
                    <div className="login_content">
                        <div className="logoWrap">
                            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                        </div>
                        <form>
                            <div className="{on:flag===1}" v-show="flag===1">
                                <section className="login_message">
                                    <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
                                        <button  disabled="!isRightPhone || remainingTime > 0"
                                           className="get_verification"
                                           click.prevent="sendCode"
                                           className="{switchColor:isRightPhone}">
                                        {remainingTime>0?`已发送 ${remainingTime} s`:'获取验证码'}
                                        </button>
                                </section>
                                <section className="login_verification">
                                    <input type="tel" maxlength="8" placeholder="验证码" />
                                </section>
                            </div>
                            <div className="{on:flag===2}" v-show="flag===2">
                                <section>
                                    <section className="login_message">
                                        <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
                                    </section>
                                    <section className="login_verification">
                                        <input type="isShowPwd?'tel':'password'" maxlength="8" placeholder="密码" v-model="pwd" />
                                        <div className="switch_button" className="isShowPwd?'on':'off'" click="isShowPwd=!isShowPwd">
                                            <div className="switch_circle" className="{on:isShowPwd}"/>
                                            <span className="switch_text" v-show="isShowPwd">123</span>
                                        </div>
                                    </section>
                                    <section className="login_message">
                                        <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" />
                                        <img ref="captcha" className="get_verification" src="http://localhost:5000/captcha" alt="captcha" click="switchCaptcha" />
                                    </section>
                                </section>
                            </div>
                             <button className="login_submit" click.prevent="login">登录</button>
                        </form>
                        <button className="other-login" click="flag=0">其他登录方式</button>
                    </div>
                </div>
            </div>*!/}*/
        )
    }
}