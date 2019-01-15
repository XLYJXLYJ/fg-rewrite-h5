<template>
    <div class="how_to"></div>
</template>
<script>
import IsWinXin from '@/common/IsWinXin'
export default {
    mounted() {
        IsWinXin.IsWinXin()
    }
}
</script>
<style lang="less" scoped>
.how_to{
    width: 640px;
    height: 100%;
    position: absolute;
    background:url("../assets/hrefimage.png") no-repeat;
    background-position: center center;
    background-color: #666666;
    background-size: 100%;
    overflow-y:auto;
}
</style>
