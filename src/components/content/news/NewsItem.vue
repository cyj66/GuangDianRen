<template>
    <div class="item" v-show="isNewsItemShow()">
        <div class="item-img">
            <img :src="newsListItem.image" :alt="newsListItem.title">
        </div>
        <div class="item-artical" @click="newsItemClick">
            <h3>{{newsListItem.title}}</h3>
            <p v-html="newsListItem.content"></p>
        </div>
        <i class="iconfont" @click.prevent="iClick" @selectstart="selectStart($event)"
            :class="{iOrangered:isOrangered}">&#xe66f;</i>
        <span class="news-item-date">{{newsListItem.date}}</span>
    </div>
</template>

<script>
    import {
        collectMixin
    } from 'common/mixin.js'


    export default {
        components: {},
        props: {
            newsListItem: Object
        },
        methods: {
            newsItemClick() {
                this.$router.push('/newsdetail/' + this.newsListItem.id);
                //this.$bus.$emit("getNewsListItem", this.newsListItem.id);
            },
            selectStart(e) {
                e.preventDefault()
            },
            isNewsItemShow() {
                if (this.newsListItem.isSchool === this.$store.state.isSchool)
                    return true
                else return false
            }
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
        margin: 20px 20px 0 5px;
        background-color: #fff;
        float: left;
    }

    .item-img img {
        margin-right: 10px;
        margin-top:10px;
        float: left;
        width: 100px;
        height:80px;
    }

    .item-artical {
        float: left;
        width: 290px;
        cursor: pointer;
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

    .iOrangered {
        color: orangered
    }

    .news-item-date {
        position: absolute;
        top: 5px;
        right: 15px;
        font-size: 14px;
        color: #666;
    }
</style>