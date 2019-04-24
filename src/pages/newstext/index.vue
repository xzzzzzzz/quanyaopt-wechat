<template>
    <div class="new-content mWidth">
        <div class="content-head">
            <h2 class="">{{title}}</h2>
            <!-- <p class="fb-time">发布时间：2018-09-30</p> -->
        </div>
        <div class="content-main" v-html="newtext">
			
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            newtext: '',
            title: ''
        }
    },
    mounted () {
        this.title = decodeURI(this.$root.$mp.query.title)
        this.getDate()
    },
     methods : {
        async getDate() {
            const params= {id:this.$root.$mp.query.ID}
            const data = await this.$https(api.news(),'POST',params)
            if(data.code == '2000'){
                let text = data.data[0].text
                let reg1=/&lt;/g;
                let reg2 = /&gt;/g;
                let newText = text.replace(reg1,'<').replace(reg2,'>')
                this.newtext = newText
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.new-content{
    padding: 20px;
    margin-bottom: 20px;
    background: #fff;
    box-sizing: border-box;
    .content-head{
        text-align: center;
        margin-top: 20px;
        h2{
            font-size:20px;
            color: #eb613d;
            font-weight: bold;
            margin-bottom: 17px;
        }
        p{
            font-size: 14px;
        }
    }
    .content-main{
        margin-top: 20px;
        width: 100%;
        overflow: hidden;
        line-height: 30px;
        min-height: 400px;
    }
}
</style>
