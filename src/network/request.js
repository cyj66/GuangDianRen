import axios from 'axios'

//function是为了可能会用到多个axios实例，那时候就可以写多个function。
//而如果是default只能写一个
export function request(url) {
    const instance = axios.create({
        //因为vue.config.js配置跨域时，路径可直接简化为'/api/'
        baseURL: "/api",
        timeout: 5000
    })
    //拦截并选出其中的data部分，不然会返回很多axios自带的网络信息
    instance.interceptors.response.use(
        res => res.data, err => console.log(err)
    )
    return instance(url)
}