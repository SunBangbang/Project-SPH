//配置路由
import Vue from 'vue'
import VueRouter from "vue-router"
import routes from '@/router/routes'
//引入仓库
import store from '@/store'

Vue.use(VueRouter)
//将VueRouter原型对象上面的push replace方法拷贝一份
let copyPush = VueRouter.prototype.push
let copyReplace = VueRouter.prototype.replace

//重写push replace方法
//第一个参数：传递的参数（name，path，query，params等）
//第二个参数：成功的回调
//第三个参数：失败的回调
VueRouter.prototype.push = function(location,resolve,reject,){
    if(resolve&&reject){
        copyPush.call(this,location,resolve,reject)
    }else{
        copyPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject,){
    if(resolve&&reject){
        copyReplace.call(this,location,resolve,reject)
    }else{
        copyReplace.call(this,location,()=>{},()=>{})
    }
}

let router = new VueRouter({
    routes,
    //设置路由跳转的滚动行为
    scrollBehavior(to,from,savedPosition){
        //返回的y=0，代表着路由跳转后滚动条在0px位置
        return{y:0}
    }
})

router.beforeEach(async (to,from,next)=>{
let token = store.state.user.token
let name = store.state.user.userInfo.name
//登录了
if(token){
	//登录了，而且去的是登录页面
    if(to.path == '/login'){
        next('/home')
     //登录了，但是去的不是登录页面
    }else{
    //如果有用户信息
        if(name){
            next()
        }else{
        //如果没有用户信息，就派发请求获取用户信息，这样header上的信息就会展示
            try {
                await store.dispatch('getUserInfo')
                next()
        //失败了就代表token失效了，需要重新登录	1.派发退出登录的action 2.
            } catch (error) {
                await store.dispatch('logout')
                next('/login')
            }
        }
    }
    //未登录就放行
}else{
    //未登录不能去交易相关的，支付相关的，个人中心
    let toPath = to.path
    if(toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
        next('/login?toPath='+toPath)
    }else{
        next()
    }
}
})



export default router