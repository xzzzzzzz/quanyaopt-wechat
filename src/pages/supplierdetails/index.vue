<template>
  <div>
    <carddetails :sgddetaildata='sgddetaildata' :page='4' v-if="sgddetaildata!==''"></carddetails>
  </div>
</template>

<script>
import api from '@/api/api'
import carddetails from '@/components/mdetails/details'
export default {
  data () {
    return {
      sgddetaildata: ''
    }
  },
  mounted () {
    let id = this.$root.$mp.query.ID
    this.requestdetail(id)
  },
  methods: {
    async requestdetail (ID) {
      const params = {
        id: ID
      }
      const date = await this.$https(api.clgysdetail(),'POST', params)
      if (date.code === '2000') {
        this.sgddetaildata = date.data
      }
    }
  },
  components: {
    carddetails
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
