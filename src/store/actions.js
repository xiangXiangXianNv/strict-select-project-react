/*
* 包含多个action(同步对象/异步函数)的actions模块
* */
import {
    reqHomeData,
    reqSortData,
    reqNavList,
    reqTabList
} from '../api'
import {
    GETHOMEDATA,
    GETSORTDATA,
    GETNAVLIST,
    GETSHIWUDATA,
    RESETSHIWUDATA
} from './action-types'
//同步保存首页数据的action
const receiveHomeData = (homeData) => {
    return {type:GETHOMEDATA,data:homeData}
};
const receiveSortData = (sortData) => {
    return {type:GETSORTDATA,data:sortData}
};
const receiveNavList = (navList) => {
    return {type:GETNAVLIST,data:navList}
};
const receiveShiWuData = (shiWuData) => {
    return {type:GETSHIWUDATA,data:shiWuData}
};
export const resetShiWuData = () => {
    return {type:RESETSHIWUDATA,data:{}}
};
//异步请求首页数据的action
export const getHomeData = ()=>{
    return  async (dispatch)=>{
       //1.异步请求homedata数据
       const result = await reqHomeData();
       if(result.code===0){
           const homeData = result.data;
           dispatch(receiveHomeData(homeData))
       }
    }
};
//异步请求分类数据的action
export const getSortData = ()=>{
    return  async (dispatch)=>{
       const result = await reqSortData();
       if(result.code===0){
           const sortData = result.data;
           dispatch(receiveSortData(sortData))
       }
    }
};
//异步请求识物数据的action
export const getNavList = ()=>{
    return  async (dispatch)=>{
       const result = await reqNavList();
       if(result.code==='200'){
           const navList = result.data;
           dispatch(receiveNavList(navList))
       }
    }
};
//异步请求识物数据的action
export const getShiWuData = ({index,url,page})=>{
    return  async (dispatch)=>{
       const result = await reqTabList({index,url,page});
       if(result.code==='200'){
           const shiWuData = result.data;
           dispatch(receiveShiWuData(shiWuData))
       }
    }
};
export const resetShiWuDataA = ()=>{
    return  async (dispatch)=>{
      dispatch(resetShiWuData())
    }
};
