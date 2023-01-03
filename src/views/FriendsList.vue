<script>
import logic from '../javascript/logic.js'

  export default {

    data() {
      return {
          friends: [],
          name:""
        }
      },

    methods: {
      getFriends() {
        fetch("http://puigmal.salle.url.edu/api/v2/friends", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.friends.push(data[i])
          } 
          console.log(this.friends)   
        });
      },

      locateClick(id) {
        window.localStorage.setItem("selectedId", id);
      }

    },

    beforeMount(){
      this.getFriends();
    }
  }

</script>

<template>
    
  <header>
    <br/>
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Friends list</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>
  
  <main>
    
    <li class="grid-container" v-for="friend in friends" :key="friend.id">
      <div>
        <img v-bind:src=friend.image @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ friend.name }}</p>
        <a href="/FriendProfile" v-on:click="locateClick(friend.id)"><button>Profile</button></a>
      </div>
    </li>

  </main>
</template>