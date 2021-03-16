import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home=()=>import('views/home/Home.vue')
const News=()=>import('views/news/News.vue')
const Enterprise=()=>import('views/enterprise/Enterprise.vue')
const Message=()=>import('views/message/Message.vue')
const User=()=>import('views/user/User.vue')
const Login=()=>import('views/login/Login.vue')
const Register=()=>import('views/register/Register.vue')
const Error=()=>import('views/error/Error.vue')


const routes=[
    {
        path:'',
        redirect:'/login'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/news',
        component:News
    },
    {
        path:'/enterprise',
        component:Enterprise
    },
    {
        path:'/message',
        component:Message
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'*',
        component:Error
    }
]

const router=new VueRouter({
    routes,
    mode:'history'
})

export default router

