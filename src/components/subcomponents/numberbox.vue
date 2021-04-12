<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numberbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js';

export default {
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged(){
            // console.log(this.$refs.numberbox.value);
            this.$emit('getCount', parseInt(this.$refs.numberbox.value));
        }
    },
    props:["max"],
    watch: {
        'max': function(newVal, oldVal){
            mui('.mui-numbox').numbox().setOption('max', newVal);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>