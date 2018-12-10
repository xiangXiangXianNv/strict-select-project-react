import Mock from "mockjs"
import msite from './msite.json'
import category from './category.json'
import find from './shiwu.json'
Mock.mock('/homeData',{
  code:0,
  data:msite
});
Mock.mock('/categoryList',{
  code:0,
  data:category
});
Mock.mock('/findRecommend',{
  code:0,
  data:find
});

