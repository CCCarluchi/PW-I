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
  </nav>
  <router-view></router-view>
</template>