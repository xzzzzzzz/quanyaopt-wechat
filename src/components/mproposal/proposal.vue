<template>
    <div class="proposal mWidth">
        <div class="pageName">
            <h4>{{typeName}}</h4>
        </div>
        <div class="demo-input">
            <div class="type">姓名：</div>
            <input type="text" v-model="ruleForm.name" placeholder="请输入姓名">
        </div>
        <div class="demo-input">
            <div class="type">手机号码：</div>
            <input type="text"  v-model="ruleForm.iphone" placeholder="请输入手机号码">
        </div>
        <div class="demo-input" v-if="type==2">
            <div class="type">投诉公司：</div>
            <input type="text" v-model="ruleForm.company" placeholder="请输入投诉公司名称">
        </div>
        <div class="demo-input textar">
            <div class="type">{{typeName}}内容</div>
            <textarea name="textar" id="textar" :placeholder="'请输入'+typeName+'内容'" v-model="ruleForm.textarea"></textarea>
        </div>
        <div class="btn">
            <button @click="sumbit">确定</button>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    props: ['type','pageName'],
    data () {
        return{
            typeName: '',
            ruleForm: {
                name:'',
                iphone: '',
                company: '',
                textarea: '',
            }
        }
    },
    mounted() {
        if(this.type == 1){
            this.typeName = '建议'
        }
        if(this.type == 2){
            this.typeName = '投诉'
        }
        if(this.type == 3){
            this.typeName = '咨询'
        }
    },
    methods: {
        showToast(value) {
            wx.showToast({
                title: value,
                icon: 'none',
                duration: 2000
            })
            setTimeout(() => {
                wx.hideToast()
                wx.switchTab({
                    url: '/pages/home/main'
                })
            },2000)
        },
        toJump(url) {
            wx.navigateTo({url})
        },
        async sumbit () {
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
            const that = this
            let name = this.ruleForm.name
            let iphone = this.ruleForm.iphone
            let company = this.ruleForm.company
            let textarea = this.ruleForm.textarea
            if(this.type == 2){
                if(name == '' || iphone == '' || company == '' || textarea == ''){
                    this.showToast('请补全信息')
                }
            }else{
                if(name == '' || iphone == '' || textarea == ''){
                    this.showToast('请补全信息')
                }
            }
            if(!reg.test(iphone)){
                this.showToast('手机号码格式不正确')
            }else{
                const params= {
                    type: this.type,
                    name: this.ruleForm.name,
                    phone: this.ruleForm.iphone,
                    company: this.ruleForm.company,
                    title: this.ruleForm.textarea
                }
                const data = await this.$https(api.inforadd(), 'POST',params);
                if(data.code == '2000'){
                    this.showToast(this.typeName+'成功')
                }else{
                    this.showToast(this.typeName+'失败')
                }
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.proposal{
    padding:20rpx 40rpx 20rpx 20rpx;
    box-sizing: border-box;
    .pageName{
        text-align:  center;
        line-height: 40rpx;
        font-size: 20px;
        padding-bottom: 40rpx;
    }
    .demo-input{
        height: 80rpx;
        line-height: 80rpx;
        margin-bottom: 30rpx;
        .type{
            float: left;
            width:30%;
            font-size: 16px;
            text-align: center;

        }
        input{
            float: left;
            width:70%;
            height:100%;
            box-sizing: border-box;
            padding:0 20rpx;
            border:1px solid #cccccc;
            font-size: 16px;
        }
        #textar{
            float: left;
            width:70%;
            height:100%;
            box-sizing: border-box;
            padding: 10rpx;
            font-size: 16px;
            border:1px solid #cccccc;
        }
        &.textar{
            height:130rpx;
        }
    }
    .btn{
        button{
            background:#f88715;
            color:#fff;
        }
    }
}
</style>


