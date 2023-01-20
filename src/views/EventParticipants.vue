<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },

    data() {
        return {
            assistances: [],
        }
    },

    methods: {

      // Método para obtener los participantes del evento seleccionado.
      getParticipants() {
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId") + "/assistances", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {

          // Guardamos los asistentes en una variable.
          for (let i = 0; i < data.length; i++) {
            this.assistances.push(data[i]);
          }    
        });
      },

      // Método que guarda en un item el id del usuario seleccionado.
      locateClick(id) {
        window.localStorage.setItem("selectedUserId", id);
      },

      // Método que comprueba si el id seleccionado pertenece al usuario.
      isMe(id) {
        return (id == window.localStorage.getItem("myId"))
      },

      // Método para volver a la página anterior.
      goBack() {
        Logic.back();
      }
    },

    // Pedimos la lista de participantes.
    beforeMount(){
      this.getParticipants();
    }
  }

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  <header>
    <br/>

    <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
    <BackArrow v-on:back="goBack"></BackArrow>
    <br/><br/>
    <div class="topText">
      <h1>Event participants</h1>
    </div>
    <br/><br/>
  </header>
  
  <main>

    <!-- Mostramos los participantes del evento. -->
    <li class="grid-container" v-for="user in assistances" :key="user.id">
      <div>
        <p>{{ user.name }}</p>

        <!-- Si el usuario selecionado corresponde al que actualmente esta registrado, al clicar el botón lo redirigimos a su perfil. -->
        <a v-if="isMe(user.id)" href="/Data" v-on:click="locateClick(user.id)"><button>My profile</button></a>
        
        <!--En el caso contrario, redirigimos al usuario al perfil del usuario seleccionado. -->
        <a v-else href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
      </div>
    </li>

  </main>
</template>