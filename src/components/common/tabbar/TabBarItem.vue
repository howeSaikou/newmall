<template>
      <div class="tab-bar-item" @click="itemClick">
          <div v-if="!isActive"><slot name="item-icon"></slot></div>
          <div v-else><slot  name="item-icon-active"></slot></div>
          <div :style="activeStyle"><slot name="item-text"></slot></div>   
      </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        link:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            // 当前路由路径是否包含tarbaritem的link，不等于-1为true
            return this.$route.path.indexOf(this.link)!==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.link);
    }
}
}
</script>

<style>

.tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
}
.active{
    color: red;
}
</style>