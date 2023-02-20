//引入路由组件
// import FsHome from '../pages/Home'
import FsLogin from '../pages/Login'
import FsRegister from '../pages/Register'
import FsSearch from '../pages/Search'
import FsDetail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default[
    {   
        name:'center',
        path:'/center',
        component:Center,
        meta:{
            showFooter:true
        },
        children:[
            {
                path:'myOrder',
                component:MyOrder
            },
            {
                path:'groupOrder',
                component:GroupOrder
            },
            //二级路由重定向
            {
                path:'/center',
                redirect:'/center/myOrder'
            }
        ]
    },
    {   
        name:'paySuccess',
        path:'/paySuccess',
        component:PaySuccess,
        meta:{
            showFooter:true
        }
    },
    {   
        name:'pay',
        path:'/pay',
        component:Pay,
        meta:{
            showFooter:true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path == '/trade'){
                next()
            }else{
                next(flase)
            }
        }
    },
    {   
        name:'trade',
        path:'/trade',
        component:Trade,
        meta:{
            showFooter:true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
        //想来交易页面，必须是从购物车页面来的
            if(from.path == '/shopcart'){
                next()
            }else{
                next(flase)
            }
        }
    },
    {   
        name:'shopcart',
        path:'/shopcart',
        component:ShopCart,
        meta:{
            showFooter:true
        }
    },
    {   
        name:'addshopcart',
        path:'/addshopcart',
        component:AddCartSuccess,
        meta:{
            showFooter:true
        }
    },
    {   
        name:'detail',
        path:'/detail/:skuId',
        component:FsDetail,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/home',
        // component:FsHome,
        component:()=>import('@/pages/Home'),
        meta:{
            showFooter:true
        }
    },

    {
        path:'/login',
        component:FsLogin,
        meta:{
            showFooter:true
        }
    },

    {
        path:'/register',
        component:FsRegister,
        meta:{
            showFooter:false
        }
    },

    {
        path:'/search/:keyword?',
        name:'search',
        component:FsSearch,
        meta:{
            showFooter:false
        }
    },

    {
        //重定向，在项目运行的时候，访问/，就定向到首页
        path:'*',
        redirect:'/home'
    }
]