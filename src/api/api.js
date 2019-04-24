/* jshint esversion: 6 */
//let baseUrl = '/api'
// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://'+ window.location.host + '' : '/api'
const baseURL = process.env.API_BASE_URL
// 启动页
export const startup = {
  // 签到
  // signin: '/transfer/read/getBrowseTimes'
}
export default {
  home () { // 首页1
    return `${baseURL}/index/index/basic`
  },
  home2 () { // 首页品牌施工、优质建材
    return `${baseURL}/index/index/hotImage`
  },
  city () { // 城市接口
    return `${baseURL}/index/index/city`
  },
  news () { // 说说和公告详情
    return `${baseURL}/index/index/detail`
  },
  sgdlils () { // 施工管理列表
    return `${baseURL}/index/build/index`
  },
  sgddetail () { // 施工管理列表详情
    return `${baseURL}/index/build/detail`
  },
  dsfjglils () { // 登录第三方监管列表
    return `${baseURL}/index/supervise/index`
  },
  dsfjgdetail () { // 登录第三方监管列表详情
    return `${baseURL}/index/supervise/detail`
  },
  sjslils () { // 设计师列表
    return `${baseURL}/index/Plan/index`
  },
  sjsdetail () { // 设计师列表详情
    return `${baseURL}/index/Plan/detail`
  },
  zxgslils () { // 装修公司列表
    return `${baseURL}/index/decorate/index`
  },
  zxgsdetail () { // 装修公司列表详情
    return `${baseURL}/index/decorate/detail`
  },
  clgyslils () { // 材料供应商列表
    return `${baseURL}/index/stuff`
  },
  clgysdetail () { // 材料供应商列表详情
    return `${baseURL}/index/stuff/detail`
  },
  universityList () { // 装修大学堂
    return `${baseURL}/index/school/index`
  },
  universitydetails () { // 装修大学堂详情
    return `${baseURL}/index/school/detail`
  }


}
