<template>
    <div>
        <div class="duanzi">
            <span>{{duanzi.text}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            duanzi:{}
        }
    },
    created () {
        this.duanZiApi();
    },
    methods:{
        duanZiApi(){
            const _this = this;
            this.$http.get("https://api.apiopen.top/getSingleJoke?sid=28654780")
            .then(res=>{
                _this.duanzi = res.data.result;
                console.log(res.data.result.text);
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>