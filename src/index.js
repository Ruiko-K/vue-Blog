import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './pages/app.vue'
import post from './pages/post.vue'
import photo from './pages/photo.vue'

const routes = [{
        path: '/post/:type',
        component: post
    },
    {
        path: '/photo',
        component: photo
    }
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

Vue.use(VueRouter)

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')