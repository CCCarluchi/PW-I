<script>

  export default {

    data() {
      return {
          friends: [],
          name:"",
          image:"",
          imgError: false
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
            if (data[i].id != null) {
              this.friends.push(data[i])
            }    
          } 
        });
      },

      locateClick(id) {
        window.localStorage.setItem("selectedId", id);
      },

      onImgError() {
        this.imgError = true;
      },

    },

    computed: {
      filename() {
        return (this.imgError) ? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" : 'a';
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
        <img v-bind:src=filename referrerpolicy="no-referrer" @error="onImgError" class='imgList'/>
        <p>{{ friend.name }}</p>
        <a href="/FriendProfile" v-on:click="locateClick(friend.id)"><button>Profile</button></a>

      </div>
    </li>

  </main>
</template>