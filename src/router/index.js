import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const TopicDetail = () => import('views/home/TopicDetail.vue')
const News = () => import('views/news/News.vue')
const NewsDetail = () => import('views/news/NewsDetail.vue')
const Enterprise = () => import('views/enterprise/Enterprise.vue')
const Message = () => import('views/message/Message.vue')
const User = () => import('views/user/User.vue')
const Login = () => import('views/login/Login.vue')
const Register = () => import('views/register/Register.vue')
const Error = () => import('views/error/Error.vue')


const routes = [{
        path: '',
        redirect: '/login'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/enterprise',
        component: Enterprise
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/newsdetail/:id',
        component: NewsDetail
    },
    {
        path:'/topicdetail',
        component:TopicDetail
    },
    {
        path: '*',
        component: Error
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 全局导航守卫,使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/register') {
        next();
    } else {
        let token = localStorage.getItem('token');
        if (token === null || token === '') {
            alert("请先登录再访问");
            next('/login');
        } else {
            next();
        }
    }
});

export default router