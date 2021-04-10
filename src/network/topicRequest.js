import {
  request
} from './request.js'

export function getTopicData() {
  return request({
    url: '/topic/list',
  })
}

export function getTopicLikeData() {
  return request({
    url: '/topic-like/list',
  })
}

export function getTopicCollectData() {
  return request({
    url: '/topic-collect/list',
  })
}