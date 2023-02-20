import Vue from 'vue'
import App from './App.vue'
//引入三级联动组件----全局组件
import TypeNav from './components/TypeNav'
import FsCarousel from '@/components/Carousel'
import FsPagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(FsCarousel.name,FsCarousel)
Vue.component(FsPagination.name,FsPagination)
//引入路由
import router from './router'
//引入仓库
import store from './store'
//引入mock数据
import '@/mock/mockSever'
//引入swiper样式
import 'swiper/css/swiper.css'

//统一引入所有暴露的接口
import * as API from '@/api'
//引入elementUI组件库
import {MessageBox} from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入懒加载图片
import vueLoge from '@/assets/logo.png'
//引入图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:vueLoge
})
//引入表单验证
import validate from '@/plugins/validate'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
    //把api文件夹中的请求函数放在vue组建的原型对象上，这样所有的组件就都可以直接使用
    Vue.prototype.$API = API
  }
}).$mount('#app')
