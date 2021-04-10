<template>
    <nav-bar>
        <template v-slot:logo>
            <h1 class="main-logo">
                <a @click="logoClick" title="暨大光电人">暨大光电人</a>
            </h1>
        </template>
        <template v-slot:list>
            <ul class="main-list">
                <li v-for="(value,index) in lists" :key="index" @click="liClick(index)"
                    :class="{listActive:activeIndex===index}">
                    <h2>{{value.name}}</h2>
                </li>
            </ul>
        </template>
        <template v-slot:search>
            <div class="main-search">
                <input type="text" placeholder="暨南大学的光电工程系究竟怎么样？" />
                <button>搜问题</button>
            </div>
        </template>
        <template v-slot:user>
            <ul class="main-user">
                <li><i class="iconfont" @click="messageClick">
                        &#xe679;</i>
                    <span v-show=isShowSpan>{{messageCount}}</span>
                </li>
                <li><i @click="showDialog" class="iconfont">&#xe682;</i></li>
            </ul>
            <ul class="dialog" v-show=isShowDialog>
                <li @click="userClick"><i class="iconfont">&#xe682;</i> 我的</li>
                <li @click="logoutClick"><i class="iconfont">&#xe67e;</i> 退出</li>
            </ul>
        </template>
    </nav-bar>

</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue'

    export default {
        components: {
            NavBar
        },
        data() {
            return {
                lists: [{
                        name: "首页",
                        path: '/home'
                    },
                    {
                        name: "资讯",
                        path: '/news'
                    },
                    {
                        name: "企业",
                        path: '/enterprise'
                    }
                ],
                isShowDialog: false,
                activeIndex: 0,
                messageCount: 100,
                isShowSpan: true
            }
        },
        created() {
            if (this.messageCount > 99) this.messageCount = '99+'
            else if (this.messageCount === 0) this.isShowSpan = false
        },
        methods: {
            logoClick() {
                this.$router.push('/home');
            },
            liClick(index) {
                this.$router.push(this.lists[index].path);
            },
            messageClick() {
                this.$router.push('/message');
            },
            showDialog() {
                this.isShowDialog = !this.isShowDialog
            },
            userClick() {
                this.$router.push('/user');
            },
            logoutClick() {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                localStorage.removeItem('signTime');
                this.$router.push('/login');
                location.reload()
            }
        },
        watch: {
            '$route'() {
                switch (this.$route.path) {
                    case '/home':
                        this.activeIndex = 0;
                        break;
                    case '/news':
                        this.activeIndex = 1;
                        break;
                    case '/enterprise':
                        this.activeIndex = 2;
                        break;
                    default:
                        this.activeIndex = -1;
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .main-logo a {
        margin-top: -18px;
        margin-left: 20px;
        display: block;
        width: 200px;
        height: 90px;
        background: url(~assets/img/logo/logo2.png) no-repeat 0 20px;
        background-size: 180px 70px;
        text-indent: -9999px;
        overflow: hidden;
        cursor: pointer
    }

    .main-list {
        margin-left: 50px;
        cursor: pointer
    }

    .main-list li,
    .main-user li {
        position: relative;
        float: left;
    }

    .main-list li,
    .main-user i {
        display: block;
        height: 80px;
        padding: 0 20px;
        line-height: 80px;
    }

    .main-list h2 {
        font-weight: 400
    }

    .listActive {
        background-color: var(--color-school);
        color: white !important;
    }

    .main-search {
        position: relative;
        width: 450px;
        margin-top: 25px;
    }

    .main-search input {
        width: 400px;
        height: 30px;
        padding: 0 10px 0 10px;
        border: 2px solid var(--color-school);
    }

    .main-search button {
        position: absolute;
        top: 0;
        right: -20px;
        width: 80px;
        height: 34px;
        background-color: var(--color-school);
        border: 2px solid var(--color-school);
        color: white;
        outline: none;
    }

    .main-search button:hover {
        font-size: 18px
    }

    .main-user .iconfont {
        font-size: 50px;
        color: gray;
        cursor: pointer
    }

    .main-user li span {
        position: absolute;
        top: 12px;
        right: 20px;
        background-color: var(--color-school);
        color: white;
        font-size: 2px;
        padding: 3px;
        border-radius: 10px
    }

    .dialog {
        position: absolute;
        top: 70px;
        right: 30px;
        width: 80px;
        height: 80px;
        border: 1px solid var(--color-shadow);
        background-color: #fff;
        color: gray;
        box-shadow: 1px 1px 3px 1px var(--color-shadow);
        cursor: pointer
    }

    .dialog::before {
        content: "";
        position: absolute;
        top: -13px;
        right: 34px;
        width: 0;
        height: 0;
        border: 6px solid gray;
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
    }

    .dialog li {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .dialog li:first-child {
        border-bottom: 1px solid var(--color-shadow);
    }
</style>