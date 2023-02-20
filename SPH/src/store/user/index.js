import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'

const state = {
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
const mutations = {
    //获取验证码
    GETCODE(state,code){
        state.code = code
    },
    //存储token
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = ''
        state.userInfo = {}
        localStorage.removeItem('TOKEN')
    }
}
const actions = {
    //获取验证码
    async getCode({commit},phone){
    //返回的是验证码
      let res = await reqGetCode(phone)
      if(res.code == 200){
        commit('GETCODE',res.data)
        return 'ok'
      }else{
        return Promise.reject(new Error('falie'))
      }
    },
    //注册
    async userRegister({commit},user){
        let res = await reqUserRegister(user)
        if(res.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'))
        }
    },
    //点击登录按钮
    async userLogin({commit},data){
        let res = await reqUserLogin(data)
        // console.log(res);
        if(res.code == 200){
            commit('USERLOGIN',res.data.token)
        //把token持久化保存
            localStorage.setItem('TOKEN',res.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'))
        }
    },
    //登录时获取用户信息
    async getUserInfo({commit}){
        let res = await reqUserInfo()
        // console.log(res);
        if(res.code == 200){
            commit('GETUSERINFO',res.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async logout({commit}){
        let res = await reqLogout()
        if(res.code == 200){
            commit('CLEAR')
            return 'OK'
        }else{
            return Promise.reject(new Error('faile'))
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