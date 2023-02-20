import {reqShopCartList,reqDeleteCart,reqUpdateChecked} from '@/api'

const state = {
    shopCartList:[],
}
const mutations = {
    GETSHOPCARTLIST(stage,shopCartList){
        stage.shopCartList = shopCartList
        // console.log(shopCartList);
    }
}
const actions = {
    //获取购物车列表
    async getShopCartList({commit}){
        let res = await reqShopCartList()
        if(res.code == 200){
            commit('GETSHOPCARTLIST',res.data)
        }
    },
    //删除购物车某一个商品
    async deleteCart({commit},skuId){
        let res = await reqDeleteCart(skuId)
        if(res.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //修改购物车产品选中状态
    async updateChecked({commit},{skuId,isChecked}){
        let res = await reqUpdateChecked(skuId,isChecked)
        if(res.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'))
        }
    },
    //设置全部商品的勾选与否
    updateAllCartisChecked({dispatch,getters},isChecked){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            // if(isChecked==1){
            //     item.isChecked = 1
            //     dispatch('updateChecked',{skuId:item.skuId,isChecked:item.isChecked})
            // }else{
            //     item.isChecked = 0
            //     dispatch('updateChecked',{skuId:item.skuId,isChecked:item.isChecked})
            // }
            let promise = dispatch('updateChecked',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    }

}
const getters = {
    cartList(state){
        return state.shopCartList[0] || {}
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}