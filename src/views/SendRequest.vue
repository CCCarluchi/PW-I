<script>

  export default {

      data() {
        return {
          alreadySent: false
        }
      },

      methods: {
        sendRequest() {
          if (!this.alreadySent) {
            fetch("http://puigmal.salle.url.edu/api/v2/friends/" + window.localStorage.getItem("selectedUserId"), {
              method: 'POST',
              headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json);
          }
      }
    }
  }
  
</script>

<template>

    <header>
    <br/>
    <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
  </header>
  <br/>

  <main>
    <div class="card">
      <div>
        <h2 class="center">Send request</h2>
      </div>
      <div>
        <p class="p2">Do you wish to send a friend request to this player?</p>
      </div>
      <br/><br/>
        <div class="inputContainer">
          <a href="/NotFriendProfile" v-on:click="sendRequest"><button>Send request</button></a>
        </div>
    </div>
  </main>

  </template>