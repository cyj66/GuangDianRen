import {
    request
} from './request.js'

export function getEnterpriseData() {
    return request({
        url: '/enterprise/list',
    })
}

export function getEnterpriseCollectData() {
    return request({
        url: '/enterprise-collect/list'
    })
}

export function saveEnterpriseCollect(enterpriseId, username) {
    return request({
        url: '/enterprise-collect/save',
        method: 'post',
        data: {
            enterpriseId,
            username
        }
    })
}

export function removeEnterpriseCollect(enterpriseId, username) {
    return request({
        url: '/enterprise-collect/remove',
        method: 'delete',
        data: {
            enterpriseId,
            username
        }
    })
}