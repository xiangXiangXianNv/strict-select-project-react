/*
* 包含n个接口函数的模块,专门去调用ajax发送请求
* 返回值是一个promise对象
* */
import ajax from "./ajax"
const BASE = '/you';
const BASE2 = '/api';
//请求头部列表
export const reqHomeData = () => {
    return ajax('/homeData')
};
export const reqSortData = () => {
    return ajax('/categoryList')
};
//请求识物组件中的导航列表
export const reqNavList = ()=>{
    return ajax(BASE+'/topic/v1/find/getTabs.json')
};
//请求识物组件中的内容达人列表数据
export const reqTabList = ({index,url,page})=>{
    let path = '';
    if(!index){
        path = ''
    }else{
        path = `?tabId=${index}&page=${page}`;
    }
    return ajax(BASE+url+path);
};
/*
搜索组件中的按照关键字搜索的请求
export const reqSearchList = ({keywordPrefix,url})=>{
    return ajax(BASE2+url,{keywordPrefix:keywordPrefix},"POST");
};
*/
//发送请求让后台去请求验证码
export const reqSendCode = ({phone})=>{
    return ajax(BASE2+'/sendcode',{phone})
};
//手机号登陆请求
export const reqSmsLogin = ({phone,code})=>{
    return ajax(BASE2+'/login_sms',{phone,code},"POST")
};
//用户名登陆请求
export const reqLoginPwd = ({name,pwd,captcha})=>{
    return ajax(BASE2+'/login_pwd',{name,pwd,captcha},"POST")
};
//用户名登陆请求
export const reqLogout = ()=>{
    return ajax(BASE2+'/logout')
};
