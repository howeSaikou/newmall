import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
    addCart(context, payload) {
        state.cartList.push(payload)
            // 查找之前数组中是否有该商品
        let oldProducet = context.state.cartList.find(item => item.iid == payload.iid)
            // 判读oldProduct,iid重复，是老商品，数量加一，不添加到carList数组中
        if (oldProducet) {
            // 提交给mutation
            context.commit(ADD_COUNTER, oldProducet)
        } else {
            // iid不重复，是新商品，数量等于一，添加到carList数组中
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
        }
    }
}