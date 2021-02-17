<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav-bar" ref="nav" @titleClick="titleClick"></detail-nav-bar>
      <scroll class="content" ref="detailScroll" :probeType="3" @scroll="contentScroll">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="detailImgLoad"/>
        <detail-param-info ref="params" :paramInfo="paramInfo"/>
        <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
        <!-- 用goodslist组件展示推荐数据 -->
        <goods-list ref="recommends" :goods="recommends"/>
      </scroll>
      <back-top @click="backClick" v-show="isShowBackTop"></back-top>
      <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import {debounce} from 'common/utils.js'
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParamInfo from './childcomps/DetailParamInfo.vue'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childcomps/DetailBottomBar.vue'

// 根据iid请求详情数据
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import BackTop from '../../components/content/backtop/BackTop.vue'

export default {
  name:"Detail",
  data(){
      return{
          iid:null,
          goods:{},
          shop:{},
          topImages:[],
          detailInfo:{},
          paramInfo:{},
          commentInfo:{},
          recommends:[],
          themeTopYs:[],
          currentIndex:0,
          getThemeTopY:null,
          isShowBackTop: false,
      }
  },
  components: { 
    DetailNavBar, 
    DetailSwiper, 
    DetailBaseInfo, 
    DetailShopInfo, 
    Scroll, 
    DetailGoodsInfo, 
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop 
    },
  methods:{
    detailImgLoad(){
      this.$refs.detailScroll.refresh()
      this.getThemeTopY()
    },
    backClick() {
      this.$refs.detailScroll.scrollTo(0, 0)
    },
    titleClick(index){
      this.$refs.detailScroll.scrollTo(0,-this.themeTopYs[index])
    },
    contentScroll(position){
      const positionY = -position.y;
      this.isShowBackTop=-position.y>1000
      let length=this.themeTopYs.length;
      for(let i = 0; i < length-1; i++){
        if(this.currentIndex !==i &&(positionY >= this.themeTopYs[i] && positionY <= this.themeTopYs[i+1])){
          this.currentIndex=i;
          this.$refs.nav.currentIndex=this.currentIndex;
        }
      }
    },
    addToCart(){
      // 获取购物车要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realprice;
      product.iid = this.iid;
      // 将商品添加到购物车里
      // this.$store.commit('addCart',product) 放数据到mutations
      this.$store.dispatch('addCart',product)
    }
  },
  created(){
    // 1、保存传入的iid
    this.iid=this.$route.params.iid
    // 2、根据iid请求详情数据
    getDetail(this.iid).then(res=>{
        console.log(res);
        // 1.获取数据
        const data=res.result
        // 2.获取顶部的轮播图数据
        this.topImages=data.itemInfo.topImages

        // 3.获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // 4.获取商家信息
        this.shop=new Shop(data.shopInfo)
        // 5.获取商品详细信息
        this.detailInfo=data.detailInfo
        // 6.获取尺码表信息
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        // 7.获取评论信息
        if(data.rate.cRate !==0){
          this.commentInfo=data.rate.list[0]
        }
    })
    // 3、请求推荐数据
    getRecommend().then(res=>{
      console.log(res);
      this.recommends=res.data.list
    })
    /*
    // 第一次获取，值不对，个别没有数据
    // 原因是：this.$refs.params.$el压根没有渲染
    this.themeTopYs=[]
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.params.$el.offsetTOP)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTOP)
    this.themeTopYs.push(this.$refs.recommends.$el.offsetTOP)

    // nextTick 是在渲染后执行的函数
    // 第二次获取值不对，都有数据
    // 原因是图片没有计算在内
    // 根据最新的数据，对应的DOM已经被渲染出来
    // 但图片没有加载完成（目前获取到的offsetTop不包含图片），不对时大多数时图片问题
    this.$nextTick(()=>{
    this.themeTopYs=[]
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.params.$el.offsetTOP)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTOP)
    this.themeTopYs.push(this.$refs.recommends.$el.offsetTOP)
    })
    */
    // 4、对getThemeTopY赋值（对this.themeTopYs赋值的操作进行防抖）
    this.getThemeTopY=debounce(()=>{
      this.themeTopYs=[]  
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)

      console.log(this.themeTopYs);
    })
  }
    
    
}
</script>

<style scoped>
#detail{
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.content{
  height: calc(100% - 44px - 49px);
}
.detail-nav-bar{
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>
