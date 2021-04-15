<template>
    <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        methods: {
            // 给个2000默认值
            show(message, duration=1000) {
                // duration=duration||2000
                this.isShow = true;
                this.message = message;
                setTimeout(() => {
                    this.isShow = false;
                    this.message = '';
                }, duration);
            }
        }
    }
</script>

<style scoped>
.toast{
    position:fixed;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    padding:5px 10px;
    color:white;
    background-color:rgba(0,0,0,.8);
    z-index:999
}
</style>