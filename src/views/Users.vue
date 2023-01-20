<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },

    data() {
      return {
          users: [],
          name:""
        }
      },

    methods: {
      getUsers() {
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.users.push(data[i])
          }    
        });
      },
      
      searchUsers(name) {
        fetch('http://puigmal.salle.url.edu/api/v2/users/search?s=' + name, {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.users.splice(0)
          for (let i = 0; i < data.length; i++) {
            this.users.push(data[i])
          } 
          
        })
      },

      locateClick(id) {
        window.localStorage.setItem("selectedUserId", id);
      },

      isMe(id) {
        return (id == window.localStorage.getItem("myId"))
      },

      goBack() {
        Logic.back();
      }
    },

    beforeMount(){
      this.getUsers();
    }
  }

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  <header>
    <br/>
    <BackArrow v-on:back="goBack"></BackArrow>
    <br/><br/>
    <div class="topText">
      <h1>Users list</h1>
    </div>
    <br/><br/>
    
    <div class="searchContainer">
      <input type="text" v-model="name" placeholder="Search user...">
      <button type="submit" v-on:click="searchUsers(name)"><i class="fa fa-search"></i ></button><br/><br/>
    </div>
    <br/>
  </header>
  
  <main>
    
    <li class="grid-container" v-for="user in users" :key="user.id">
      <div>
        <img v-bind:src=user.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ user.name }}</p>
        <a href="/Chat" v-on:click="locateClick(user.id)"><button>Chat</button></a>
        <a v-if="isMe(user.id)" href="/Data" v-on:click="locateClick(user.id)"><button>My profile</button></a>
        <a v-else href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
      </div>
    </li>

  </main>
</template>