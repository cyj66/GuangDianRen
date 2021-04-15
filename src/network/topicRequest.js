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

export function saveTopicLike(topicId, username,date) {
  return request({
    url: '/topic-like/save',
    method: 'post',
    data: {
      topicId,
      username,
      date
    }
  })
}

export function removeTopicLike(topicId, username) {
  return request({
    url: '/topic-like/remove',
    method: 'delete',
    data: {
      topicId,
      username
    }
  })
}

export function saveTopicCollect(topicId, username) {
  return request({
    url: '/topic-collect/save',
    method: 'post',
    data: {
      topicId,
      username
    }
  })
}

export function removeTopicCollect(topicId, username) {
  return request({
    url: '/topic-collect/remove',
    method: 'delete',
    data: {
      topicId,
      username
    }
  })
}

export function saveTopic(topicId,title,username,date) {
  return request({
    url: '/topic/save',
    method: 'post',
    data: {
      topicId,
      title,
      username,
      date
    }
  })
}