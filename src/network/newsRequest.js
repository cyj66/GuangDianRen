import {request} from './request.js'

export function getNewsData(){
    return request({
        url:'/news/index'
    })
}