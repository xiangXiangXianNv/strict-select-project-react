import React from 'react'
import {combineReducers} from 'redux'
import {
    GETHOMEDATA,
    GETSORTDATA
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
export default combineReducers({
    homeData,
    sortData
});