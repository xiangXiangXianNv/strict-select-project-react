/*
* 包含多个action(同步对象/异步函数)的actions模块
* */
import {
    reqHomeData,
    reqSortData,
    reqNavList,
    reqTabList,
    reqLogout
} from '../api'
import {
    GETHOMEDATA,
    GETSORTDATA,
    GETNAVLIST,
    GETSHIWUDATA,
    RESETSHIWUDATA,
    SAVEUSER,
    RESETUSER,
    SAVEID
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
export const saveUser = (user) => {
    return {type:SAVEUSER,data:user}
};
const resetUser = () => {
    return {type:RESETUSER}
};
//存储识物组件的id值
const saveId = (id) => {
    return {type:SAVEID,data:id}
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

//用户登出
export const logout =  ()=>{
   return async dispatch => {
       const result = await reqLogout();
       if(result.code===0){
            dispatch(resetUser())
       }
   }
};
export const goSaveId =  (id)=>{
    return  async (dispatch)=>{
        dispatch(saveId(id))
    }
};
