import {
    request
} from './request.js'

export function getAnswerData() {
    return request({
        url: '/answer/list',
    })
}

export function getAnswerLikeData() {
    return request({
        url: '/answer-like/list',
    })
}