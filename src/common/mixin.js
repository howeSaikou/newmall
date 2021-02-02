// import { debounce } from "./utils" 
import BackTop from 'components/content/backtop/BackTop.vue'

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    mothods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },
    },
    showBackTop(position) {
        this.isShowBackTop = position.y < -1000
    }
}