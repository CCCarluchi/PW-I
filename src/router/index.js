import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import FriendsList from '../views/FriendsList.vue'
import Data from '../views/Data.vue'
import FriendProfile from '../views/FriendProfile.vue'

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
    },
    {
        path: '/FriendsList',
        name: 'FriendsList',
        component: FriendsList,
    },
    {
        path: '/Data',
        name: 'Data',
        component: Data,
    },
    {
        path: '/FriendProfile',
        name: 'FriendProfile',
        component: FriendProfile,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router