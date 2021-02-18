<template>
  <div class="tabcontrol">
      <div class="tab-control-item" v-for="(item,index) in titles" :key="(index)" 
      :class="{active:index==currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
.tabcontrol{
    display: flex;
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding-bottom: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid orange;
}
</style>