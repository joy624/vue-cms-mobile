<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist.msg" :key="item.id">
                <router-link class="mui-navigate-right" :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" src="https://www.dcloud.net.cn/hellomui/images/muwu.jpg">
                    <div class="mui-media-body">
                        <h3>{{ item.title }}</h3>
                        <p class='mui-ellipsis'>
                            <span>发布时间：{{ item.add_time | dateFormat('YYYY-MM-DD') }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
// import { Toast } from 'mint-ui';

export default {
    data(){
        return{
            newslist: {
                state: 0,
                msg: [
                    {id: 1, title: 'Vue的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 10, img_url: ''},
                    {id: 2, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 3, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 4, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 5, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 6, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 7, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 8, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 9, title: 'PHP的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 1, img_url: ''},
                    {id: 10, title: '前端的学习', add_time: new Date(), zhaiyao: '学习不是一蹴而就的', click: 8, img_url: ''}
                ]
            }
        }
    },
    created(){
        // this.getNewsList();
    },
    methods: {
        // getNewsList(){
        //     this.$http.get('').then(res => {
        //         if(res === 0){
        //             this.newslist = res.msg;
        //         }else {
        //             Toast('获取新闻列表失败！！！');
        //         }
        //     });
        // }
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view {
    li{
        h3 {
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>