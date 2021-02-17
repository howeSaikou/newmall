import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
// 让action  commit过来，方便跟踪
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    }
}