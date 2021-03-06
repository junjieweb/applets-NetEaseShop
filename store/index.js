import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import cart from './modules/cart'

// 声明使用Vuex的拓展库
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
    modules: {
        home,
        cart
    }
})

export default store
