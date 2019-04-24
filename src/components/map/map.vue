<template>
    <div class="">
        <baidu-map class="map" ak="YOUR_APP_KEY" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
    </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
export default {
    data () {
        return {
            YOUR_APP_KEY: 'kTll1wUqkZ32gFxjiNTwzxU3aXPDOujg',
            center: {lng: 0, lat: 0},
            zoom: 11
        }
    },
    methods: {
        handler ({BMap, map}) {
            this.center.lng = 121.479103
            this.center.lat = 31.231236
            this.zoom = 11
        }
    },
    components: {
        BaiduMap
    }
}
</script>

<style lang="less" scoped>
.map{
  width: 775px;
  height: 288px;
  /deep/ .anchorBL{
    display: none;
}
}


</style>

