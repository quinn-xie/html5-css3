import Vue from 'vue'
import App from './App.vue'
import router from "./router" // 引入路由
import "./assets/iconfont/iconfont.css" // 引入iconfont
import "./assets/css/common.scss" // 引入公共样式

// 引入axios
import axios from './untils/http'; 
Vue.prototype.$axios = axios;  

Vue.config.productionTip = false
//开启debug模式
Vue.config.debug = true

// 动态修改vue-cli标题钩子函数
router.beforeEach((to, from, next) => {
  if(to.meta.title){
      document.title = to.meta.title
  }else{
      document.title = 'CSS3 EFFECTS'
  }
  next()
})


new Vue({
  el: '#app',
  router,  
  render: h => h(App)
}).$mount('#app')
