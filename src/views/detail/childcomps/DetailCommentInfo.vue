<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !==0">
      <div class="comment-header">
          <div>用户评价</div>
          <div>更多<i class="arrow">></i></div>
      </div>
      <div class="comment-user">
          <img :src="commentInfo.user.avatar" alt="">
          <div class="comment-name">{{commentInfo.user.uname}}</div>
      </div>
      <div class="comment-detail">
          <div class="comment-content">{{commentInfo.content}}</div>
          <div class="detail-other">
              <span class="date">{{showDate(commentInfo.created)}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
      </div>
      <div class="comment-img">
          <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
    props:{
        commentInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        showDate(value){
            // 1.将时间戳转换Date对象
            const date =new Date(value*1000)  //Date是毫秒，乘以1000转换位秒

            // 2.将date进行格式化
            return formatDate(date,'yyyy-MM-dd')
        }
    }
}
</script>

<style>
.comment-info{
    padding: 0 10px 15px 10px;
}
.comment-header{
    display: flex;
    align-items: center;
    line-height: 54px;
    justify-content: space-between;
    border-bottom: 2px solid  rgba(100,100,100,.1);
}
.comment-header .arrow{
    font-size: 20px;
    margin-left: 2px;
}
.comment-user{
    display: flex;
    margin: 10px 0;
    align-items: center;
}
.comment-user img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.comment-user .comment-name{
    margin-left: 10px;
    color: #333;
}
.comment-detail{
    font-size: 14px; 
}
.comment-detail .comment-content{
    padding: 5px 0;
    
}
.comment-detail .detail-other{
    padding: 5px 0 10px 0;
}
.comment-detail .detail-other .date{
    margin-right: 5px;
}
.comment-img img{
    width: 64px;
    height: 64px;
    margin-right: 5px;
}
</style>