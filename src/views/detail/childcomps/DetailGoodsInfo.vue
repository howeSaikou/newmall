<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="goodsInfo">
      <div class="info-desc">
        <div class="start">
        </div>
        <div div class="desc">
          {{detailInfo.desc}}
        </div>
        <div class="end"></div> 
      </div>
      
      <div v-for="imglist in detailInfo.detailImage" :key="imglist">
          <div class="info-key">{{imglist.key}}</div>
          <div class="info-list">
            <img v-for="item in imglist.list" :key="item" :src="item"  @load="imgLoad" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data() {
		return {
		    counter: 0,
            imagesLength: 0
      }
    },
    methods: {
	    imgLoad() {
        // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
        if (++this.counter === this.imagesLength) {
          this.$emit('imageLoad');
        }
	    }
    },
    watch: {
	    detailInfo() {
	      // 获取图片的个数
            this.imagesLength = this.detailInfo.detailImage[0].list.length
	    }
    }
}
</script>

<style lang="less">
.goodsInfo{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc{
    padding: 0 15px;
    font-size: 14px;
}
.desc{
    padding: 15px 0;
}
.info-desc{
    .start, .end {
    width: 90px;
    height: 1px;
    background-color: #a5a3a3;
    position: relative;
}
    .start {
    float: left;
}
    .end {
    float: right;
}
}

.info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}

.info-desc .end::after {
    right: 0;
}
.info-desc::before,.info-desc::after{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
}
.info-key{
    padding: 10px 0 10px 15px;
    font-size: 15;
    color: #333;
}
.info-list img{
    width: 100%;
}
</style>