import Vue from 'vue'
import App from './App.vue'


import landscapeComponents from 'landscape-components'
Vue.use(landscapeComponents)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')