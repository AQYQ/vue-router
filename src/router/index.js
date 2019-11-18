import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home' },
    {
        path: '/home', component: Home, children: [
            { path: '', redirect: 'computer' },
            { path: 'computer',component: resolve => require(['../components/Computer'], resolve)},
            { path: 'mobilephone',component: resolve => require(['../components/Mobilephone'], resolve)},
            { path: 'apparel',component: resolve => require(['../components/Apparel'], resolve)},
            { path: 'watch',component: resolve => require(['../components/Watch'], resolve)},
            { path: 'books',component: resolve => require(['../components/Books'], resolve)},
            { path: 'toies', component: resolve => require(['../components/Toies'], resolve)},
            { path: 'homeappliances', component: resolve => require(['../components/HomeAppliances'], resolve)},
            { path: 'schoolsupplies', component: resolve => require(['../components/SchoolSupplies'], resolve)},
            { path: 'officesupplies', component: resolve => require(['../components/OfficeSupplies'], resolve)},
            { path: 'travel',component: resolve => require(['../components/Travel'], resolve)},
            { path: 'gamecartoon', component: resolve => require(['../components/GameCartoon'], resolve)},
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
