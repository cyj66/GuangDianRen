<template>
  <div class="enterprise-content">
    <enterprise-item
      class="enterprise-item"
      v-for="(value, index) in enterpriseList || userEnterpriseCollectList"
      :key="index"
      :enterprise-list-item="value"
    >
    </enterprise-item>
  </div>
</template>

<script>
import EnterpriseItem from "./EnterpriseItem.vue";
export default {
  components: {
    EnterpriseItem,
  },
  props: {
    enterpriseList: Array,
    userEnterpriseCollectList: Array,
  },
};
</script>

<style scoped>
.enterprise-content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
