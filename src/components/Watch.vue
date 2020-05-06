<template>
    <div>
        <div id="myChart" :style="{width: '800px', height: '500px'}"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg: '计  算  机'
        }
    },
    mounted(){
        this.drawLine();
    },
    methods:{
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问',this.msg],
                    orient:'vertical',
                    right:0,
                    top:200,
                    itemGap:20,
                    itemWidth:40,
                    selectedMode:'single',
                    icon:'roundRect',
                    

                },
                grid: {
                    left: '3%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'邮件营销',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        data:[0, 320, 332, 0, 301, 334, 390]
                    },
                    {
                        name:this.msg,
                        type:'line',
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        }
    }
}
</script>