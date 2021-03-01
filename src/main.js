import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { ElCarousel, ElCarouselItem } from 'element-plus';

createApp(App).use(store).use(router).use(ElCarousel).use(ElCarouselItem).mount('#app')