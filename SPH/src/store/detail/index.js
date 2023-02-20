import { reqGetGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
import { getUUID } from "@/utils/uuid_token"

const state = {
    goodsInfo:{},
    uuid_token:getUUID()
}

const actions = {
    async getGoodsInfo({commit},skuId){
        let res = await reqGetGoodsInfo(skuId)
        if(res.code == 200){
            commit('GETGOODSINFO',res.data)
        }
    },
    //将产品加入购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
//由于给服务器发请求，前台将要写入的数据发给服务器，服务器并没有返回数据，只告诉前台操作成功或者失败，所以不用再存储数据
        let res = await reqAddOrUpdateShopCart(skuId,skuNum)
        if (res.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}

const mutations = {
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo
    }
}

const getters = {
    //导航栏
    categoryView(state){
        return state.goodsInfo.categoryView || {}
    },
    //价格
    price(state){
        return state.goodsInfo.price || {}
    },
    //产品信息
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    //售卖属性
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList || []
    },
    valuesSkuJson(state){
        return state.goodsInfo.valuesSkuJson || {}
    }
}

export default{
    state,
    actions,
    mutations,
    getters
}