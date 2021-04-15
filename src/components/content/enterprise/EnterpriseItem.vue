<template>
  <a :href="enterpriseListItem.link" :title="enterpriseListItem.info">
    <div class="item-img">
      <img :src="enterpriseListItem.image" :alt="enterpriseListItem.name" />
    </div>
    <h4>{{ enterpriseListItem.name }}</h4>
    <i
      class="iconfont"
      :class="{ isCollect: isCollect }"
      @click.prevent="collectEnterprise()"
      >&#xe66f;</i
    >
  </a>
</template>

<script>
import {
  saveEnterpriseCollect,
  removeEnterpriseCollect,
} from "network/enterpriseRequest.js";
export default {
  data() {
    return {
      isCollect: false,
    };
  },
  props: {
    enterpriseListItem: Object,
  },
  created() {
    this.isCollect = this.$store.state.enterpriseCollectList.some(
      (value) => value.enterpriseId === this.enterpriseListItem.enterpriseId
    );
  },
  methods: {
    collectEnterprise() {
      if (this.isCollect === false) {
        saveEnterpriseCollect(
          this.enterpriseListItem.enterpriseId,
          this.$store.state.username
        )
        .then((res) => {
          this.$toast.show("收藏成功!");
          this.isCollect = true;
        });
      } else {
        removeEnterpriseCollect(
          this.enterpriseListItem.enterpriseId,
          this.$store.state.username
        ).then((res) => {
          this.$toast.show("取消收藏成功!");
          this.isCollect = false;
          if (this.enterpriseListItem.user) this.$router.go(0);
        });
      }
    },
  },
};
</script>

<style scoped>
a {
  position: relative;
  display: block;
  width: 180px;
  height: 230px;
  margin: 18px;
  padding: 10px;
  text-align: center;
  border: 2px solid var(--color-school);
  overflow: hidden;
}

.item-img {
  width: 180px;
  height: 180px;
}

.item-img img {
  margin-top: 50%;
  transform: translateY(-50%);
  /* 让图片按比例缩放 */
  width: 95%;
}

h4 {
  font-weight: 400;
}

a:hover {
  border-radius: 20px;
}

i {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  font-weight: 1000;
  cursor: default;
}

.isCollect {
  color: gold;
}
</style>