<script>

  export default {

    data() {
        return {
            assistances: [],
        }
    },

    methods: {
      getParticipants() {
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId") + "/assistances", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
           for (let i = 0; i < data.length; i++) {
            this.assistances.push(data[i]);
          }    
        });
      },

      locateClick(id) {
        window.localStorage.setItem("selectedUserId", id);
      },

      isMe(id) {
        return (id == window.localStorage.getItem("myId"))
      }
    },

    beforeMount(){
      this.getParticipants();
    }
  }

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  <header>
    <br/>
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Event participants</h1>
    </div>
    <br/><br/>
  </header>
  
  <main>
    
    <li class="grid-container" v-for="user in assistances" :key="user.id">
      <div>
        <p>{{ user.name }}</p>
        <a v-if="isMe(user.id)" href="/Data" v-on:click="locateClick(user.id)"><button>My profile</button></a>
        <a v-else href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
      </div>
    </li>

  </main>
</template>