<script>

  export default {

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
        <h2 class="center">Delete account</h2>
      </div>
      <div>
        <p class="p2">Are you sure you want to delete your account?</p>
        <p class="red">(This action can not be undone)</p>
      </div>
      <br/><br/>
        <div class="inputContainer">
          <a v-on:click="deleteUser"><button>Delete account</button></a>
        </div>
    </div>
  </main>

</template>

<style>

.red {
  color: red;
  float: center;
  font-size: 26px;
  font-family:'Roboto', sans-serif;
}

</style>