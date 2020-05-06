<template>
    <div class="container">
        <div v-for="(item,index) in resdata" class="joke">
            <video 
                :src="item.video"
                controls="controls"
                loop="loop"
                muted="muted"
                preload="preload"
            ></video>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>
<style>
    .joke{
        float: left;
        margin: 20px;
    }
    .joke>span{
        max-width: 280px;
        display: block;
        text-align: left;
        word-break: break-all;
    }
    video{
        height: 500px;
    }
</style>

<script>
    export default {
        data () {
            return {
                resdata:[]
            }
        },
        created () {
            this.testApi();
        },
        methods:{
            testApi(){
                const _this=this;
                this.$http.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then(res=>{
                    _this.resdata = res.data.result;
                    _this.$store.state.code = res.data.code;
                }).catch(err=>{
                    
                })
            },
            clickfn(){
                this.testApi();
            }
        }
    }
</script>