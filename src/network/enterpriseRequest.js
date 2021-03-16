import {request} from './request.js'

export function getEnterpriseData(){
    return request({
        url:'/enterprise/index'
    })
}