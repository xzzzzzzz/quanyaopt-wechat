<template>
    <card-details :sgddetaildata='sgddedata' :page='0' v-if="sgddedata !== ''"></card-details>
</template>

<script>
import api from '@/api/api'
import cardDetails from '@/components/mdetails/details'
export default {
  data () {
    return {
      sgddedata: ""
    }
  },
  components: {
    cardDetails
  },
  mounted () {
      this.detail()
  },
  methods: {
    async detail () {
      const _this= this
      const params = {
        id: _this.$root.$mp.query.ID
      }
      const data = await this.$https(api.sgddetail(),'POST', params)
      if(data.code == '2000'){
          _this.sgddedata = data.data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dateunll{
  height: 680rpx;
  color: #333;
  font-size: 30px;
  text-align: center;
  line-height: 400rpx;
  i{
    margin: 0 40rpx;
    font-size: 40px;
  }
}
</style>
