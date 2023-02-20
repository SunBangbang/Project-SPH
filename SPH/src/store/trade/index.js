import {reqAddressInfo,reqOrderInfo} from '@/api'

const state = {
    address:[],
    orderInfo:{}
}
const mutations = {
    GETADDRESSINFO(state,address){
        state.address = address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions = {
    //获取用户的地址信息
    async getAddressInfo({commit}){
       let res = await reqAddressInfo()
    //    console.log(res);
        if(res.code == 200){
            commit('GETADDRESSINFO',res.data)
        }
    },
    async getOrderInfo({commit}){
       let res = await reqOrderInfo()
    //    console.log(res);
        if(res.code == 200){
            commit('GETORDERINFO',res.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}