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

<style>
.paramInfo{
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.info-sizes{
    width: 100%;
    /* border-collapse: collapse; */
}
.info-sizes tr{
    height: 42px;
}
.info-sizes tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.disclaimer{
    color: #eb4868;
    margin: 15px 0;
}
.info-sets{
    margin-bottom: 20px;
}
.info-sets .key{
    width: 95px;
}
.info-sets tr{
    height: 42px;
}
.info-sets .value{
    color: #eb4868
}
.info-sets tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-img img{
    width: 100%;
}
</style>