//对所有的api接口进行统一管理

import requests from "./request";
import mockRequests from './mockAjax'

//获取三级列表
// export const getTypeNav = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})
export const getTypeNav = ()=> mockRequests({url:'/getBaseCategoryList',method:'get'})
//获取轮播图信息
export const getlunbotu = ()=> mockRequests({url:'/lunbotu',method:'get'})
//获取主页floor组件信息
export const reqFloorList = ()=> mockRequests({url:'/floor',method:'get'})
//获取搜索页面信息
export const reqGetSearchInfo = (params)=> requests({url:'/list',method:'post',data:params})
//获取产品详情
export const reqGetGoodsInfo = (skuId)=> requests({url:`/item/${skuId}`,method:'get'})
//将产品添加到购物车，，或者更新某个产品的个数
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`cart/addToCart/${skuId}/${skuNum}`,method:'post'})
//获取购物车列表数据
export const reqShopCartList = ()=>requests({url:'/cart/cartList',method:'get'})
//删除购物车产品
export const reqDeleteCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//修改产品勾选状态
export const reqUpdateChecked = (skuId,isChecked)=> requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//获取验证码
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})
//登录
export const reqUserLogin = (data) => requests({url:'/user/passport/login',data,method:'post'})
// export const reqUserLogin = (data) => requests({url:'/login',data,method:'post'})
//获取登录的用户信息
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})
//退出登录
export const reqLogout = () => requests({url:'/user/passport/logout',method:'get'})
//获取用户地址信息
export const reqAddressInfo = () => requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
//获取订单信息  用户需要买的东西
export const reqOrderInfo = () => requests({url:'/order/auth/trade',method:'get'})
//提交订单
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
//获取订单支付信息
export const reqOrderPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
//获取订单支付状态
export const reqPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获取个人中心的我的订单的数据
export const reqMyOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})

// export const reqa = () => requests({url:'/goods/findAllGoods',method:'get'})

