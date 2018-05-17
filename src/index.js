import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './pages/app.vue'
import home from './pages/home.vue'
import bigPost from './pages/big-post.vue'
import post from './pages/post.vue'
import photo from './pages/photo.vue'

const routes = [{
    path: '/',
    redirect: '/post/计算机?count=1', //设置默认指向的路径
    name: '主页'
}, {
    path: '/home',
    name: home,
    component: home,
    children: [{
            path: '/post/:type',
            component: post,
            name: post
        },
        {
            path: '/photo',
            component: photo
        }
    ]
}, {
    path: '/big-post',
    component: bigPost
}]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

Vue.use(VueRouter)

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')