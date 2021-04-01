// 导入Vue
import Vue from 'vue';

// 导入App组件‘
import app from './App.vue';

// 导入mint-ui 的css样式
import 'mint-ui/lib/style.css';
// 导入mui 的css样式
import './lib/mui/css/mui.min.css';

// 按需导入mint-ui的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 实例化Vue
let vm = new Vue({
    el: "#app",
    render: e => e(app)
});







