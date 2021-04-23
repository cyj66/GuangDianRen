<template>
  <div class="w1">
    <enterprise-content
      :enterprise-list="enterpriseList"
      v-if="flag"
    ></enterprise-content>
  </div>
</template>

<script>
import EnterpriseContent from "components/content/enterprise/EnterpriseContent.vue";

import {
  getEnterpriseData,
  getEnterpriseCollectData,
} from "network/enterpriseRequest.js";

export default {
  components: {
    EnterpriseContent,
  },
  data() {
    return {
      enterpriseList: [],
      flag:false
    };
  },
  created() {
    getEnterpriseData().then((res) => {
      //console.log(res);
      this.enterpriseList = res;
    });
    getEnterpriseCollectData().then((res) => {
      let enterpriseCollectList = [];
      for (let item of res) {
        if (item.username === this.$store.state.username) {
          enterpriseCollectList.push(item);
        }
      }
      this.$store.commit("changeEnterpriseCollectList", enterpriseCollectList);
      this.flag=true
    });
  },
};
</script>

<style scoped>
</style>