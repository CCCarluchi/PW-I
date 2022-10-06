import { createRouter, createWebHistory } from 'vue-router'
import Basket from '../views/Basket.vue'
import Contact from '../views/Contact.vue'
const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router