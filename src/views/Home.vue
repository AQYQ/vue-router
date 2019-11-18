<template>
    <div id="main">
        <div class="left">
            <div class="title">热门推荐</div>
            <ul class="nav">
                <li><router-link to="/home/computer">笔记本电脑</router-link></li>
                <li><router-link to="/home/mobilephone">手机</router-link></li>
                <li><router-link to="/home/apparel">服饰</router-link></li>
                <li><router-link to="/home/watch">手表</router-link></li>
                <li><router-link to="/home/books">书籍</router-link></li>
                <li><router-link to="/home/toies">玩具</router-link></li>
                <li><router-link to="/home/homeappliances">小家电</router-link></li>
                <li><router-link to="/home/schoolsupplies">学习用品</router-link></li>
                <li><router-link to="/home/officesupplies">办公用品</router-link></li>
                <li><router-link to="/home/travel">旅游必备</router-link></li>
                <li><router-link to="/home/watch">游戏卡通</router-link></li>
            </ul>
        </div>
        <div class="banner">

        </div>
        <div class="goods">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        console.log('created------------');
    },
    mounted(){
        console.log('mounted------------');
    }

}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    #main{
        width: 1200px;
        margin: 20px auto;
        background-color: red;
    }
    .left{
        width: 150px;
        float: left;
        background-color: #F5F5F5;
    }
    .title{
        width: 150px;
        color: red;
        background-color: white;
    }
    .nav li{
        list-style: none;
        height: 40px;
        background-color: white;
        margin-top: 2px;
        line-height: 40px;
        cursor: pointer;
    }
    .nav a{
        text-decoration: none;
        color: #000000;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .nav li:first-of-type{
        margin-top: 0;
    }

    .banner{
        float: left;
        width: 1050px;
        height: 200px;
        background-color: green;
    }
</style>