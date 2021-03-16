<template>
  <div class="w1">
    <enterprise :enterpriseData="enterpriseData"></enterprise>
  </div>
</template>

<script>
  import Enterprise from 'components/content/enterprise/Enterprise.vue'
  import {getEnterpriseData} from 'network/enterpriseRequest.js'

  export default {
    components: {
      Enterprise
    },
    data(){
      return {
        enterpriseData:[]
      }
    },
    created(){
      getEnterpriseData().then(res=>{
        //console.log(res);
        this.enterpriseData=res
      })
    }
  }
</script>

<style scoped>

</style>