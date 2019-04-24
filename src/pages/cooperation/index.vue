<template>
    <div class="hzms">
        <div class="pcWidth fix">
			<!-- 左边导航区域 -->
				<div class="help-left">
					<h2 class="left-tit">帮助中心</h2>
					<ul class="left-list">
						<li>
							服务协议
						</li>
						<li>
							隐私协议
						</li>
					</ul>
                    <div class="tel">
                        联系我们
                    </div>
				</div>
			<!-- 右侧内容区域 -->
				<div class="help-right h13">
					<div class="right-content">
						<div class="content-top">
							服务协议
						</div>
						<div class="content-mid">
                            <p class="MsoNormal">
                                <b>小狗钱钱用户注册协议</b><b></b> 
                            </p>
						</div>
					</div>
				</div>
			</div>
    </div>
</template>

<style lang="less" scoped>
.hzms{
    padding: 30px 0;
    .pcWidth{
        padding: 30px 10px;
        box-sizing: border-box;
        background:#fff;
    }
    .help-left{
        float: left;
        margin-right: 10px;
        width: 210px;
        background:#f8f6f4;
        border:1px solid #dcc8ac;
        .left-tit{
            height: 48px;
            line-height: 48px;
            font-size: 20px;
            color: #dd070b;
            padding-left: 10px;
        }
        .left-list{
            padding: 20px 10px;
            li{
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                padding-left: 20px;
                color:#666;
                background:url(../../assets/img/libg.png) no-repeat 10px center;
                background-size: 5px 5px;
                cursor: pointer;
                &.active{
                    color:#dd070b;
                }
            }
        }
        .tel{
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            padding-left: 50px;
            color:#666;
            background:url(../../assets/img/tel2.png) no-repeat 15px center;
            background-size: 20px 20px;
            cursor: pointer;
            border-top:1px solid #dcc8ac;
        }
    }
    .h13{
        min-height: 526px;
        width: 950px;
        float: left;
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
