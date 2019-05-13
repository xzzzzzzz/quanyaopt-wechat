<template>
    <div class="hzms">
        <div class="mWidth fix">
				<div class="help-right h13">
					<div class="right-content">
						<div class="content-top">
							服务协议
						</div>
						<div class="content-mid" v-html="cooperationContent.title">
                           
						</div>
						<div class="content-top">
							入驻流程
						</div>
						<div class="content-mid">
                            <img :src="baseUrl+cooperationContent.image" alt="">
						</div>
						<div class="content-top">
							入驻指南
						</div>
						<div class="content-mid" v-html="cooperationContent.text">
                            
						</div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data () {
        return{
            cooperationContent: {
                title: '',
                text: '',
                image: ''
            },
            baseUrl: 'https://www.qyaoq.com'
        }
    },
    mounted() {
        this.get()
    },
    methods: {
        async get(){
            const params={}
            const data = await this.$https(api.sjzx(), params);
            if(data.code == '2000'){
                let text = data.data.text
                let title = data.data.title
                let reg1=/&lt;/g;
                let reg2 = /&gt;/g;
                let newText = text.replace(reg1,'<').replace(reg2,'>')
                let newTitle = title.replace(reg1, '<').replace(reg2,'>')
                this.cooperationContent.text= newText
                this.cooperationContent.title= newTitle
                this.cooperationContent.image= data.data.image
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.hzms{
    padding: 30px 0;
    .h13{
        min-height: 526px;
        width:100%;
        .right-content{
            padding: 0 20px 20px;
            .content-top{
                height: 40px;
                line-height: 40px;
                font-size: 20px;
                border-bottom: 1px solid #f7f5f3;
                color: #383838;
                padding-left: 10px;
                border-left: 5px solid #dd070b;
            }
            .content-mid{
                padding-top: 30px;
                line-height: 30px;
                text-align: left;
            }
        }
    }
}
</style>
