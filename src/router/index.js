import { createRouter, createWebHistory } from 'vue-router'
import Basket from '../views/Basket.vue'
import Contact from '../views/Contact.vue'
const routes = [
    {
        path: '/',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router