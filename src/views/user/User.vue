<template>
  <div class="w2">
      <user-info></user-info>
      <user-collect></user-collect>
      <user-question></user-question>
  </div>
</template>

<script>
import UserInfo from 'components/content/user/UserInfo.vue'
import UserCollect from 'components/content/user/UserCollect.vue'
import UserQuestion from 'components/content/user/UserQuestion.vue'

import {keepScrollPosition} from 'common/mixin.js'

export default {
  components:{
    UserInfo,UserCollect,UserQuestion
  },
  mixins:[keepScrollPosition]
}
</script>

<style scoped>

</style>