<template>
    <div>
        <div class="duanzi">
            <span>{{duanzi.text}}</span>
            <br>
            <span>{{code}}</span>
        </div>
    </div>
</template>

<script>
import {mapState, Store} from "vuex";
export default {
    data () {
        return{
            duanzi:{}
        }
    },
    computed:{
        ...mapState({
            code : state => state.code,

        })
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
            }).catch(err=>{
            })
        }
    }
}
</script>