<template>
  <scroll class="cart-list" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"></cart-list-item>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import {mapGetters} from 'vuex'


	export default {
		name: "CartList",
    components: {
		  Scroll, CartListItem
    },
    props: {
		  
    },
    computed:{
		  ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
	}
</script>

<style lang="less" scoped>

</style>
