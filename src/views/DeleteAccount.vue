<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },

    methods: {
      deleteUser() {
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          method: 'DELETE',
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(() => {
          window.localStorage.removeItem("loggedIn")
          window.location.assign('/');
        })
      },

      goBack() {
          Logic.back();
        }
    }
  }

</script>

<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <BackArrow v-on:back="goBack"></BackArrow>
    </div>
  </header>
  <br/>

  <main>
    <div class="card">
      <div>
        <h2 class="center">Delete account</h2>
      </div>
      <div>
        <p class="p2">Are you sure you want to delete your account?</p>
        <p class="red">(This action can not be undone)</p>
      </div>
      
        <div class="inputContainer">
          <a v-on:click="deleteUser"><button class="button2">Delete account</button></a>
        </div>
    </div>
  </main>

</template>

<style>

.red {
  color: red;
  float: center;
  font-size: 16px;
  font-family:'Roboto', sans-serif;
}

@media only screen and (min-width: 640px) {
  .red {
  color: red;
  float: center;
  font-size: 26px;
  font-family:'Roboto', sans-serif;
  }
}

</style>