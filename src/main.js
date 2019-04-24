import Vue from 'vue'
import App from './App'

import api from './mixins'

const jump = (url) => {
    wx.navigateTo({url})
}
Vue.prototype.$https = api
Vue.prototype.jump = jump
Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()
