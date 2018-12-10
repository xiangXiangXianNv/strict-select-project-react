/*
* 包含n个接口函数的模块,专门去调用ajax发送请求
* 返回值是一个promise对象
* */
import ajax from "./ajax"
const BASE = "/you";
//请求头部列表
export const reqHomeData = () => {
    return ajax('/homeData')
};
export const reqSortData = () => {
    return ajax('/categoryList')
};