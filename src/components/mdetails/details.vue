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
<!-- 
    <div class="map_box">
      <div class="quyu">服务区域</div>
    </div> -->
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
          <div>{{typename}}:</div>
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
      <div class="sjsteam_box" v-if="page===3">
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
        <h3>{{casename}}</h3>
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
  props: ["sgddetaildata","page"],
  mounted () {
      let _this = this
      console.log(_this.sgddetaildata)
      this.casedata = this.sgddetaildata.productList
      this.typedata = this.sgddetaildata.brand
      if (this.page === 4) {
        this.carddata = this.sgddetaildata.list[0]
      } else {
        this.carddata = this.sgddetaildata.list
      }
      if (this.typedata != "") {
        this.typedatalist = this.typedata[0].info
      }
      this.casenameda()
  },
  methods: {
    brandclick (val, index) {
      this.typedatalist = val.info
      this.activeId = index
    },
    casenameda () {
      switch(this.page)
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
          this.plandate = this.sgddetaildata.plan
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
      width:144rpx;
      text-align: center;
      border-radius: 0 0 10rpx 0;
      left:40rpx;
      top:0;
      z-index: 333;
      font-size: 14px;
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
      margin-bottom: 12rpx;
      image{
        width:100%;
        height:100%;
      }
      .imgs{
        position:relative;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%)
      }
    }
    p{
      margin: 12rpx 0;
      font-weight: bold;
    }
    .dhbox{
      border: 1px solid #ff6843;
      border-radius: 6rpx;
      width: 100%;
      height: 64rpx;
      margin-bottom: 20rpx;
      color: #ff2400;
      font-size: 14px;
      span{
        float: left;
        line-height: 64rpx;
      }
      img{
        width: 40rpx;
        float: left;
        margin: 16rpx 10rpx;
        height:30rpx;
      }
    }
    .service_box{
      height: 60rpx;
      text-align: left;
      overflow: hidden;
      font-size: 14px;
      .region{
        font-size: 12px;
        color:#716d6d ;
        line-height: 40rpx
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
      height: 180rpx;
      margin: 0 auto 60rpx;
      image{
        width:100%;
        height:100%;
      }
      p{
        margin-top: 8rpx;
      }
    }
  }
}

// 简绍
.introduce-wrap{
  background:#fff;
  padding: 40rpx 40rpx 74rpx;
  box-sizing: border-box;
  .introduce{
    .introduce-text{
      padding:20rpx;
      border:1px solid #fdcfcc;
      background:#fffcfc;
      font-size: 16px;
      color:#333333;
      word-break: break-all;
      word-wrap: break-word; 
      line-height:60rpx;
    }
  }
}
// 设计师团队
.sjsteam{
  background:#fff;
  padding: 4rpx;
  .sjsteam_box{
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 40rpx;
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
        font-size: 14px;
        color: rgb(114, 114, 114);
        margin: 40rpx;
      }
      button{
        background: #e72002;
        border: none;
        border-radius: 8rpx;
        width: 60%;
        height: 60rpx;
        color: #fff;
        font-size: 14px;
      }
      .img_box{
        border: 1px solid #eee;
        width: 100%;
        padding: 20rpx;
        box-sizing: border-box;
        height: 280rpx;
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
  padding:40rpx;
  .case{
    .case_img{
      width: 100%;
      overflow: hidden;
      .img_box{
        float: left;
        margin: 20rpx 0 0;
        border: 1px rgb(233, 233, 233) solid;
        background: #eeeeee;
        width: 48%;
        height: 240rpx;
        text-align: center;
        color: #fff;
        overflow: hidden;
        position: relative;
        image{
          max-width: 100%;
          max-height:100%;
        }
        div{
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          position: absolute;
          bottom: 0px;
          height: 80rpx;
          font-size: 18rpx;
          line-height: 80rpx;
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
  padding:40rpx;
  .type{
    border:1px solid #fdcfcc;
    .type-header{
      line-height: 80rpx;
      padding: 0 20rpx;
      background: #fcf7f7;
      border-bottom:1px solid #fdcfcc;
      font-size: 16px;
    }
    .type-img{
      width: 100%;
      padding: 24rpx;
      overflow: hidden;
      box-sizing: border-box;
      .img_box{
        background: #eeeeee;
        width: 48%;
        margin: 20rpx 0 0;
        height: 260rpx;
        text-align: center;
        color: #fff;
        float: left;
        border: 1px rgb(233, 233, 233) solid;
        position: relative;
        image{
          max-width: 100%;
          max-height:100%;
        }
        div{
          background: rgba(0, 0, 0, 0.3);
          position: absolute;
          bottom: 0;
          height: 80rpx;
          font-size: 18px;
          line-height: 80rpx;
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
