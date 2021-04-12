<template>
    <div>
        <!-- 分类导航条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
        <!-- 分类对应的图片列表 -->
        <ul class="info">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info-zhaiyao">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js';
export default {
    data(){
        return {
            cates: [{title: '全部', id: 0},{title: '热点', id: 1},{title: '社会', id: 2},{title: '娱乐', id: 3},
            {title: '前端', id: 4},{title: '大数据', id: 5},{title: '自然', id: 6},{title: '人文', id: 7}],
            list: [
                {id: 1, title: '李白的醉酒诗篇', img_url: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg', zhaiyao: '天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用天生我才必有用'},
                {id: 2, title: '李白的醉酒诗篇', img_url: 'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg', zhaiyao: '天生我才必有用'},
                {id: 3, title: '李白的醉酒诗篇', img_url: 'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg', zhaiyao: '天生我才必有用'},
                {id: 4, title: '李白的醉酒诗篇', img_url: 'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg', zhaiyao: '天生我才必有用'}
            ]
        }
    },
    created(){
        this.getAllCategory();
        this.getPhotoListByCate(0);
    },
    mounted() {// 当组件中的 DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {
        getAllCategory() {// 获取所有分类
            // this.$http.get().then(result => {
            //     this.cates = result.body.message.unshift({ title: '全部', id: 0});
            // });
        },
        getPhotoListByCate(cid) {
            // this.$http.get(''+ cid).then(result => {
            //     if(result.body.status === 0){
            //         this.list = result.body.messages;
            //     }
            // });
        }
    }
}
</script>
<style lang="scss" scoped>
* {
    touch-action: pan-y;
}
.info {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
        position: relative;
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        img {
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info-zhaiyao{
            position: absolute;
            bottom: 0;
            text-align: left;
            color: #fff;
            width: 100%;
            background-color: rgba(0, 0 ,0, 0.3);
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
    
}
</style>