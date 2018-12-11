import React from 'react'
import {combineReducers} from 'redux'
import {
    GETHOMEDATA,
    GETSORTDATA,
    GETNAVLIST,
    GETSHIWUDATA,
    RESETSHIWUDATA
} from './action-types'
const initHomeData = {

};
function homeData(state=initHomeData,action) {
   switch (action.type){
       case GETHOMEDATA :
           return action.data;
       default :
           return state
   }
}
const initSortData = [];
function sortData(state=initSortData,action) {
   switch (action.type){
       case GETSORTDATA :
           return action.data;
       default :
           return state
   }
}
const initNavList = [];
function NavList(state=initNavList,action) {
   switch (action.type){
       case GETNAVLIST :
           return action.data;
       default :
           return state
   }
}
const initShiWuData = {};
function ShiWuData(state=initShiWuData,action) {
   switch (action.type){
       case GETSHIWUDATA :
           return action.data;
       case RESETSHIWUDATA :
           return initShiWuData;
       default :
           return state
   }
}



export default combineReducers({
    homeData,
    sortData,
    NavList,
    ShiWuData,
});