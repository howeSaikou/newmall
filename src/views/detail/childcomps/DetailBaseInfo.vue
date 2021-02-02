<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="new-price">{{goods.price}}</span>
          <span class="old-price">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="other-info">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="services-info">
          <span class="services-info-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style>
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    color: #333;
}
.info-price{
    margin-top: 10px;
}
.info-price .new-price{
    margin-right: 5px;
    font-size: 24px;
    color: var(--color-high-text);
}
.info-price .old-price{
    font-size: 13px;
    text-decoration: line-through;
}
.info-price .discount{
    font-size: 12px;
    color: white;
    border-radius: 8px;
    padding: 2px 5px;
    margin-left: 5px;
    background-color:  var(--color-high-text);
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
}
.other-info{
    margin-top: 15px;
    font-size: 13px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.services-info{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.services-info img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}
.services-info span{
    font-size: 13px;
    color: #333;
}
</style>