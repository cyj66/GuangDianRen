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

export function saveAnswerLike(answerId, username,date) {
    return request({
      url: '/answer-like/save',
      method: 'post',
      data: {
        answerId,
        username,
        date
      }
    })
  }
  
  export function removeAnswerLike(answerId, username) {
    return request({
      url: '/answer-like/remove',
      method: 'delete',
      data: {
        answerId,
        username
      }
    })
  }

  export function saveAnswer(answerId, content,username,topicId,date) {
    return request({
      url: '/answer/save',
      method: 'post',
      data: {
        answerId,
        content,
        username,
        topicId,
        date
      }
    })
  }
