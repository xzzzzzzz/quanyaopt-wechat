<template>
  <div class="cardlist">
    <div class="card" v-for="(time, index) in CardDate" :key="index" @click="clicklist(index)">
      <div class="img_box"><img class="imgs" :src=baseUrl+time.logo alt=""></div>
      <p>{{time.seller_name}}</p>
      <div class="dhbox"><img :src=icon alt="" ><span>{{time.phone}}</span></div>
      <div class="service_box">
        <span v-if="page === 'sjs'">擅长风格：</span>
        <span v-else style="font-weight: bold;">服务区域：</span>
        <span class="region">{{time.region}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://www.qyaoq.com',
      icon: '/static/img/dh.png',
      src: '/static/img/photo.png',
    }
  },
  props: {
    CardDate: {
      type: Array,
      default: ''
    },
    page: {
      type: String,
      default: ''
    }
  },
  methods: {
    clicklist (index) {
      this.$emit('clicklist', this.CardDate[index])
    }
  },
  onShow() {
    
    console.log(this.CardDate)
  }
}
</script>

<style lang="scss" scoped>
.cardlist{
  padding: 20rpx;
  overflow: hidden;
}
.card{
  width: 49%;
  float: left;
  background: #fcf7f7;
  padding: 15rpx 15rpx;
  box-sizing:border-box;
  border: 1px solid #fdd0cd;
  font-size: 16px;
  .img_box{
    height:114rpx;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 2rpx;
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
    margin: 12rpx 0;
    font-weight: bold;
    text-align: center;
  }
  .dhbox{
    border: 1px solid #ff6843;
    border-radius: 6rpx;
    height: 50rpx;
    margin-bottom: 10rpx;
    color: #ff2400;
    font-size: 13px;
    span{
      float: left;
      line-height: 52rpx;
    }
    img{
      width: 40rpx;
      float: left;
      margin: 8rpx 10rpx;
      height: 30rpx;
    }
  }
  .service_box{
    height: 100rpx;
    text-align: left;
    overflow: hidden;
    font-size: 14px;
    .region{
      font-size: 12px;
      color:#716d6d ;
      line-height: 20rpx;
    }
  }
  &:nth-child(2n){
    float: right;
  }
}
</style>
