import {
    request
} from './request.js'

export function getNewsData() {
    return request({
        url: '/news/list'
    })
}

export function getNewsCollectData() {
    return request({
        url: '/news-collect/list'
    })
}

export function saveNewsCollect(newsId, username) {
    return request({
        url: '/news-collect/save',
        method: 'post',
        data: {
            newsId,
            username
        }
    })
}

export function removeNewsCollect(newsId, username) {
    return request({
        url: '/news-collect/remove',
        method: 'delete',
        data: {
            newsId,
            username
        }
    })
}