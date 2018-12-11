/*
* 包含n个接口函数的模块,专门去调用ajax发送请求
* 返回值是一个promise对象
* */
import ajax from "./ajax"
//请求头部列表
export const reqHomeData = () => {
    return ajax('/homeData')
};
export const reqSortData = () => {
    return ajax('/categoryList')
};
//请求识物组件中的导航列表
export const reqNavList = ()=>{
    return ajax('/topic/v1/find/getTabs.json')
};
/*//请求识物组件中的内容推荐列表数据
export const reqRecommend = ({url})=>{
    return ajax(url);
};*/
//请求识物组件中的内容达人列表数据
export const reqTabList = ({index,url,page})=>{
    let path = '';
    if(!index){
        path = ''
    }else{
        path = `?tabId=${index}&page=${page}`;
    }
    return ajax(url+path);
};
/*//请求识物组件中的内容推荐列表数据
export const reqSearchList = ({keywordPrefix,url})=>{
    return ajax(BASE2+url,{keywordPrefix:keywordPrefix},"POST");
};*/
