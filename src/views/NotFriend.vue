<script>

import logic from '../javascript/logic.js'

  export default {

    data() {
      return {
        name:"",
        image:""
      }
    },

    methods: {
      getUser() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId"), {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.name = data[0].name;
          this.image = data[0].image;
        })
      }
    },

    beforeMount() {
      logic.checkFriends()
      this.getUser()
    }

  }
</script>

<template>

  <header>
    <br/>
    <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    <br/><br/>

    <div class="profileGrid">
      <div class="profileMain">
        <br/><br/><img v-bind:src="image" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgRedonda'/>
        <h1>{{name}}</h1>
      </div>
    </div>
  </header>

  <main>
    <div class="elementsGrid">
      <div class="profileItem">
        <a href="/SendRequest" id="button"><button class="buttonProfile">+ Add friend</button></a>
      </div>
      <div class="profileItem">
        <a href="/Statistics" id="button"><button class="buttonProfile">Public stats</button></a>
      </div>
    </div>
  </main>
</template>