import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

const state = {
    cartList: []
}
export default createStore({
    state,
    mutations,
    // mutations唯一的目的是修改state中状态
    // mutations中每个方法尽可能完成的事情比较单一一点
    // 下面判断逻辑有可能完成两件事情，防actions比较好
    // addCart(state, payload) {
    //     state.cartList.push(payload)
    //         // 查找之前数组中是否有该商品
    //     let oldProducet = state.cartList.find(item => item.iid == payload.iid)
    //         // 判读oldProduct,iid重复，是老商品，数量加一，不添加到carList数组中
    //     if (oldProducet) {
    //         oldProducet.count += 1
    //     } else {
    //         // iid不重复，是新商品，数量等于一，添加到carList数组中
    //         payload.count = 1
    //         state.cartList.push(payload)
    //     }
    // }
    actions,
    modules: {}
})