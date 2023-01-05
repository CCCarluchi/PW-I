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
            .then(res => res.json())
            .then(data => {
              console.log(data)
            });
          }
      }
    }
  }
  
</script>

<template>
    <main>
      <header>
        <br/>
        <div class="arrowContainer" align="left"> 
          <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
        </div>
      </header>
      <br/>
  
      <article>
        <div class="card">
            <div align = left>
                <h2>Send request</h2>
            </div>
            <div align = left>
                <p2>Do you wish to send a friend request to this user?</p2>
            </div>
            <br/><br/>
            <div class="inputContainer">
              <a href="/NotFriendProfile" v-on:click="sendRequest()" id="button"><button>Send</button></a>
            </div>
        </div>
      </article>
  
      <footer>
      </footer>
  
    </main>
  </template>