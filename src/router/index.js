import { createRouter, createWebHistory } from 'vue-router'
import About from '/src/components/About.vue'
import Home from '/src/components/Home.vue'
import SearchPage from '/src/components/Search.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/search',
        name: 'SearchPage',
        component: SearchPage,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
