<template>
  <div class="block">
    <el-carousel trigger="click" height="150px" >
      <el-carousel-item class="swiper-item" v-for="item in banners" :key="item">
        <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
    props:{
        banners:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
      return{
        isLoad:false
      }
    },

    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('SwiperImgLoad')
          this.isLoad=true
        }
      }
    }
}
</script>

<style>
.swiper-item img{
  width: 100%;
  height: 150px;
}
</style>