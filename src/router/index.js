import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import FriendsList from '../views/FriendsList.vue'
import Data from '../views/Data.vue'
import FriendProfile from '../views/FriendProfile.vue'
import Home from '../views/Home.vue'
import PendingRequests from '../views/PendingRequests.vue'
import NotFriendProfile from '../views/NotFriend.vue'
import ModifyData from '../views/ModifyData.vue'
import DeleteAccount from '../views/DeleteAccount.vue'
import Statistics from '../views/Statistics.vue'
import SignOut from '../views/SignOut.vue'
import Events from '../views/Events.vue'
import CreateEvent from '../views/CreateEvent.vue'
import Chat from '../views/Chat.vue'
import ParticipateEvent from '../views/ParticipateEvent.vue'
import Event from '../views/Event.vue'

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
        path: '/ModifyData',
        name: 'ModifyData',
        component: ModifyData,
    },
    {
        path: '/FriendProfile',
        name: 'FriendProfile',
        component: FriendProfile,
    },
    {
        path: '/NotFriendProfile',
        name: 'NotFriendProfile',
        component: NotFriendProfile,
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/PendingRequests',
        name: 'PendingRequests',
        component: PendingRequests,
    },
    {
        path: '/DeleteAccount',
        name: 'DeleteAccount',
        component: DeleteAccount,
    },
    {
        path: '/Statistics',
        name: 'Statistics',
        component: Statistics,
    },
    {
        path: '/SignOut',
        name: 'SignOut',
        component: SignOut,
    },
    {
        path: '/Events',
        name: 'Events',
        component: Events,
    },
    {
        path: '/CreateEvent',
        name: 'CreateEvent',
        component: CreateEvent,
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: Chat,
    },
    {
        path: '/ParticipateEvent',
        name: 'ParticipateEvent',
        component: ParticipateEvent,
    },
    {
        path: '/Event',
        name: 'Event',
        component: Event,
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router