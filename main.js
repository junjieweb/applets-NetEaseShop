import App from './App'
import store from "./store";

import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
    store
})
app.$mount()
