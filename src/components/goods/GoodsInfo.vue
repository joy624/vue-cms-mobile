<template>
    <div class="goodsinfo-container">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
            <div class="ball" v-show="isFlag"></div> 
        </transition>
        
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品的名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner"> 
                    <p>市场价：<del>¥2399</del>&nbsp;&nbsp;销售价：<span class="price-now">¥2199</span></p>
                    <p>购买数量：<numberbox @getCount="getSelectedCount" :max="60"></numberbox></p>
                    <p><mt-button type="primary" size="small" >立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addGoods">加入购物车</mt-button></p>
                    
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="getDesc(1)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="getComment(1)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue';
import numberbox from '../subcomponents/numberbox.vue';
export default {
    data() {
        return{
            isFlag: false,
            selectedCount: 1
        }
    },
    methods: {
        getDesc(id) {
            this.$router.push({ name: "goodsdesc", params: {id}});
        },
        getComment(id) {
            this.$router.push({ name: "goodscomment", params: {id}});
        },
        addGoods(){
            this.isFlag = !this.isFlag;
        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;
            el.style.transform = "translate(93px, 230px)";
            el.style.transition = "all 0.5s ease";
            done();
        },
        afterEnter(el){
            this.isFlag = !this.isFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count;
            // console.log('父组件的值：' + this.selectedCount);
            console.log(this.selectedCount);
        }
    },
    components: {
        swiper,
        numberbox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .price-now{
        color: red;
        font-size: 18px;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 392px;
        left: 148px;
    }
}
</style>