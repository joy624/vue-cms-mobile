// 导入Vue
import Vue from 'vue';
// 导入路由的依赖包、安装路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入 vue-resource、并安装，用于实现ajax请求
import VueResource from 'vue-resource';
Vue.use(VueResource);

// 导入自定义的 路由模块
import router from './router.js';

// 导入App组件‘
import app from './App.vue';

// 导入mint-ui 的css样式
import 'mint-ui/lib/style.css';
// 导入mui 的css样式 和扩展的 css样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 按需导入mint-ui的组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 实例化Vue
let vm = new Vue({
    el: "#app",
    render: e => e(app),
    router // 挂载路由对象到vm的实例上
});







