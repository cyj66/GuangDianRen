<template>
    <a href="">
        <div class="item">
            <div class="item-img">
                <img :src="newsListItem.image" :alt="newsListItem.title">
            </div>
            <div class="item-artical">
                <h3>{{newsListItem.title}}</h3>
                <p>{{newsListItem.content}}</p>
            </div>
            <i class="iconfont" @click.prevent="iClick" :class="{iOrange:isOrange}">&#xe66f;</i>
            <span class="news-item-time">{{newsListItem.date}}</span>
        </div>

    </a>
</template>

<script>
    import {
        collectMixin
    } from 'common/mixin.js'


    export default {
        components: {},
        props:{
            newsListItem:Object
        },
        mixins: [collectMixin]

    }
</script>

<style scoped>
    .item {
        position: relative;
        width: 400px;
        height: 100px;
        border: 2px solid var(--color-shadow);
        border-radius: 10px;
        padding: 25px 10px 10px 10px;
        margin: 20px 5px 0 5px;
        background-color: #fff;
    }

    .item-img img {
        margin-right: 10px;
        float: left;
        width: 100px;
        height: 100px;
    }

    .item-artical {
        float: left;
        width: 290px;
    }

    h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .item-artical p {
        margin-top: 8px;
        font-size: 14px;
        color: gray;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    .item:hover {
        box-shadow: 0px 0px 3px 3px var(--color-shadow);
    }

    i {
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 30px;
        font-weight: 1000;
        cursor: default;
    }

    .iOrange {
        color: orange
    }

    .news-item-time {
        position: absolute;
        top: 5px;
        right: 15px;
        font-size: 14px;
        color: #333;
    }
</style>