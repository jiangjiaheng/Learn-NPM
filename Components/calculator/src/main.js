import Vue from 'vue'
import App from './App.vue'

import myComponents from '../components/index'

Vue.use(myComponents)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')