<template>
  <div id="cart">
    <nav-bar class="nav-bar"><template v-slot:center>购物车({{cartCount}})</template></nav-bar>
    <cart-list class="cart-list"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'
  import {mapGetters} from 'vuex'

	export default {
		name: "Cart",
    components: {
		  NavBar,
      CartList,
      BottomBar
    },
    computed: {
		  ...mapGetters(['cartCount'])
    }
	}
</script>

<style lang="less" scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 99;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
