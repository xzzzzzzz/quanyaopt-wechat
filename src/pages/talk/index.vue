<template>
    <div class="talk">
        <div class="say-content">
            <div class="say-title">
                平台说说
            </div>
            <ul class="say-item">
                <li v-for="(item,index) in sayList" :key="index" @click="jump('/pages/newstext/main?ID='+item.id+'&title='+encodeURI(item.title))">
                    {{item.title}}
                </li>
            </ul>
        </div>
         <div class="bulletin">
            <div class="bulletin-title">
                公告栏
            </div>
            <ul class="bulletin-item">
                <li v-for="(item,index) in noticeList" :key="index" @click="jump('/pages/newstext/main?ID='+item.id+'&title='+encodeURI(item.title))">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    data() {
        return {
            sayList: [], //说说
            noticeList: [],  // 公告
        }
    },
    mounted() {
        this.get()
    },
    methods: {
        async get() {
            const params = {

            }
            const data = await this.$https(api.home(), 'POST' ,params)
            console.log(data)
            if(data.code == '2000'){
                this.sayList = data.data.ping
                this.noticeList = data.data.gong
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.talk{
    .say-content{
        width:100%;
        box-sizing: border-box;
        height: 100%;
        border:1px solid #7ecbff;
        background: #fff;
        .say-title{
            height:80rpx;
            font-size: 18px;
            color:#fff;
            padding-left:20rpx;
            line-height: 80rpx;
            background: #7ecbff;
        }
        .say-item{
            padding: 20rpx;
            height:400rpx;
            li{
                height:60rpx;
                line-height: 60rpx;
                font-size: 16px;
                cursor: pointer;
                
            }
        }
    }
    .bulletin{
        width:100%;
        height: 100%;
        border: 1px solid #ff5500;
        background:#fff;
        box-sizing: border-box;
        margin-top: 20rpx;
        .bulletin-title{
             height:80rpx;
            font-size: 18px;
            color:#fff;
            padding-left:20rpx;
            line-height: 80rpx;
            background:#fe2500;
        }
        .bulletin-item{
            padding: 20rpx;
            height:400rpx;
            li{
                height: 60rpx;
                line-height: 60rpx;
                font-size: 16px;
                color:#666666; 
                cursor: pointer;
            }
        }
    }
}
</style>


