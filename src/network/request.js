import axios from 'axios'

//function是为了可能会用到多个axios实例，那时候就可以写多个function。
//而如果是default只能写一个
export function request(config) {
  const instance = axios.create({
    //因为vue.config.js配置跨域时，路径可直接简化为'/api/'
    baseURL: "/api",
    timeout: 5000,
  })
  //添加响应拦截器，拦截并选出其中的data部分，不然会返回很多axios自带的网络信息
  instance.interceptors.response.use(
    res => {
      //console.log(res)
      return res.data
    }, error => {
      return Promise.reject(error);
    })
  // 添加请求拦截器，在后续的请求中给请求头加token
  instance.interceptors.request.use(
    res => {
      //console.log(res)
      if (localStorage.getItem('token')) {
        res.headers.token= localStorage.getItem('token');
      }
      //console.log(res.headers.token)   //登录请求后是不会有数据的，得等后面的请求
      return res;
    },
    error => {
      return Promise.reject(error);
    });
  return instance(config)
}