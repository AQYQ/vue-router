<template>
    <div id="main">
        <div class="left">
            <div class="title">热门推荐</div>
            <ul class="nav">
                <li><router-link to="/home/computer">笔记本电脑</router-link></li>
                <li><router-link to="/home/mobilephone">手机</router-link></li>
                <li><router-link to="/computer">服饰</router-link></li>
                <li><router-link to="/computer">手表</router-link></li>
                <li><router-link to="/computer">书籍</router-link></li>
                <li><router-link to="/computer">玩具</router-link></li>
                <li><router-link to="/computer">小家电</router-link></li>
                <li><router-link to="/computer">学习用品</router-link></li>
                <li><router-link to="/computer">办公用品</router-link></li>
                <li><router-link to="/computer">旅游必备</router-link></li>
                <li><router-link to="/computer">游戏卡通</router-link></li>
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