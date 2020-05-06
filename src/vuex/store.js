import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store =  new Vuex.Store({
    //定义的state
    state:{
        routeList:[
            {
                name:'笔记本电脑',
                to:'/home/computer'
            },
            {
                name:'手机',
                to:'/home/mobilephone'
            },
            {
                name:'服饰',
                to:'/home/apparel'
            },
            {
                name:'手表',
                to:'/home/watch'
            },
            {
                name:'书籍',
                to:'/home/books'
            },
            {
                name:'玩具',
                to:'/home/toies'
            },
            {
                name:'小家电',
                to:'/home/homeappliances'
            },
            {
                name:'学习用品',
                to:'/home/schoolsupplies'
            },
            {
                name:'办公用品',
                to:'/home/officesupplies'
            },
            {
                name:'旅游必备',
                to:'/home/travel'
            },
            {
                name:'游戏卡通',
                to:'/home/gamecartoon'
            }
        ],
        code:Number
    },
    mutations:{

    },
    actions:{

    }
})
export default store;