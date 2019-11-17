import Vue from 'vue'
import App from './App.vue'

// // // 导入组件库
// import MyComponents from '../packages/index'
// // // 注册组件库
// Vue.use(MyComponents)

import landscapeComponents from 'landscape-components'
Vue.use(landscapeComponents)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')