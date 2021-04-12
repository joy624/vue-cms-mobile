<template>
    <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <!-- 此处循环获取的轮播图 -->
        </mt-swipe>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
// 轮播图样式
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1){
            background-color: yellow;
        }
        &:nth-child(2){
            background-color: #e92322;
        }
        &:nth-child(3){
            background-color: blue;
        }
    }
}
</style>