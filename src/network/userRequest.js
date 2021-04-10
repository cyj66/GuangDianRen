import {request} from './request.js'

export function postUserLogin(username,password){
    return request({
        url:'/user/login',
        method:'post',
        data:{username,password}
    })
}

export function postUserRegister(username,password){
    return request({
        url:'/user/register',
        method:'post',
        data:{username,password}
    })
}

export function getUserData(){
    return request({
        url:'/user/list',
        method:'get',
    })
}