<template>
  <div class="sjsList">
    <card :CardDate='CardDate' @viewDetails='viewDetails' @clicklist='cardclicklist'></card>
  </div>
</template>

<script>
import api from '@/api/api'
import card from '@/components/mcard/card'
export default {
  data () {
    return {
      CardDate: []
    }
  },
  mounted () {
    this.requestlist()
  },
  methods: {
    async requestlist () {
      const params = {
        q_id: ''
      }
      const date = await this.$https(api.dsfjglils(),'POST', params)
      if (date.code === '2000') {
        this.CardDate=date.data
      } else {
        this.$message.error('获取列表失败，请稍后再试');
      }
    },
    viewDetails (val) {
      alert(val)
    },
    cardclicklist (date) {
      const url = '/pages/supervisedetails/main?ID='+date.id
      this.jump(url)
    }
  },
  components: {
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sjsList{
  width: 100%;
  margin: 0 auto;
}
</style>
