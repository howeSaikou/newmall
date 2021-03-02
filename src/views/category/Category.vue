<template>
<div id="category">
  <nav-bar class="nav-bar"><template v-slot:center>商品分类</template></nav-bar>
  <div class="category-container">
    <category-menu class="menu" :categoryList="categoryList" @getSubcategory="categoryChange" ></category-menu>
    <scroll class="content">
        <category-content class="category-content"  :categoryContent="categoryContent"></category-content>
    </scroll>
  </div>
  
</div>
  
</template>

<script>
import {getCategory,getSubcategory,getCategoryDetail} from 'network/category.js'
import CategoryMenu from './childcomps/CategoryMenu.vue';
import NavBar from 'components/common/navbar/NavBar.vue';
import CategoryContent from './childcomps/CategoryContent.vue';
import Scroll from 'components/common/scroll/Scroll.vue'



export default {
  components: { CategoryMenu, NavBar, CategoryContent, Scroll},
    data(){
        return{
            categoryList:[],
            categoryContent:[],
            currentIndex:0
        }
    },
    created(){
        this.getCategory()
        // this.getSubcategory()
        // this.getSubcategory(this.categoryList.maitKey);
    },
    updated(){
        this.getSubcategory()
    },
    methods:{
        // 请求分类信息
        getCategory(){
            getCategory().then(res=>{
                this.categoryList = res.data.category.list;
                
            })
        },
        getSubcategory(){
            let maitKey = this.categoryList[this.currentIndex].maitKey
            getSubcategory(maitKey).then(res=>{
                this.categoryContent = res.data.list
            })
        },
        categoryChange(index){
            this.currentIndex = index;
            this.getSubcategory();
        }
        }
    
}
</script>

<style lang="less" scoped>
.category-container{
    display: flex;
}

.menu{
    width: 30%;
}
.content{
    width: 70%;
    height: calc(100vh - 93px);
    overflow: hidden;
}
.category-content{
    width: 100%;
}
.nav-bar {
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
</style>