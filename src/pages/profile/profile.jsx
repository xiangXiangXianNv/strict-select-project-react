import React from "react"
import {connect} from 'react-redux'
import './profile.styl'
import '../shiwu/shiwu-header/shiwu-header.styl'
import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
import FindHeader from '../shiwu/shiwu-header/shiwu-header'
import {saveUser,logout} from '../../store/actions'
import {reqSendCode,reqSmsLogin,reqLoginPwd} from '../../api'
class Profile extends React.Component {
    state = {
        flag : 0,
        remainingTime : 0,
        isShowPwd:false,
        phone:'',//手机号
        code:"",//短信注册验证码
        name:"",//用户名
        pwd:"",//密码
        captcha:""//图片验证码
    };
    //用来切换界面显示
    toLogin = (flag)=>{
       this.setState({
           flag : flag
       })
    };
    //判断是否是正确号码
    isRightPhone=()=>{
        return /^1\d{10}$/.test(this.state.phone)
    };
    //切换是否显示密码
    togglePwd = ()=>{
        const {isShowPwd} = this.state;
        this.setState({
            isShowPwd : !isShowPwd
        })
    };
    //切换图片验证码
    switchCaptcha=()=>{
        this.refs.captcha.src = "http://localhost:5000/captcha?time="+Date.now();
    };
    //设置flag
    setFlag=()=>{
        this.setState({
            flag : 0
        })
    };
    //同步输入数据与状态数据
    handleChange = (type,event)=>{
        event.persist();
        const value = event.target.value;
        this.setState({
            [type] : value
        })
    };
    //发送验证码
    sendCode= async (e)=>{
        let {phone,remainingTime} = this.state;
        e.preventDefault();
        this.setState({
            remainingTime : 30
        },()=>{
            const id = setInterval(()=>{
                this.setState({
                    remainingTime: remainingTime--
                },()=>{
                    if(remainingTime<=0){
                        this.setState({
                            remainingTime : 0
                        });
                        clearInterval(id);
                    }
                });


            },1000);
        });

        const result = await reqSendCode({phone});
        if(result.code===0){
            Toast.success('请注意查看手机验证码')
        }else{
            Toast.fail('手机验证码发送失败');
            this.setState({
                remainingTime:0
            })
        }
    };
    login = async (e)=>{
        var result = {};
        e.preventDefault();
        const {flag,phone,code,name,pwd,captcha} = this.state;
        const {isRightPhone} = this;
        if(flag===1){ //手机号登陆
            if(!isRightPhone()){
                Toast.fail('请输入正确的手机号码');
            }else if(code.length!==6){
                Toast.fail('请输入正确的短信验证码');
            }
            //发请求获取用户信息,存储在状态中
            result = await reqSmsLogin({phone,code});
            if(result.code!==0){ //失败了
                this.setState({
                    remainingTime:0
                });
                Toast.fail(result.data);
            }
            }
        else { //用户名登陆
                if(!name){
                    Toast.fail('请输入正确的用户名');
                }else if(!pwd){
                    Toast.fail('请输入密码');
                }else if(captcha.length!==4){
                    Toast.fail('请输入正确的图形验证码');
                }else {
                    //发送用户名登陆请求
                    result = await reqLoginPwd({name,pwd,captcha});
                    if(result.code!==0){
                        /*登陆失败*/
                        /*重新刷新验证码图片*/
                        this.switchCaptcha();
                        Toast.fail(result.msg);
                    }
                }
        }
        if(result.code===0){
            //保存用户信息到状态中
            this.setState({
                flag:3
            });
            const user = result.data;
            this.props.saveUser(user);
            //跳转到个人中心界面
            this.props.history.replace("/home");

        }
    };
    logout = ()=>{
        this.props.logout();
    };
    render() {
        const {flag,remainingTime,isShowPwd} = this.state;
        const {user} = this.props;
        return (
            <div className="profile">
                {
                    !user._id?
                    <FindHeader>
                        <div className="img-wrap header-center"/>
                    </FindHeader>:null
                }
                {
                    flag === 0 && !user._id?
                    <div className="personalContent">
                        <div className="logoWrap">
                            <div className="logo">
                                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                            </div>
                            <div className="btn">
                                <div className="phoneLogin" onClick={()=>{this.toLogin(1)}}>
                                    <i className="iconfont icon-shouji"/>
                                    <span>手机号码登录</span>
                                </div>
                                <div className="emailLogin" onClick={()=>{this.toLogin(2)}}>
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
                    </div>:
                    <div className="login-view">
                        <div className="login_content">
                            <div className="logoWrap">
                                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                            </div>
                            <form>
                                {
                                    flag === 1&&!user._id ?
                                        <div className={flag === 1 ? 'on' : null}>
                                        <section className="login_message">
                                            <input type="tel" maxLength="11" placeholder="手机号" onChange={(e) => {
                                                this.handleChange('phone', e)
                                            }}/>
                                            <button
                                                disabled={!this.isRightPhone() || remainingTime > 0 ? true : false}
                                                onClick={(e) => {
                                                    this.sendCode(e)
                                                }}
                                                className={this.isRightPhone() ? 'switchColor get_verification' : 'get_verification'}>
                                                {remainingTime > 0 ? `已发送 ${remainingTime} s` : '获取验证码'}
                                            </button>
                                        </section>
                                        <section className="login_verification">
                                            <input type="tel" maxLength="8" placeholder="短信验证码" onChange={(e) => {
                                                this.handleChange('code', e)
                                            }}/>
                                        </section>
                                    </div> :
                                    flag === 2&&!user._id ?
                                        <div className={flag === 2 ? 'on' : null}>
                                            <section>
                                                <section className="login_message">
                                                    <input type="tel" maxLength="11" placeholder="用户名"
                                                           onChange={(e) => {
                                                               this.handleChange('name', e)
                                                           }}/>
                                                </section>
                                                <section className="login_verification">
                                                    <input type={isShowPwd ? 'tel' : 'password'} maxLength="8"
                                                           placeholder="密码" onChange={(e) => {
                                                        this.handleChange('pwd', e)
                                                    }}/>
                                                    <div
                                                        className={isShowPwd ? 'on switch_button' : 'off switch_button'}
                                                        onClick={() => {
                                                            this.togglePwd()
                                                        }}>
                                                        <div
                                                            className={isShowPwd ? 'on switch_circle' : 'switch_circle'}/>
                                                        {
                                                            isShowPwd ? <span className="switch_text">123</span> : null
                                                        }
                                                    </div>
                                                </section>
                                                <section className="login_message">
                                                    <input type="text" maxLength="11" placeholder="图片验证码"
                                                           onChange={(e) => {
                                                               this.handleChange('captcha', e)
                                                           }}/>
                                                    <img ref="captcha" className="get_verification"
                                                         src="http://localhost:5000/captcha" alt="captcha"
                                                         onClick={() => {
                                                             this.switchCaptcha()
                                                         }}/>
                                                </section>
                                            </section>
                                        </div>:
                                    <div className='text'>
                                        <div className='logined'>已登陆</div>
                                        <div className='username'>{user.name?'用户名为:':'手机号为:'}{user.name}</div>
                                        <div className='logout' onClick={()=>{this.logout()}}>退出登录</div>
                                    </div>
                                }
                                {
                                    !user._id?<button className="login_submit" onClick={(e)=>{this.login(e)}}>登录</button>:null
                                }
                            </form>
                            {
                                !user._id? <button className="other-login" onClick={()=>{this.setFlag()}}>其他登录方式</button>:null
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            user:state.User
        }
    },
    {saveUser,logout}
)(Profile)