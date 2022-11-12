<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <nav>
    <router-link to="/">SignIn</router-link> 
    <router-link to="/SignUp">SignUp</router-link>
    <router-link to="/FriendsList">FriendsList</router-link>
    <router-link to="/Data">Data</router-link>
    <router-link to="/FriendProfile">FriendProfile</router-link>
    <router-link to="/NotFriendProfile">NotFriendProfile</router-link>
    <router-link to="/Home">Home</router-link>
    <router-link to="/PendingRequests">PendingRequests</router-link>
    <router-link to="/ModifyData">ModifyData</router-link>
    <router-link to="/DeleteAccount">DeleteAccount</router-link>
    <router-link to="/Statistics">Statistics</router-link>
    <router-link to="/Chat">Chat</router-link>
    <router-link to="/SignOut">SignOut</router-link>
    <router-link to="/Events">Events</router-link>
    <router-link to="/CreateEvent">CreateEvent</router-link>
    <router-link to="/ParticipateEvent">ParticipateEvent</router-link>
    <router-link to="/Event">Event</router-link>
    <router-link to="/SearchEvent">SearchEvent</router-link>
    <router-link to="/Timeline">Timeline</router-link>
    <router-link to="/ShareEvent">ShareEvent</router-link>
  </nav>
  <router-view></router-view>
</template>