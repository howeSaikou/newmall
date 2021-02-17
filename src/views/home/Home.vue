<template>
  <div id="home">
      <nav-bar class="home-nav">
        <template v-slot:center>
          购物商城
        </template>
      </nav-bar>
      <!-- 偷天换日 当滚动到一定位置时显示,盖在原来的tab-control上面,造成没有没滚下去的表面 -->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" 
      @tabClick="tabClick"  v-show="isTabfixed"/>
      <scroll class="content" ref="scroll" :probeType="3" 
        :pullUpLoad="true" 
        @scroll="HomeScroll"
        @pullingUp="HomeLoadMore">
        <home-swiper :banners="banners" @SwiperImgLoad ="SwiperImgLoad" />
        <home-recommend :recommends="recommends"/>
        <feature-view/>
        <tab-control  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"/>
        <goods-list :goods="showGoods"/>
      </scroll>
      <back-top @click="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend.vue'
import FeatureView from './childcomps/FeatureView.vue'
import BackTop from '../../components/content/backtop/BackTop.vue'

import {getHomeMultidata,getHomeGoods} from "network/home.js"





export default {
  components: { 
    NavBar,
    TabControl,
    Scroll,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    BackTop,
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabfixed:false
      }
    },
    created(){
      // 请求多个数据  轮播图与推荐
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      // 事件监听相关的方法
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      // 吸顶 拿到tabcontrol组件的offsetTop值,就是它的顶部的位置值，因为是组件要加$el,$el是该组件的根组件
      SwiperImgLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      },
      // 滚动监听
      HomeScroll(position){
          this.isShowBackTop=position.y<-1000
          this.isTabfixed=(-position.y)>this.tabOffsetTop
      },
      HomeLoadMore(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.refresh()
      },
      // 请求数据的方法
      // 请求多个数据
      getHomeMultidata(){
        getHomeMultidata().then(res=>{  
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      // 请求商品数据
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          // ;因为上拉加载更多只执行一次,需要完成上拉加载更多后,才能继续执行 
          this.$refs.scroll.finishPullUp()
        })
      }
    }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  /* 这是为了原生滚动时,不跟随才设置fixed,现在用better-scroll不需要 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control{
  position: relative;
  z-index: 9;
}

.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>