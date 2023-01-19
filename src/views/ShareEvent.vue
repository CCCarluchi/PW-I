<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },

    data() {
      return {
          event: {},
          friends: [],
          selected: [],
          name:"",
          image:"",
          empty:"",
          message:""
        }
      },

    methods: {
      getFriends() {
        fetch("http://puigmal.salle.url.edu/api/v2/friends", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.empty = (data.length == 0);
          for (let i = 0; i < data.length; i++) {
            if (data[i].id != null) {
              this.friends.push(data[i]);
              let id = data[i].id;
              let isSelected = false;
              let selection = {id, isSelected};
              this.selected.push(selection);
            } 
          } 
        });
      },

      getEvent() {
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId"), {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {
                this.message = "Check out this event: " + data[0].id;
            });
      },

      shareEvent(content) {
        let user_id_send = window.localStorage.getItem("myId");
        console.log(this.selected)   
        for (let i = 0; i < this.selected.length; i++) {
          let user_id_recived = this.selected[i].id;
          if (this.selected[i].isSelected) {
            fetch("http://puigmal.salle.url.edu/api/v2/messages", {
              method: 'POST',
              headers: {'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
              body: JSON.stringify({content, user_id_send, user_id_recived})
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })
          }
        }
      },

      goBack() {
        Logic.back();
      },

      /* a(message) {
        fetch("http://puigmal.salle.url.edu/api/v2/messages/2204", {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            });
      }, */

      locateClick(id) {
        window.localStorage.setItem("selectedUserId", id);
      }

      

    },

    beforeMount(){
      this.getFriends();
      this.getEvent();
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
      <h1>Share event</h1>
    </div>
    <br/><br/>

  </header>

  <main>

    <li class="grid-container" v-for="(friend, index) in friends">
      <div>
        <img v-bind:src=friend.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ friend.name }}</p>
        <input v-model="selected[index].isSelected" type="checkbox" v-on:change="">
      </div>
    </li>

    <div v-if="empty">
      <h2 class="emptyList">No friends yet :(</h2>
    </div>

  </main>

  <footer>
    <button class="shareButton" v-on:click="shareEvent(message)">Share</button>
  </footer>
</template>

<style>
  .grid-container > div > input[type=checkbox] {
    float: right;
    margin-top: 1.2%;
    width: 50px;
  }

  .shareButton {
    background-color: rgba(255, 204, 153, 0.8);
  }
</style>