<template>
<div class="category-content">
    <div  class="item-info-container">
        <div class="item-info"  v-for="(item,index) in categoryContent" :key="index">
            <a :href="item.link" >
                <div class="image"><img :src="item.image" alt=""></div>
                <span>{{item.title}}</span>
            </a>
        </div>
        
    </div>
</div>
  
</template>

<script>


export default {
  components: { },
    props:{
        categoryContent:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.item-info-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.item-info{
    margin-top: 10px;
    width: 50%;
    img{
    width: 50px;
    height: 50px;
}
    a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    text-align: center;
}
}
.image{
    margin-bottom: 5px;
}
</style>