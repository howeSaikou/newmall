<template>
  <nav-bar>
      <template v-slot:left>
          <div @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
      </template>
      <template v-slot:center>
          <div class="title">
              <div  v-for="(item,index) in titles" class="title-item" :key="item" 
              :class="{active:currentIndex==index}"
              @click="titleClick(index)">{{item}}</div>
          </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  data(){
      return{
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
    },
  components: { NavBar },
  methods:{
      titleClick(index){
        this.currentIndex=index;
        this.$emit('titleClick',index);
      },
      backClick(){
          this.$router.back()
      },
  }
}
</script>

<style lang="less" scoped>
.title{
    display: flex;
}
.title-item{
    flex: 1;
    font-size: 14px;
}
.active{
    color: red;
}
img{
    margin-left: 15px;
    margin-top: 12px;
}
</style>