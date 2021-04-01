import VueRouter from 'vue-router';

// 导入Tabbar的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/member', component: MemberContainer }
    ],
    linkActiveClass: 'mui-active'// 设置链接激活时使用的 CSS 类名
});
export default router;