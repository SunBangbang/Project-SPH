import {v4 as uuidv4} from 'uuid'
//生成一个随机字符串，且每次执行不能发生变化，游客身份要持久存储
export const getUUID = ()=>{
    //检测本地存储中有没有UUID
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    //如果没有，则生成一个存储到本地
    if(!uuid_token){
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}