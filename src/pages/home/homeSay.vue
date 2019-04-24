<template>
    <div class="home-say">
        <div class="banner">
                 <swiper 
                    :indicator-dots="indicatorDots"
                    :autoplay="autoplay"
                    :interval="interval"
                    :duration="duration"
                 >
                    <swiper-item v-for="(item,index) in bannerList" :key="index">
                        <image :src="baseUrl+item.image" class="slide-image" height="150px"/>
                    </swiper-item>
                </swiper>
            </div>
        <div class="say mWidth">
            <div class="say-content">
                <div class="say-title">
                    平台说说
                </div>
                <ul class="say-item">
                    <li v-for="(item,index) in sayList" :key="index" @click="tojump('/pages/newstext/main?ID='+item.id+'&title='+ encodeURI(item.title))">
                        {{item.title}}
                    </li>
                </ul>
            </div>
            <div class="foun">
                <div class="foun-item" v-for="(item,index) in imgList" :key="index">
                    <img :src=item.img alt="">
                </div>
            </div>
        </div>

        <div class="recommend mWidth">
            <div class="recommend-item">
                <div class="item" v-for="(item,index) in intery" :key="index" @click="tojump('/pages/'+item.name+'/main')">
                    <div class="item-top">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="item-name">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
        <div class="min-banner mWidth">
            <img :src="baseUrl+minBanner.image" alt="">
        </div>
    </div>
</template>


<script>
export default {
    props: {
        sayList: {
            type: Array,
            default: []
        },
        noticeList: {
            type: Array,
            default: []
        },
        bannerList: {
            type: Array,
            default: []
        },
        minBanner: {
            type: Object,
            default: {
                id: '',
                image: ''
            }
        }
    },
    data () {
        return {
            baseUrl: 'http://www.qyaoq.com',
            intery:[
                {
                    title: '装修公司',
                    image: '/static/img/intery4.png',
                    name: 'companyList'
                },
                {
                    title: '材料供应商',
                    image: '/static/img/intery1.png',
                    name: 'supplier'
                },
                {
                    title: '装修施工队',
                    image: '/static/img/intery5.png',
                    name: 'buildList'
                },
                {
                    title: '第三方监管',
                    image: '/static/img/intery2.png',
                    name: 'superviseList'
                },
                {
                    title: '设计大师',
                    image: '/static/img/intery3.png',
                    name: 'designerList'
                },
                {
                    title: '装修大学堂',
                    image: '/static/img/intery6.png',
                    name: 'universitytList'
                },
            ],
            imgList: [
                {img: '/static/img/jy.png'},
                {img: '/static/img/tx.png'},
                {img:'/static/img/zx.png'}
            ],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }
    },
    methods:{
        tojump (url) {
             wx.navigateTo({url})
        }
    }
}
</script>

<style lang="scss" scoped>
.home-say{
    .banner {
        image{
            height: 100%;
            width:100%;
        }
    }
    // 平台说说
    .say{
        padding:  20px 20px 0;
         .say-content{
            width:100%;
            box-sizing: border-box;
            height: 200px;
            border:1px solid #7ecbff;
            background: #fff;
            .say-title{
                height:40px;
                font-size: 16px;
                color:#fff;
                padding-left:10px;
                line-height: 40px;
                background: #7ecbff;
            }
            .say-item{
                padding: 10px;
                height:200px;
                overflow: auto;
                li{
                    height:30px;
                    line-height: 30px;
                    font-size: 16px;
                    cursor: pointer;
                    
                }
            }
        }
        
        .foun{
            width:100%;
            height:60px;
            box-sizing: border-box;
            .foun-item{
                 margin: 10px 0;
                float: left;
                width:33.33333%;
                height:100%;
                box-sizing: border-box;
                image{
                    height:100%;
                    width:100%;
                }

            }
            .foun-item:last-child{
                border-bottom:0;
            }
        }
    }
    // 推荐
    .recommend{
        padding:0 20px;
        .recommend-item{
            width:100%;
            box-sizing: border-box;
            overflow: hidden;
            background:#fff;
            .item{
                height:417rpx;
                width:100%;
                margin-bottom:10px;
                box-sizing: border-box;
                position: relative;
                image{
                    height:100%;
                    width:100%;
                }
                .item-top{
                    height: 100%;
                    width:100%;
                    position:absolute;
                    left:0;
                    top:0;
                }
                .item-name{
                    text-align: center;
                    padding: 5px 0;
                    box-sizing: border-box;
                    color:#fff;
                    background:#ff6d02;
                    font-size: 12px;
                    position:absolute;
                    width:100%;
                    bottom:0;
                    left:0;
                    z-index: 2;
                }
            }
            .item:nth-child(3n){
                padding-right: 0;
            }
        }
    }
    .min-banner{
        padding: 0 20px;
        height: 50px;
        image{
            height:100%;
            width:100%;
        }
    }
}
</style>

