<script>
  import Bar from "../components/Bar.vue";
  export default {
    components: { Bar },

    data() {
      return {
        name:"",
        image:""
      }
    },

    methods: {

      //Método para pedir información del usuario loggeado a la api
      getUser() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId"), {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.name = data[0].name;
          this.image = data[0].image;
        })
      },

      //Método para ir una página atrás
      goBack() {
          Logic.back();
        }
    },

    //Antes de montar la página se pide la información del usuario a la api
    beforeMount() {
      this.getUser()
    }

  }
</script>

<template>
  <header>
    <br/>
    <Bar></Bar>
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
        <a href="/Statistics" id="button"><button class="buttonProfile">Public Stats</button></a>
      </div>
      <div class="profileItem">
        <a href="/PendingRequests" id="button"><button class="buttonProfile">Pending requests</button></a>
      </div>
      <div class="profileItem">
        <a href="/MyEvents" id="button"><button class="buttonProfile">My events</button></a>
      </div>
      <div class="profileItem">
        <a href="/ModifyData" id="button"><button class="buttonProfile">Change profile</button></a>
      </div>
      <div class="profileItem">
        <a href="/SignOut" id="button"><button class="buttonProfile">Sign Out</button></a>
      </div>
      <div class="profileItem">
        <a href="/DeleteAccount" id="button"><button class="buttonProfile">Delete Account</button></a>
      </div>
    </div>
  </main>
  
</template>