<script>
  export default {

    data() {
      return {
        name:"",
        image:""
      }
    },

    methods: {
      getUser() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId"), {
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
        <br/><br/><img v-bind:src="image" referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgRedonda'/>
        <h1>{{name}}</h1>
      </div>
    </div>
  </header>

  <main>
    <div class="elementsGrid">
      <div class="profileItem">
        <a href="/Statistics" id="button"><button class="buttonProfile">Public Stats</button></a><br/><br/>
      </div>
      <div class="profileItem">
        <a href="/PendingRequests" id="button"><button class="buttonProfile">Pending requests</button></a><br/><br/>
      </div>
      <div class="profileItem">
        <a href="/MyEvents" id="button"><button class="buttonProfile">MyEvents</button></a><br/><br/>
      </div>
      <div class="profileItem">
        <a href="/ModifyData" id="button"><button class="buttonProfile">Change profile</button></a><br/><br/>
      </div>
      <div class="profileItem">
        <a href="/SignOut" id="button"><button class="buttonProfile">Sign Out</button></a><br/><br/>
      </div>
      <div class="profileItem">
        <a href="/DeleteAccount" id="button"><button class="buttonProfile">Delete Account</button></a><br/><br/>
      </div>
    </div>
  </main>
</template>