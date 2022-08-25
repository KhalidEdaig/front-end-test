import App from '@/App.vue'
import axios from '@/axios'
import '@/index.css'
import router from '@/router'
import store from '@/store'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')
