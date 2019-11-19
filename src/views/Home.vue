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
            <el-carousel :interval="3000" type="card" height="300px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item*10 }}</h3>
                </el-carousel-item>
            </el-carousel>
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
    }
    .goods{
        float: left;
        width: 1050px;
        background-color: red;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 30px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
