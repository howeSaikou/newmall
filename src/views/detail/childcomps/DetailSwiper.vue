<template>
  <div class="block">
    <el-carousel trigger="click" indicator-position="none" autoplay="true" arrow="always">
      <el-carousel-item class="D-swiper-item" v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
    props:{
        topImages:{
            type:Array,
            default(){
                []
            }
        }
    }
}
</script>

<style>
.D-swiper-item {
    height: 300px;
}
.D-swiper-item img{
    width: 100%;
}

</style>