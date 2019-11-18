import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Computer from '../components/Computer.vue'
import Mobilephone from '../components/Mobilephone.vue'
import Apparel from '../components/Apparel.vue'
import Watch from '../components/Watch.vue'
import Books from '../components/Books.vue'
import Toies from '../components/Toies.vue'
import HomeAppliances from '../components/HomeAppliances.vue'
import SchoolSupplies from '../components/SchoolSupplies.vue'
import OfficeSupplies from '../components/OfficeSupplies.vue'
import Travel from '../components/Travel.vue'
import GameCartoon from '../components/GameCartoon.vue'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home' },
    {
        path: '/home', component: Home, children: [
            { path: '', redirect: 'computer' },
            { path: 'computer', component: Computer},
            { path: 'mobilephone', component: Mobilephone},
            { path: 'apparel', component: Apparel},
            { path: 'watch', component: Watch},
            { path: 'books', component: Books},
            { path: 'toies', component: Toies},
            { path: 'homeappliances', component: HomeAppliances},
            { path: 'schoolsupplies', component: SchoolSupplies},
            { path: 'officesupplies', component: OfficeSupplies},
            { path: 'travel', component: Travel},
            { path: 'gamecartoon', component: GameCartoon},
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
