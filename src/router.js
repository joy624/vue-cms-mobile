import VueRouter from 'vue-router';

// 导入Tabbar的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photos/PhotoList.vue';
import PhotoInfo from './components/photos/PhotoInfo.vue';
import GoodsList from './components/goods/GoodsList.vue';
import GoodsInfo from './components/goods/GoodsInfo.vue';
import GoodsDesc from './components/goods/GoodsDesc.vue';
import GoodsComment from './components/goods/GoodsComment.vue';

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/member', component: MemberContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
    ],
    linkActiveClass: 'mui-active'// 设置链接激活时使用的 CSS 类名
});
export default router;