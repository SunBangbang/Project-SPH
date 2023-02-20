//引入mock模块
import Mock from "mockjs";

import lunbotu from './lunbotu.json'
import floor from './floor.json'
import list from './categoryList.json'

//mock数据：第一个参数是请求地址，第二个参数是请求的数据
Mock.mock('/mock/lunbotu',{code:200,data:lunbotu})
Mock.mock('/mock/floor',{code:200,data:floor})
Mock.mock('/mock/getBaseCategoryList',list)