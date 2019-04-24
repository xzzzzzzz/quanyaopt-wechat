<template>
    <div class="mhome">
        <div class="home-content">
            <home-say :minBanner="minBanner" :bannerList='banner' :sayList="sayList" :noticeList="noticeList" ></home-say>
            <!-- 品牌施工 -->
           <business :businessList='businessList' :jclist="jclist" :originalList="originalList" :supervise="supervise"></business>
            
            <div class="case-wrapper">
                <div class="mWidth">
                    <h3>
                        案例图片
                    </h3>
                    <div class="case">
                        <div class="case-list">
                            <div class="list-item" v-for="(item,index) in caseList" :key="index">
                            <div class="item">
                                    <div class="item-name">
                                        {{item.title}}
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/api.js'
import homeSay from './homeSay'
import business from './business'
export default {
    data () {
        return {
            baseUrl: 'http://qyaoq.com',
            logo: '/static/img/logo.png',
            banner: [],
            minBanner: { //广告图
                id: '',
                image: ''
            },
            sayList: [], // 平台说说
            noticeList: [], // 公告栏
            businessList: [], //品牌施工
            jclist: [],  //优质建材
            originalList: [], //创意设计
            supervise: [], //第三方监管
            caseList: [], //案例图片
        }
    },
    mounted() {
        this.get()
        this.getDate()
    },
    components:{
        homeSay,business
    },
    methods: {
        async get (){
            const self = this
            const params= {}
            const data = await this.$https(api.home(),'POST', params)
            if(data.code == '2000'){
                self.banner = data.data.roll
                self.sayList = data.data.ping 
                self.noticeList = data.data.gong
                self.minBanner = data.data.centre
            }
        },
        async getDate() {
            const params= {}
            const data = await this.$https(api.home2(),'POST', params)
            if(data.code == '2000'){
                this.businessList = data.data.brand
                this.jclist = data.data.build
                this.originalList=data.data.devise
                this.supervise = data.data.supervise
                this.caseList = data.data.case
           }
      },
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global';
.mhome{
    width:100%;
    .home-top{
        height: px2rem(60);
        background:#fff;
        .logo{
            width:px2rem(150);
            height:100%;
            padding:px2rem(20) 0 0 px2rem(10);
            box-sizing: border-box;
            img{
                width:66%;
                height:66%;
                display: block;
            }
        }
    }
    .home-content{
        //案例图片
        .case-wrapper{
            background:#fff;
            padding-bottom:px2rem(20);
            padding: 0 px2rem(20);
            .case{
                .case-list{
                    overflow: hidden;
                    .list-item{
                        float: left;
                        width:50%;
                        height: px2rem(150);
                        box-sizing: border-box;
                        padding: 0  px2rem(20) px2rem(20) 0 ;
                        .item{
                            width:100%;
                            height:100%;
                            position: relative;
                            .item-name{
                                position:absolute;
                                width:100%;
                                height: px2rem(30);
                                line-height: px2rem(30);
                                background: rgba(0,0,0,.6);
                                color:#fff;
                                font-size: px2rem(13);
                                padding-left:px2rem(10);
                                left:0;
                                bottom:0;
                                box-sizing: border-box;
                            }
                        } 
                    }
                }
            }
        }
    }
}
</style>
