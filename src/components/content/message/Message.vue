<template>
    <div>
        <span class="user-ID">黄伟安</span>
        <slot name="like">
            <p><strong>点赞了我的提问：暨南大学的光电工程系究竟怎么样？</strong></p><span>2020-8-9</span>
        </slot>
        <slot name="answer">
            <p><strong>回答了我的提问：暨南大学的光电工程系究竟怎么样？</strong><br> 
            暨南大学光电工程学科始于1984年设立的“光学”硕士学位点，2003年设立“光学工程”硕士学</p>
        </slot>
        <span>2020-8-9</span>
    </div>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style scoped>
</style>