<template>
  <div class="bottom-menu" >
    <check-button class="select-all" @checkBtnClick="checkBtnClick" :isChecked="isSelectAll"></check-button>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{payCount}})</span>
  </div>
</template>

<script>

import CheckButton from './CheckButton.vue';
import {mapGetters} from 'vuex'
	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
		  totalPrice() {
        // 过滤出来选中的，返回 每个的数量乘价格加上之前的结果
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      payCount(){
        return this.cartList.filter(item=>item.checked).reduce((preValue,item)=>{return preValue + item.count},0)
      },
      isSelectAll() {
        if(this.cartList.length === 0)return false
        return !this.cartList.find(item => !item.checked)
        // return this.cartList.find(item => item.checked === false) === undefined;
        // return !(this.cartList.filter(item => !item.checked).length)
         
      }
    },
    methods: {
      checkBtnClick() {
        // 1.判断是否有未选中的按钮
        let isSelectAll = this.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.cartList.forEach(item => {
            item.checked = false;
          });
        }
      }
    }
	}
</script>

<style lang="less" scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }
    .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
    .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
  }
</style>
