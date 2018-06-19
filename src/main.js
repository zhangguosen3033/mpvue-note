import Vue from 'vue'
import App from './App'
import flyio from 'flyio/dist/npm/wx'
Vue.prototype.$http = new flyio
// 一定要设置content - type 
Vue.prototype.$http.config.headers = {
    //公共请求头
    "Content-Type": "application/json; charset=utf-8",
    // "Authorization": "APPCODE 8b3b838de2dc42eebc1a5846f2d4e734",

 }

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
      pages: ['pages/detail/main', '^pages/index/main', 'pages/mine/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '日拱一卒,功不唐捐',
      navigationBarTextStyle: 'black'
    },
    //一个界面不允许用tabbar
    tabBar: {
      selectedColor: '#41b883',
      list: [{
        pagePath: 'pages/index/main',
        text: '每日一首',
        iconPath:'static/home.png',
        selectedIconPath:'static/home.png'
      },
      {
        pagePath: 'pages/mine/main',
        text: '更多',
        iconPath:'static/user-o.png',
        selectedIconPath:'static/user-o.png'
      }
    ]
    },
  }
}
