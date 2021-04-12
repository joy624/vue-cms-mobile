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
// import { Header,Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 引入vue-preview插件,实现图片预览
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 设置路由的根路径
// Vue.http.options.root = '';
// 全局设置post 表单数据格式
// Vue.http.options.emulateJSON = true;

// 导入时间插件
import moment from 'moment';
// 定义全局的时间过滤器
Vue.filter('dateFormat', function(datastr, pattern='YYYY-MM-DD hh:mm:ss'){
    return moment(datastr).format(pattern);
});


// 实例化Vue
let vm = new Vue({
    el: "#app",
    render: e => e(app),
    router // 挂载路由对象到vm的实例上
});







