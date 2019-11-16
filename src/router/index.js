import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Computer from '../components/computer.vue'
import Mobilephone from '../components/mobilephone.vue'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home' },
    {
        path: '/home', component: Home, children: [
            { path: '', redirect: 'computer' },
            { path: 'computer', component: Computer},
            { path: 'mobilephone', component: Mobilephone},
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
