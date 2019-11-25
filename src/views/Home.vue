<template>
    <div id="main">
        <div class="left">
            <div class="title">热门推荐</div>
            <ul class="nav">
                <li v-for="(item,index) in routeList" :class="{'choosen':isActive== index ? true : false}">
                    <router-link :to="item.to">
                        {{item.name}}
                    </router-link>
                </li>
                <!-- <li :class="{'choosen':isActive==0?true:false}">
                    <router-link to="/home/computer">笔记本电脑</router-link>
                </li>
                <li :class="{'choosen':isActive==1?true:false}">
                    <router-link to="/home/mobilephone">手机</router-link>
                </li>
                <li :class="{'choosen':isActive==2?true:false}">
                    <router-link to="/home/apparel">服饰</router-link>
                </li>
                <li :class="{'choosen':isActive==3?true:false}">
                    <router-link to="/home/watch">手表</router-link>
                </li>
                <li :class="{'choosen':isActive==4?true:false}">
                    <router-link to="/home/books">书籍</router-link>
                </li>
                <li :class="{'choosen':isActive==5?true:false}">
                    <router-link to="/home/toies">玩具</router-link>
                </li>
                <li :class="{'choosen':isActive==6?true:false}">
                    <router-link to="/home/homeappliances">小家电</router-link>
                </li>
                <li :class="{'choosen':isActive==7?true:false}">
                    <router-link to="/home/schoolsupplies">学习用品</router-link>
                </li>
                <li :class="{'choosen':isActive==8?true:false}">
                    <router-link to="/home/officesupplies">办公用品</router-link>
                </li>
                <li :class="{'choosen':isActive==9?true:false}">
                    <router-link to="/home/travel">旅游必备</router-link>
                </li>
                <li :class="{'choosen':isActive==10?true:false}">
                    <router-link to="/home/gamecartoon">游戏卡通</router-link>
                </li> -->
            </ul>
        </div>
        <div class="banner">
            <el-carousel 
                :interval="3000"
                type="card"
                height="300px"
                trigger="click"
            >
                <el-carousel-item v-for="item in imgurl" :key="item">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="goods">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    data () {
        return{
            imgurl:[
                '../../../img/banner/banner1.jpg',
                '../../../img/banner/banner2.jpg',
                '../../../img/banner/banner3.jpg',
                '../../../img/banner/banner4.jpg',
                '../../../img/banner/banner5.jpg',
                '../../../img/banner/banner6.jpg'
            ],
            isActive:0
        }
    },
    created(){
        console.log('created------------');
    },
    computed:{
        ...mapState({
            routeList : state => state.routeList,

        })
    },
    mounted(){
        const _this = this;
        var oli=document.getElementsByTagName('li');  
		for(var i=0;i<oli.length;i++){
			oli[i].onclick=(function(n){
				return function(){
					_this.isActive = n;
				}
			})(i)
		}
    },
    methods:{
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
    .choosen a{
        color: yellow!important;
    }

    .banner{
        float: left;
        width: 1050px;
    }
    .goods{
        float: left;
        width: 1050px;
        /* background-color: red; */
    }
    .el-carousel__item img {
        width: 100%;
        height: 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
