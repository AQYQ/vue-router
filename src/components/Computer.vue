<template>
    <div>
        <div class="demo-image__placeholder">
            <div class="block">
                <span class="demonstration">默认</span>
                <el-image :src="src"></el-image>
            </div>
            <div class="block">
                <span class="demonstration">自定义</span>
                <el-image :src="src">
                    <div slot="placeholder" class="image-slot">
                        加载中
                        <span class="dot">...</span>
                    </div>
                </el-image>
            </div>
        </div>
    </div>
</template>
<style>
    .block{
        display: inline-block;
        margin: 20px;
    }
    .block:after{
        content: "";
        display: block;
        clear: both;
    }
    .demonstration{
        display: block;
    }
    .el-image img{
        display: inline-block;
        width: 200px;
    }
</style>

<script>
    export default {
        data () {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            }
        },
        created () {
            
        },
        methods:{
            
        }
    }
</script>