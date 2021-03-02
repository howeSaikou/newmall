<template>
  <div class="shop-info">
      <div class="shop-top">
        <img class="shop-logo" :src="shop.logo" alt="">
        <div class="shop-name">{{shop.name}}</div>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item  shop-middle-left">
            <div class="shop-sells">
                <div class="sells-count">{{sellCountFilter(shop.cSells)}}</div>
                <div class="sells-text">总销量</div>
            </div>
            <div class="shop-goods">
                <div class="goods-count">{{shop.cGoods}}</div>
                <div class="goods-text">全部宝贝</div>
            </div>
        </div>
        <div class="shop-middle-item shop-middle-right">
            <div class="shop-score">
            <table>
                <tr  v-for="(item,index) in shop.score" :key="index">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'bettere-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                </tr>
            </table>
            </div>
        </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        shop:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{sellCountFilter(value) {
        if (value < 10000) return value;
        return (value / 10000).toFixed(1) + '万'  
        }
    }   
}
</script>


<style lang="less">
.shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
    .shop-top{
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-content: center;
        .shop-logo{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .1);
    }
        .shop-name{
            margin-left: 10px;
        }
}
    .shop-middle{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .shop-middle-item{
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
        flex: 1;
    }
        .shop-middle-left{
        text-align: center;
        border-right: 2px solid rgba(0, 0, 0, .1);
            .sells-count, .goods-count{
                font-size: 18px;
            }
            .sells-text, .goods-text{
                margin-top: 10px;
                font-size: 12px;
            }
    }
        .shop-middle-right {
            font-size: 13px;
            color:#333;
            table{
                width: 120px;
                td{
                    padding: 5px 0;
                }
                .better span{
                    color: white;
                    text-align: center;
                    background-color: #5ea732;
                }
                .score{
                    color: #5ea732;
                    
                }
            }
        }
    }
}
.score-better{
    color: #f13e3a;
}
.bettere-more span{
    background-color: #f13e3a;
}
.shop-bottom{
    text-align: center;
    margin-top: 10px;
    .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}
}
</style>