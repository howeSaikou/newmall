<template>
  <div class="paramInfo">
      <table  v-for="table in paramInfo.sizes" :key="table" class="info-sizes">
          <tr v-for="tr in table" :key="tr">
              <td v-for="td in tr" :key="td">{{td}}</td>
          </tr>  
      </table>
      <div class="disclaimer">{{paramInfo.disclaimer}}</div>
      <table class="info-sets">
          <tr v-for="tr in paramInfo.sets" :key="tr">
              <td class="key">{{tr.key}}</td>
              <td class="value">{{tr.value}}</td>
          </tr>
      </table>
      <div class="info-img">
          <img v-for="item in paramInfo.images" :key="item" :src="item" alt="" >
        </div>
  </div>
</template>

<script>
export default {
    props:{
        paramInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style lang="less" scoped>
.paramInfo{
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    .info-sizes{
    width: 100%;
    /* border-collapse: collapse; */
    tr{
    height: 42px;
    td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
}
}
.disclaimer{
    color: #eb4868;
    margin: 15px 0;
}
.info-sets{
    margin-bottom: 20px;
    .key{
    width: 95px;
}
    tr{
        height: 42px;
        td{
            border-bottom: 1px solid rgba(100,100,100,.1);
        }
    }
    .value{
    color: #eb4868
}
    img{
        width: 100%;
    }
}
}
</style>
