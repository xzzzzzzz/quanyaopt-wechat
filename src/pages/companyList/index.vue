<template>
  <div class="zxgslier" v-if="CardDate !== ''">
    <div class="card" v-for="(time, index) in CardDate" :key="index" @click="cardclicklist(time)">
      <div class="img_box"><img class="imgs" :src=baseUrl+time.logo alt="">
      </div>
      <p>{{time.seller_name}}</p>
      <div class="dhbox"><img :src=icon alt="" ><span>{{time.phone}}</span></div>
      <div class="service_box">
        <div>        
            <span class="region">地址：</span>
            <span >{{time.address}}</span>
        </div>
        <div>
            <span  class="region">服务区域：</span>
            <span>{{time.region}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'
export default {
  data () {
    return{
      baseUrl: 'http://www.qyaoq.com',
      icon: '/static/img/dh.png',
      CardDate: ''
    }
  },
  mounted () {
    this.requestlist()
    console.log(this.CardDate)
  },
  methods: {
    async requestlist () {
      const params = {}
      const date = await this.$https(api.zxgslils(),'POST', params)
      if (date.code === '2000') {
        this.CardDate=date.data
      }
    },
    cardclicklist (date) {
      let url = '/pages/companydetails/main?ID='+date.id+''
      this.jump(url)
    },
  },
}
</script>
<style lang="scss" scoped>
@import './static/styles/global.scss';
.zxgslier{
  width: 100%;
  padding: 40rpx;
  box-sizing: border-box;
  overflow: hidden;
.card{
  width: 49%;
  float: left;
  background: #fcf7f7;
  padding: 30rpx;
  box-sizing:border-box;
  border: 1px solid #fdd0cd;
  font-size: 16px;
  .img_box{
    height:120rpx;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 4rpx;
    box-sizing:border-box;
  }
  .imgs{
    position:relative;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    max-width:100%;
    max-height:100%;
  }
  p{
    font-weight: bold;
    background: rgba(255, 255, 255, 0.5);
    padding: 32rpx 0;
    margin: 0;
    text-align: center;
  }
  .dhbox{
    border: 1px solid #ff6843;
    border-radius: 6px;
    height: 60rpx;
    margin-bottom: 20rpx;
    color: #ff2400;
    font-size: 10px;
    span{
      float: left;
      line-height: 64rpx;
    }
    img{
      width: 40rpx;
      float: left;
      margin: 16rpx 10rpx;
      height: 30rpx;
    }
  }
  .service_box{
    min-height: 200rpx;
    text-align: left;
    overflow: hidden;
    font-size: 10px;
    .region{
      font-size: 14px;
      color:#716d6d ;
      line-height: 40rpx
    }
  }
  &:nth-child(2n){
    float: right;
  }
}
}
</style>
