<template>
    <div class="new-content mWidth">
        <div class="content-head">
            <h2 class="">{{title}}</h2>
            <!-- <p class="fb-time">发布时间：2018-09-30</p> -->
        </div>
        <div class="content-main" v-html="newstext">
		
        </div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            newstext: '',
            title: ''
        }
    },
    mounted () {
        this.title = decodeURI(this.$root.$mp.query.title)
        this.getData()
    },
    methods: {
        async getData () {
            const params = {
                id: this.$root.$mp.query.ID
            }
            const data = await this.$https(api.universitydetails(),'POST', params);
            if(data.code == '2000'){
                let text = data.data[0].text
                let reg1=/&lt;/g;
                let reg2 = /&gt;/g;
                let newText = text.replace(reg1,'<').replace(reg2,'>')
                this.newtext = newText
                this.newstext = text
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.new-content{
    padding: 40rpx;
    margin-bottom: 40rpx;
    background: #fff;
    box-sizing: border-box;
    .content-head{
        text-align: center;
        margin-top: 40rpx;
        h2{
            font-size: 18px;
            color: #eb613d;
            font-weight: bold;
            margin-bottom: 34rpx;
        }
        p{
            font-size:14px;
        }
    }
    .content-main{
        margin-top: 40rpx;
        width: 100%;
        overflow: hidden;
        line-height: 60rpx;
        min-height:800rpx;
    }
}
</style>


