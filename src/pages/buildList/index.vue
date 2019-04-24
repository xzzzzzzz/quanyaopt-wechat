<template>
  <div class="mWidth sgdList">
    <card :CardDate='CardDate' @viewDetails='viewDetails' @clicklist='cardclicklist' ></card>
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
     const data = await this.$https(api.sgdlils(),'POST', params)
     if(data.code == '2000'){
       this.CardDate = data.data
     }
      
    },
    viewDetails (val) {
      alert(val)
    },
    cardclicklist (date) {
        let url = '/pages/builddetails/main?ID='+date.id+''
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

</style>
