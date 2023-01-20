<script>
  import Bar from "../components/Bar.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { Bar },

    methods: {

      //Método para borrar al usuario loggeado de la api
      deleteUser() {
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          method: 'DELETE',
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(() => {
          window.localStorage.clear();
          window.location.assign('/');
        })
      },

      //Método para ir a la página anterior
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
      <Bar></Bar>
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
      <br/>
        <a v-on:click="deleteUser"><button>Delete account</button></a>
    </div>
  </main>

</template>

<style>

  .card {
    margin: 0 auto;
    float: none; 
    border-radius: 12px;
    border: 1px solid black;
    padding: 3px 26px;
    width: 226px;
    height: 275px;
    background-color: rgb(0, 153, 255);
  }

  .card > a > button {
    width: 150px;
    font-size: 14px;
  }

  .red {
    color: red;
    float: center;
    font-size: 14px;
    font-family:'Roboto', sans-serif;
  }

  @media only screen and (min-width: 640px) {

    .card {
      margin: 0 auto;
      float: none; 
      border-radius: 12px;
      border: 1px solid black;
      padding: 58px 46px;
      width: 669px;
      height: 472px;
      background-color: rgb(0, 153, 255);
    }

    .card > a > button {
      width: 300px;
      font-size: 26px;
    }

  .red {
    color: red;
    float: center;
    font-size: 26px;
    font-family:'Roboto', sans-serif;
  }
}

</style>