<script>

  export default {

    data() {
      return {
          users: [],
          empty:""
        }
      },

    methods: {
        getUsers() {
            fetch("http://puigmal.salle.url.edu/api/v2/messages/users", {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {
            this.empty = (data.length == 0);
            for (let i = 0; i < data.length; i++) {
                if (data[i].id != null) {
                this.users.push(data[i])
                }    
            } 
            });
        },

      locateClick(id) {
            window.localStorage.setItem("selectedUserId", id);
      },

    },

    beforeMount(){
      this.getUsers();
    }
  }

</script>

<template>
    
  <header>
    <br/>
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Received messages</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>
  
  <main>
    
    <li class="grid-container" v-for="user in users" :key="user.id">
      <div>
        <img v-bind:src=user.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ user.name }}</p>
        <a href="/Chat" v-on:click="locateClick(user.id)"><button>Chat</button></a>
        <a href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
      </div>
    </li>

    <div v-if="empty">
      <h2 class="emptyList">No messages received</h2>
    </div>


  </main>
</template>