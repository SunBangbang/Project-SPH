//引入封装好的axios请求
import {getTypeNav,getlunbotu,reqFloorList} from '@/api'

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}

const actions = {
    async categoryList(context){
        let res = await getTypeNav()
        if(res.code == 200){
            context.commit('GETTYPENAV',res.data)
        }
    },
    async getlunbotu(context){
        let res = await getlunbotu()
        if(res.code == 200){
            context.commit('GETLUNBOTU',res.data)
        }
    },
    async getFloorList(context){
        let res = await reqFloorList()
        if(res.code == 200){
            context.commit('GETFLOORLIST',res.data)
        }
    }
}

const mutations = {
    GETTYPENAV(state,categoryList){
        state.categoryList = categoryList
    },
    GETLUNBOTU(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
    
}
    
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}