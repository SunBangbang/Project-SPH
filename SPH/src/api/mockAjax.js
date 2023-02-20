//对axios进行二次封装
import axios from 'axios'
//引入进度条
import nProgress from 'nprogress'
//start：进度条开始     done：进度条结束
//引入进度条的样式
import "nprogress/nprogress.css";


const mockRequests = axios.create({
    //基础路径
    baseURL:'/mock',
    //请求超时的时间5s
    timeout:5000,
})

//请求拦截器
mockRequests.interceptors.request.use((config)=>{
    //config  就是配置对象，里面有一个很重要的属性    headers 请求头
    nProgress.start()
    return config
})

//响应拦截器
mockRequests.interceptors.response.use((res)=>{
    //成功的回调函数  res是服务器返回的数据
    nProgress.done()
    return res.data
},(error)=>{
    //失败的回调函数
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default mockRequests