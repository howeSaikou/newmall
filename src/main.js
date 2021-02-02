import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

createApp(App).use(store).use(router).mount('#app')

// 1.axios的基本使用
// axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//     console.log(res);
// })

// axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     // 专门针对get请求的参数拼接
//     params: {
//         type: 'pop',
//         page: 1
//     },
//     // 不写默认是get
//     method: 'get'
// }).then(res => {
//     console.log(res);
// })

// 2.axios发送并发请求
// axios.all(
//     [axios({
//             url: 'http://123.207.32.32:8000/home/multidata'
//         }),
//         axios({
//             url: 'http://123.207.32.32:8000/home/data',
//             params: {
//                 type: 'sell',
//                 page: 5
//             }
//         })
//     ]).then(result => {
//     console.log(result);
// })

// axios.all(
//     [axios({
//             url: 'http://123.207.32.32:8000/home/multidata'
//         }),
//         axios({
//             url: 'http://123.207.32.32:8000/home/data',
//             params: {
//                 type: 'sell',
//                 page: 5
//             }
//         })
//     ]).then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
// }))

// import { request } from 'network/request'
// instance({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// request({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })