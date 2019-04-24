<template>
  <div class="supplier">
    <div class="type-wrapper">
      <div class="type mWidth">
        <span :class='{"active": activeId === -1}' @click="type(-1)">全部</span>
        <span v-for="(item,index) in CardDate" :key="index" @click="type(index)" :class='{"active": activeId == index}'>{{item.type}}</span>
      </div>
    </div>
    <div class="sp-list mWidth fix">
      <div class="list-item" @click="cardclicklist(item)" v-for="(item,index) in CardDatelist" :key="index">
        <div class="img_box"><img class="imgs" :src=baseUrl+item.logo alt=""></div>
        <div class="text">
          {{item.seller_name}}
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
      activeId: -1,
      CardDate: [],
      CardDatelist: [],
      CardDatelist_qb: [],//全部数据
    }
  },
  mounted () {
    this.requestlist()
  },
  methods: {
    async requestlist () {
      const params = {}
      const date = await this.$https(api.clgyslils(),'POST', params)
      if (date.code === '2000') {
        this.CardDate=date.data
        for(let i=0; i<this.CardDate.length; i++){
          for(let x=0; x<this.CardDate[i].info.length; x++){
            this.CardDatelist_qb.push(this.CardDate[i].info[x])
          }
        }
         this.CardDatelist = this.CardDatelist_qb
      } else {
        this.$message.error('获取列表失败，请稍后再试');
      }
    },
    cardclicklist (date) {
      const url = '/pages/supplierdetails/main?ID='+date.id
      this.jump(url)
    },
    type(type) {
      this.activeId = type
      if(type === -1){
        this.CardDatelist = this.CardDatelist_qb
        return
      }
      this.CardDatelist = this.CardDate[type].info
    }
  },
}
</script>
<style lang="scss" scoped>
@import './static/styles/global.scss';
.supplier{
  .type-wrapper{
    background:#fff;
    padding:40rpx;
    .type{
      border:1px solid #f7f7f7;
      // padding:px2rem(10);
      overflow: hidden;
      box-sizing: border-box;
      span{
        padding:10rpx 20rpx;
        color:#686868;
        font-size: 14px;
        margin:10rpx;
        display: inline-block;
        cursor: pointer;
      }
      span.active{
        background:red;
        color:#fff;
      }
    }
  }
  .sp-list{
    padding: 40rpx;
    .list-item{
      background:#fff;
      width: 48%;
      padding: 30rpx 40rpx 0px;
      box-sizing:border-box;
      float: left;
      border: 1px solid #fdd0cd;
      margin-bottom:20rpx;
      font-size: 14px;
      .img_box{
        height:160rpx;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
      }
      .imgs{
        position:relative;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        max-width:100%;
        max-height:100%;
      }
      .text{
        line-height: 120rpx;
        font-size: 16px;
        height:140rpx;
        text-align: center;
      }
      &:hover{
        border-color: #ff7456;
        box-shadow: 1px 3px 5px rgba(255,116,86, 0.5);
      }
      &:nth-child(4n){
        margin-right:0;
      }
      &:nth-child(2n){
        float: right;
      }
    }
  }

}
</style>
