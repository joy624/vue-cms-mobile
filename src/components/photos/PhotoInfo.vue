<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="thumbimg" @close="handleClose"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content">
            {{ photoinfo.content }}
        </div>
        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
// 导入 评论子组件
import comment from '../subcomponents/comment.vue';
export default {
    data(){
        return{
            id: this.$route.params.id,
            photoinfo: {id: 1, add_time: new Date(), click: 12, content: '不要的框架放得开房间', title: '简约素食'},
            thumbimg: [
            { src: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', msrc: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', w: 600, h: 400},
            { src: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', msrc: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', w: 600, h: 400},
            { src: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', msrc: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', w: 600, h: 400},
            { src: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', msrc: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', w: 600, h: 400}]
        }
    },
    created() {
        this.getPhotoInfo();
        this.getThumbImg();
    },
    methods: {
        getPhotoInfo() {
            // this.$http.get( 'api/getimageInfo/' + this.id ).then(result => {
            //     if(result.body.status === 0){
            //         this.photoinfo = result.body.message[0];
            //     }
            // });
        },
        getThumbImg() {
            // this.$http.get('api/getimageInfo/' + this.id ).then( result => {
            //     if( result.body.status === 0 ){
            //          this.thumbimg = result.body.message[0];
            //     }
            // });
        },
        handleClose () {
            console.log('close event')
        }
    },
    components: {// 注册子组件
        'cmt-box': comment
    }
}
</script>
<style lang="scss" scoped>
.photoinfo-container {
    padding: 10px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs>vue-preview{
        width: 50%;
    }
}

</style>