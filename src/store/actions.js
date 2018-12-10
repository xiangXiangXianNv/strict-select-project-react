/*
* 包含多个action(同步对象/异步函数)的actions模块
* */
import {
    reqHomeData,
    reqSortData
} from '../api'
import {
    GETHOMEDATA,
    GETSORTDATA
} from './action-types'
//同步保存首页数据的action
const receiveHomeData = (homeData) => {
    return {type:GETHOMEDATA,data:homeData}
};
const receiveSortData = (sortData) => {
    return {type:GETSORTDATA,data:sortData}
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