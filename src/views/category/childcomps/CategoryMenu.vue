<template>
  <scroll class="category-menu">
      <div class="menu-item" v-for="(item,index) in categoryList" :key="index" @click="itemClick(index)" 
      :class="{active:currentIndex === index}">
          {{item.title}}
      </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
  data(){
      return{
        currentIndex:0
      }
  },
  props:{
      categoryList:{
          type:Array,
          default(){
              return []
          }
      }
  },

  methods:{
      itemClick(index){
          this.currentIndex = index;
          this.$emit('getSubcategory',index)
      }
  }
}
</script>

<style lang="less" scoped>
.category-menu{
    display: flex;
    flex-direction: column;
    flex: 1;
    height: calc(100vh - 93px);
    overflow: hidden;
}
.menu-item{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    background-color: #f6f6f6;
    border-bottom: solid 1px #fff;
    active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
}
</style>