import {reqGetSearchInfo} from  '@/api'
const state = {
    searchList:{}
}

const actions = {
    async getSearchList({commit},params={}){
        let res = await reqGetSearchInfo(params)
        if(res.code == 200){
            commit('GETSEARCHLIST',res.data)
        }
    }
}

const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
//项目中getters是用来简化仓库中的数据
const getters = {
    //这里是state是search仓库中的state，不是大仓库的state
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}