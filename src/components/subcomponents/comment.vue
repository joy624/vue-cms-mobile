<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要发表的内容（最多发表120个字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>
        <!-- 评论列表 -->
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in cmtinfo" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name}}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">{{ item.content === "undefined" ? "此用户很懒，啥都没留下" : item.content }}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';

export default {
    data(){
        return{
            pageindex: 1,// 默认显示第1页数据
            cmtinfo: [{user_name: "匿名用户", add_time: 0, content: "李白醉酒"},
            {user_name: "小李", add_time:1, content: "锄禾日当午"},
            {user_name: "小李", add_time:2, content: "undefined"},
            {user_name: "哈哈", add_time:3, content: "哈哈哈哈，hahahh"},
            {user_name: "小白", add_time:4, content: "劝君更尽一杯酒，西出阳关无故人！"}],
            msg: ""
        }
    },
    created(){
        // this.getComments();
    },
    methods: {
        // getComments(){
        //     this.$http.get("api/getcomments/:"+ this.id + "?pageindex="+ this.pageindex).then(result => {
        //         if(result.body.status === 0){
        //             //this.cmtinfo = result.body.message;
        //             // 每当获取新评论时，不要把老数据清空覆盖，而是将老数据与新数据进行拼接
        //             this.cmtinfo = this.cmtinfo.concat( result.body.message );
        //         }else {
        //             Toast('获取评论失败');
        //         }
        //     });
        // },
        getMore(){
        //     this.pageindex ++;
        //     this.getComments();
        },
        postCmt(){
            // this.$http.post('api/postComment/'+ this.$route.params.id, { content: this.msg.trim() }).then(result => {
            //     if(result.body.status === 0){
            //         // 拼接评论对象
            //         let cmt = {user_name: '匿名用户', add_time: new Date(), content: this.msg}.trim();
            //         this.cmtinfo.unshift(cmt);
            //         this.msg = '';
            //     }else{

            //     }
            // });
        },
        
    },
    props: ["id"]
    
}
</script>
<style lang="scss" scoped>
.cmt-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        .cmt-item {
            margin: 5px 0;
            font-size: 13px;
            .cmt-title {
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>