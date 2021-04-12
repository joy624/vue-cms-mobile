<template>
    <div class="news-info-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发布时间：{{ newsinfo.add_time | dateFormat }} </span>
            <span>点击次数：{{ newsinfo.click }}</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html=" newsinfo.content ">
        </div>
        <!-- 评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
// import { Toast } from 'mint-ui';
// 导入 评论子组件
import comment from '../subcomponents/comment.vue';

export default {
    data(){
        return{
            id: this.$route.params.id,
            newsinfo: {id: 1, title: 'Vue的学习', add_time: new Date(), content: '学习不是一蹴而就的', click: 10}
        }
    },
    created(){
        // this.getNewsInfo();
    },
    methods: {
        // getNewsInfo(){
        //     this.$http.get(''+this.id).then( res => {
        //         if(res.body.status === 0){
        //             this.newsinfo = res.body.msg[0];
        //         }else{
        //             Toast('获取新闻失败');
        //         }
        //     });
        // }
    },
    components: {// 注册子组件
        'comment-box': comment
    }
}
</script>
<style lang="scss" scoped>
.news-info-container{
    padding: 0 5px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        font-size: 12px;
        color: rgb(146, 145, 145);
    }
}
</style>