<template>
  <div class="wrapper" ref="aaaa">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            scroll:null,
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.aaaa,{
            // click为true，按钮才能被监听
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            // 因为取得图片数据是动态的，无法确定高度，需要调用refresh()
            // observe-dom
            // 开启对 content 以及 content 子元素 DOM 改变的探测。当插件被使用后，
            // 当这些 DOM 元素发生变化时，将会触发 scroll 的 refresh 方法。 observe-dom 插件具有以下几个特性：
            //     针对改变频繁的 CSS 属性，增加 debounce
            //     如果改变发生在 scroll 动画过程中，则不会触发 refresh
            observeDOM:true,
            observeImage:true
        })
        // 监听滚动位置
        // 谁需要监听位置进行操作就传给谁，编辑事件
        this.scroll.on('scroll',(position)=>{
            // 发出自定义事件
            this.$emit('scroll',position)
        })
        // 下拉加载更多
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
    methods:{
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>