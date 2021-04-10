<template>
    <div>
        <enterprise-item class="enterprise-item" v-for="(value,index) in enterpriseList" 
                        :key="index" :enterprise-list-item="value">
        </enterprise-item>
    </div>
</template>

<script>
    import EnterpriseItem from './EnterpriseItem.vue'
    export default {
        components: {
            EnterpriseItem
        },
        props:{
            enterpriseList:Array
        }
    }
</script>

<style scoped>
.enterprise-item{
    float:left;
}
</style>
