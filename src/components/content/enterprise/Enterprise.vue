<template>
    <div>
        <enterprise-item class="enterprise-item" v-for="(value,index) in enterpriseData" 
                        :key="index" :enterprise-value="value">
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
            enterpriseData:Array
        }
    }
</script>

<style scoped>
.enterprise-item{
    float:left;
}
</style>
