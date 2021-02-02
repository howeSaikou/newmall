import axios from 'axios'


export function request(config) {
    // 1.创建axios实例,配置公共配置
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 5000
        })
        // 2.axios的拦截器
        // 2.1请求拦截
    instance.interceptors.request.use(config => {
            // 拦截掉请求成功的做修改
            // a.比如config中的一些信息不符合服务器的要求
            // b.比如每次发送网络请求时，都希望再界面提示一个正在请求的图标
            // c.某些网络请求（比如登录（token）），必须携带一些特殊信息，检查后提示给用户
            // console.log(config);
            // 返回去请求成功的，才能正常运行，响应拿到数据，不然打印错误信息
            return config
        }, err => {
            console.log(err);
        })
        // 2.2响应拦截
    instance.interceptors.response.use(res => {
            // console.log(res);
            // 返回去想要的数据
            return res.data
        }, err => {
            console.log(err);
        })
        // 3.发送真正的网络请求
    return instance(config)
}

// export default function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance2 = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         instance2(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }