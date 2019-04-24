<template>
  <div class="carddetails">
    <!-- 信息展示 -->
    <div class="xingxi_box mWidth">
      <div class="card">
        <div class="imgs_bos"><img class="imgs" width= '100%' :src=baseUrl+carddata.logo alt=""></div>
        <p>{{carddata.seller_name}}</p>
        <div class="dhbox"><img :src=icon alt="" ><span>{{carddata.phone}}</span></div>
      </div>
      <div class="qrcode_box">
        <div><img :src=baseUrl+carddata.program alt="" width="100%" height="100%"><p>小程序</p></div>
        <div><img :src=baseUrl+carddata.code alt="" width="100%" height="100%"><p>公众号</p></div>
      </div>
    </div>

    <div class="map_box">
      <div class="quyu">服务区域</div>
    </div>
    <!-- 介绍 -->
    <div class="introduce-wrap mWidth">
      <div class="introduce">
        <h3>公司介绍</h3>
        <div class="introduce-text">{{carddata.explain}}</div>
      </div>
    </div>
    <!-- 类型  -->
    <div class="type-wrapper"> 
      <div class="type mWidth">
        <div class="type-header">
          <div>{{this.typename}}:</div>
          <span @click="brandclick(time, index)" class="active_ss" :class='{"active": activeId === index}' v-for="(time, index) in typedata" :key="index">{{time.type}}</span>
          <span class="fr" style="color:#dd1f00;margin: 0 20px;cursor: pointer;">更多>></span>
        </div>
        <div class="type-img">
          <div class="img_box" v-for="(time, index) in typedatalist" :key="index" :class="{'wh1':typedatalist.length>=2}&&index!==5&&index!==4">
            <img :src=baseUrl+time.image alt="" height="100%">
            <div>{{time.title}}</div>
          </div>

          <div class="img_box" v-for="(time, index) in typedatalist" :key="index" :class="{'wh1':typedatalist.length>=2}&&index!==5&&index!==4">
            <img :src=baseUrl+time.image alt="" height="100%">
            <div>{{time.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设计师团队 -->
    <div class="sjsteam">
      <div class="sjsteam_box" v-if="Page===3">
        <h3>设计师团队</h3>
        <div class="card_box" v-for="(time, index) in plandate" :key="index">
          <div class="img_box"><img :src=baseUrl+time.image alt=""></div>
          <p>{{time.name}}</p>
          <button>立即预约</button>
        </div>
      </div>
    </div>
    <!-- 案例 -->
    <div class="case_wrapper">
      <div class="case mWidth">
        <h3>{{this.casename}}</h3>
        <div class="case_img">
          <div class="img_box wh1"  v-for="(time, index) in casedata" :key="index">
            <img :src=baseUrl+time.image alt="" width="100%" >
            <div>{{time.title}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import mapContent from '../mmap'
export default {
  data () {
    return {
      activeId: 0,
      baseUrl: 'http://www.qyaoq.com',
      icon: '/static/img/dh.png',
      casename: '施工案例',
      typename: '',
      carddata: '', //
      typedata: [], //类型
      typedatalist: [],
      plandate: [],
      casedata: '', //案例
    }
  },
  mounted () {
      let _this = this
      console.log(_this.Sgddetaildata)
      this.casenameda()
      this.casedata = this.Sgddetaildata.productList
      this.typedata = this.Sgddetaildata.brand
      if (this.Page === 4) {
        this.carddata = this.Sgddetaildata.list[0]
      } else {
        this.carddata = this.Sgddetaildata.list
      }
      if (this.typedata != "") {
        this.typedatalist = this.typedata[0].info
      }
  },
  props: {
    Sgddetaildata: {
      type: Object,
      default: {}
    },
    Page: {
      type: Number,
      default: 0
    }
  }
  ,
  watch: {
    Sgddetaildata () {
    }
  },
  methods: {
    brandclick (val, index) {
      this.typedatalist = val.info
      this.activeId = index
    },
    casenameda () {
      switch(this.Page)
      {
        case 0://施工管理详情
          this.typename = '工艺展示'
          break;
        case 2:// 设计师
          this.typename = '擅长类型'
          break;
        case 1:// 第三方
          this.casename = '管理案例'
          this.typename = '崇业范围'
          break;
        case 3:// 装修公司
          this.typename = '擅长类型'
          this.plandate = this.Sgddetaildata.plan
          break;
        case 4:// 材料供应商
          this.casename = '装修效果图'
          this.typename = '产品类型'
          break;
        default:   
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.active_ss{
  color:#999;
  margin: 0 16rpx;
  font-size: 16px;
  cursor: pointer;
}
.active{
  color:#333;
}
// 地图
  .map_box{
    height: 240rpx;
    width: 100%;
    position: relative;
    padding: 0 40rpx;
    box-sizing: border-box;
    .quyu{
      position: absolute;
      height:60rpx;
      line-height: 60rpx;
      color:red;
      background:rgba(255,255,255,.8);
      width:72rpx;
      text-align: center;
      border-radius: 0 0 10rpx 0;
      left:40rpx;
      top:0;
      z-index: 333;
    }
  }
.xingxi_box{
  padding: 40rpx;
  box-sizing:border-box;
  margin: 0 auto;
  height:600rpx;
  // 个人信息
  .card{
    width: 60%;
    height:100%;
    float: left;
    background: #fcf7f7;
    padding: 20rpx 40rpx;
    box-sizing:border-box;
    text-align: center;
    border: 1px solid #fdd0cd;
    font-size: 16px;
    overflow: hidden;
    .imgs_bos{
      height:180rpx;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.5);
      margin-bottom: 12px;
      .imgs{
        position:relative;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%)
      }
    }
    p{
      margin: px2rem(12) 0;
      font-weight: bold;
    }
    .dhbox{
      border: 1px solid #ff6843;
      border-radius: px2rem(6);
      width: 100%;
      height: px2rem(32);
      margin-bottom: px2rem(10);
      color: #ff2400;
      font-size: px2rem(13);
      span{
        float: left;
        line-height: px2rem(32);
      }
      img{
        width: px2rem(20);
        float: left;
        margin: px2rem(8) px2rem(10);
        height:auto;
      }
    }
    .service_box{
      height: px2rem(60);
      text-align: left;
      overflow: hidden;
      font-size: px2rem(14);
      .region{
        font-size: px2rem(12);
        color:#716d6d ;
        line-height: px2rem(20)
      }
    }
  }
  
  // 二维码
  .qrcode_box{
    box-sizing:border-box;
    float: right;
    height: 100%;
    width: 38%;
    background: #fcf7f7;
    border: 1px solid #fdd0cd;
    text-align: center;
    font-size: 14px;
    padding-top: 5px;
    div{
      width: 90%;
      height: px2rem(90);
      margin: 0 auto px2rem(30);
      p{
        margin-top: px2rem(4);
      }
    }
  }
}

// 简绍
.introduce-wrap{
  background:#fff;
  padding: px2rem(20) px2rem(20) px2rem(36);
  box-sizing: border-box;
  .introduce{
    .introduce-text{
      padding:px2rem(10);
      border:1px solid #fdcfcc;
      background:#fffcfc;
      font-size: px2rem(16);
      color:#333333;
      word-break: break-all;
      word-wrap: break-word; 
      line-height:px2rem(30);
    }
  }
}
// 设计师团队
.sjsteam{
  background:#fff;
  padding: px2rem(2);
  .sjsteam_box{
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: px2rem(20);
    .card_box{
      width:48%;
      float: left;
      text-align: center;
      overflow: hidden;
      .img_box{
        text-align: left;
        img{
          position:relative;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          max-width:100%;
          max-height:100%;
        }
      }
      p{
        font-size: px2rem(14);
        color: rgb(114, 114, 114);
        margin: px2rem(20);
      }
      button{
        background: #e72002;
        border: none;
        border-radius: px2rem(4);
        width: 60%;
        height: px2rem(30);
        color: #fff;
        font-size: px2rem(14);
      }
      .img_box{
        border: 1px solid #eee;
        width: 100%;
        padding: px2rem(10);
        box-sizing: border-box;
        height: px2rem(140);
        .img_box{
          height: 100%;
        }
      }
      &:nth-child(2n){
        float: right;
      }
    }
  }
}
// 案例
.case_wrapper{
  padding:px2rem(20);
  .case{
    .case_img{
      width: 100%;
      overflow: hidden;
      .img_box{
        float: left;
        margin: px2rem(10) 0 0;
        border: 1px rgb(233, 233, 233) solid;
        background: #eeeeee;
        width: 48%;
        height: px2rem(120);
        text-align: center;
        color: #fff;
        overflow: hidden;
        position: relative;
        div{
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          position: absolute;
          bottom: 0px;
          height: px2rem(40);
          font-size: px2rem(18);
          line-height: px2rem(40);
        }
        &:nth-child(2n){
          float: right;
        }
      }
    }
  }
}
// 类型
.type-wrapper{
  padding:px2rem(20);
  .type{
    border:1px solid #fdcfcc;
    .type-header{
      line-height: px2rem(40);
      padding: 0 px2rem(10);
      background: #fcf7f7;
      border-bottom:1px solid #fdcfcc;
      font-size: px2rem(16)
    }
    .type-img{
      width: 100%;
      padding: px2rem(12);
      overflow: hidden;
      box-sizing: border-box;
      .img_box{
        background: #eeeeee;
        width: 48%;
        margin: px2rem(10) 0 0;
        height: px2rem(130);
        text-align: center;
        color: #fff;
        float: left;
        border: 1px rgb(233, 233, 233) solid;
        position: relative;
        div{
          background: rgba(0, 0, 0, 0.3);
          position: absolute;
          bottom: 0;
          height: px2rem(40);
          font-size: px2rem(18);
          line-height: px2rem(40);
          width: 100%;
        }
        &:nth-child(2n){
          float: right;
        }
      }
      .wh1{
        width: 376px;
        height: 240px;
        div{
          top: -40px;
          height: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
