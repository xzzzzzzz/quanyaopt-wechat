<template>
    <div class="contact">
        <div class="contact-head">
            <h2>请联系我们</h2>
            <p>Please contact us</p>
        </div>
        <ul class="contact-content">
            <li>热线电话：021-52271027</li>
        </ul>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            cantactContent: ''
        }
    },
    mounted() {
        this.get()
    },
    methods: {
        async get() {
            const params = {}
            const data = await this.$https(api.contact(),'POST', params)
            if(data.code == '0'){
                this.cantactContent = data.data.clist
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.contact{
    .contact-head{
        text-align: center;
        line-height: 25px;
        margin : 100rpx 0 30rpx;
        h2{
            font-size: 30px;
            color: #000;
        }
        p{
            font-size:18px;
            color:#b5b5b5;
        }
    }
    .contact-content{
        padding: 0 40rpx;
        li{
            width: 100%;
            height:80rpx;
            line-height: 80rpx;
            background:#e9e9e9;
            text-align: center;
            font-size: 16px;
            color:#383838;
            margin-bottom:20rpx;
        }
    }
}
</style>

