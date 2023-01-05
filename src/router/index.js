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
import ShareEvent from '../views/ShareEvent.vue'
import Timeline from '../views/Timeline.vue'
import SearchEvent from '../views/SearchEvent.vue'
import EventsList from '../views/EventsList.vue'
import SendRequest from '../views/SendRequest.vue'
import Users from '../views/Users.vue'
import MyEvents from '../views/MyEvents.vue'
import EditEvent from '../views/EditEvent.vue'
import ConfirmDelete from '../views/ConfirmDelete.vue'
import EventParticipants from '../views/EventParticipants.vue'
import { nextTick } from 'vue'

const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
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
    },
    {
        path: '/ShareEvent',
        name: 'ShareEvent',
        component: ShareEvent,
    },
    {
        path: '/Timeline',
        name: 'Timeline',
        component: Timeline,
    },
    {
        path: '/SearchEvent',
        name: 'SearchEvent',
        component: SearchEvent,
    },
    {
        path: '/EventsList',
        name: 'EventsList',
        component: EventsList,
    },
    {
        path: '/SendRequest',
        name: 'SendRequest',
        component: SendRequest,
    },
    {
        path: '/Users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/MyEvents',
        name: 'MyEvents',
        component: MyEvents,
    },
    {
        path: '/EditEvent',
        name: 'EditEvent',
        component: EditEvent,
    },
    {
        path: '/ConfirmDelete',
        name: 'ConfirmDelete',
        component: ConfirmDelete,
    },
    {
        path: '/EventParticipants',
        name: 'EventParticipants',
        component: EventParticipants,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name == 'SignIn' && window.localStorage.getItem("loggedIn")) {
        next({name: 'Home'});
       
    } else {
        next();

    }
   
  })
export default router