<script>
  import Bar from "../components/Bar.vue";
  export default {
    components: { Bar },

    methods: {
      //Método en el que se se elimina toda la informacion almacenada eb el local storage
      logOut() {
        window.localStorage.clear()
      }
    }
  }

</script>

<template>
  <header>
    <br/>
    <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
    <div class="arrowContainer"> 
      <Bar></Bar>
    </div>
  </header>
  <br/>

  <main>
    <div class="card">
      <div>
        <h2 class="center">Log out</h2>
      </div>
      <div>
        <p class="p2">Do you wish to log out?</p>
      </div>
      <br/><br/>
      <!-- Llamado al metodo de logout al pulsar el boton-->
        <div class="inputContainer">
          <a href="/" v-on:click="logOut"><button>Log out</button></a>
        </div>
    </div>
  </main>

</template>