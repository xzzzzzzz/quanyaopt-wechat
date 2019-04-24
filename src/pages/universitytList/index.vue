<template>
    <div class="university mWidth">
        <!-- <div class="banner">
            <img src="" alt="">
        </div> -->
        <div class="university-list">
            <div class="list-header">
                你应该知道的装修那些事
            </div>
            <div class="list-content">
                <div class="list-new">
                    <div class="list-item fix" v-for="(item,index) in newList" :key="index" @click="tojump(item)">
                        <div class="item-left fl">
                            <img :src=baseUrl+item.image alt="">
                        </div>
                        <div class="item-right fl">
                            <div class="new-title">
                                {{item.title}}
                            </div>
                            <div class="new-content">
                                &nbsp;
                            </div>
                            <div class="new-time">
                                <span>
                                    {{item.create_time | formatDates}}
                                </span>
                                <span>
                                    <!-- <i class="el-icon-view"></i>
                                    2232 -->
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="list-tj fl">
                     <div class="list-item fix">
                        <div class="item-left fl">
                            <img src="" alt="">
                        </div>
                        <div class="item-right fl">
                            <div class="new-title">
                                你的看见咯简历非法违法违法
                            </div>
                            <div class="new-content">
                                开始就东街口是你的开始登机佛堵奶发佳都科技逢狼时刻多久发流口水的解放路开始登机六块腹肌隆盛科技颠覆了肯德基了房间里德生科技老实交代联发科时间到了看风景时口袋里浪费是可敬的
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data ()  {
        return {
            baseUrl: 'http://www.qyaoq.com',
            icon: '/static/img/dh.png',
            newList: [] 
        }
    },
    mounted() {
        this.getDate()
    },
  methods: {
    async getDate () {
        const params={}
        const data = await this.$https(api.universityList(),'POST', params);
        if(data.code == "2000"){
            this.newList = data.data
        }
    },
    tojump (item){
        const url= '/pages/universitydatelid/main?ID='+item.id+'&title='+encodeURI(item.title)
        this.jump(url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global.scss';
.university{
    .banner{
        height: 240rpx;
        margin: 20rpx auto;
    }
    .university-list{
        padding: 40rpx;
        .list-header{
            height:80rpx;
            font-size: 16px;
            color:#131111;
            line-height: 80rpx;
            border-bottom:1px solid #e7e5e5;
        }
        .list-content{
            min-height: 800rpx;
            background:#fff;
            margin:40rpx auto 80rpx;
            padding: 40rpx 0;
            .list-new{
                padding:0 20rpx;
                width:100%;
                box-sizing: border-box;

            }
            .list-tj{
                width: 25%;
                padding-right: 40rpx;
                box-sizing: border-box;
                .list-item{
                    height: 200rpx;
                    border-bottom:0;
                    .item-left{
                        width:30%;
                        height:100%;
                    }
                    .item-right{
                        width: 70%;
                    }
                }
            }
            .list-item{
                height: 240rpx;
                border-bottom: 1px dashed #e4e4e4;
                width: 100%;
                padding: 20rpx 0;
                box-sizing: border-box;
                .item-left{
                    width:25%;
                    height:100%;
                    float: left;
                    img{
                        height: 80rpx;
                        position: relative;
                        top:50%;
                        transform: translateY(-50%)
                    }
                }
                .item-right{
                    float: right;
                    width: 75%;
                    padding-left: 40rpx;
                    box-sizing: border-box;
                    .new-title{
                        height:60rpx;
                        line-height:60rpx;
                        color:#282828;
                        font-size: 18px;
                        width:100%;    
                        overflow: hidden;    
                        text-overflow:ellipsis;    
                        white-space: nowrap;            
                    }
                    .new-content{
                        line-height: 40rpx;
                        font-size: 14px;
                        color:#636464;
                        word-break: break-all;
                        word-wrap: break-word;
                        display: -webkit-box;    
                        -webkit-box-orient: vertical;    
                        -webkit-line-clamp: 2;    
                        overflow: hidden;
                        margin:20rpx 0;
                        box-sizing: border-box;
                        min-height: 40rpx;
                    }
                    .new-time{
                        margin-top:20rpx;
                        color:#a7a0af;
                        font-size: 14px;
                        span{
                            padding-right:60rpx;
                        }
                    }
                }
            }
        }
    }
}
</style>

