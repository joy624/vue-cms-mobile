<template>
    <div class="goodslist-container">
        <div class="goods-item" @click="getGoodsInfo(1)">
            <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/136033/23/19938/227470/5fd62897E3fd2cee8/7c191e7fe735a28b.jpg!q70.jpg.dpg" alt="">
            <h3 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
            <div class="info">
                <div class="info-price">
                    <span class="info-price-new">¥2195</span>
                    <span class="info-price-old">¥2499</span>
                </div>
                <div class="info-sell">
                    <span>热卖中</span>
                    <span>剩200件</span>
                </div>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/136033/23/19938/227470/5fd62897E3fd2cee8/7c191e7fe735a28b.jpg!q70.jpg.dpg" alt="">
            <h3 class="title">realme 真我Q2 4800万像素 120Hz畅速屏 双5G天玑800U 冲浪蓝孩 6GB+128GB 30W闪充 手机 OPPO提供售后支持</h3>
            <div class="info">
                <div class="info-price">
                    <span class="info-price-new">¥2195</span>
                    <span class="info-price-old">¥2499</span>
                </div>
                <div class="info-sell">
                    <span>热卖中</span>
                    <span>剩200件</span>
                </div>
            </div>
        </div>
        <div class="goods-item">
            <img src="" alt="">
            <h3 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
            <div class="info">
                <div class="info-price">
                    <span class="info-price-new">¥2195</span>
                    <span class="info-price-old">¥2499</span>
                </div>
                <div class="info-sell">
                    <span>热卖中</span>
                    <span>剩200件</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods: {
        getGoodsInfo(id) {
            // this.$router.push({ path:'/home/goodsinfo/id',params: {id}});
            this.$router.push({name: "goodsinfo",params: {id}});
        }
    }
}
</script>
<style lang="scss" scoped>
.goodslist-container {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item {
        width: 49%;
        box-shadow: 0 0 8px #ccc;
        margin-bottom: 6px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info {
            background-color: #eee;
            font-size: 12px;
            padding: 5px;
            color: #9e9c9c;
            .info-price{
                .info-price-new{
                    color: red;
                    font-size: 18px;
                    font-weight: bold;
                }
                .info-price-old{
                    text-decoration: line-through;
                    margin-left: 10px;
                }
            }
            .info-sell{
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}

</style>