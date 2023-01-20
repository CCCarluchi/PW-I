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

      // Método que comprueba si el usuario tiene amigos y los guarda.
      getFriends() {
        fetch("http://puigmal.salle.url.edu/api/v2/friends", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {

          // Guardamos si tiene amigos y los guardamos en una variable.
          this.empty = (data.length == 0);
          for (let i = 0; i < data.length; i++) {
            if (data[i].id != null) {
              this.friends.push(data[i]);

              // Marcamos y guardamos los id de los amigos como no seleccionados en otra variable.
              let id = data[i].id;
              let isSelected = false;
              let selection = {id, isSelected};
              this.selected.push(selection);
            } 
          } 
        });
      },

      // Método que obtiene el evento seleccionado y prepara un mensaje.
      getEvent() {
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId"), {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {

                // Preparamos el mensaje.
                this.message = "Check out this event: " + data[0].id;
            });
      },

      // Método que envia un mensaje para compartir el evento a uno o más amigos.
      shareEvent(content) {
        let user_id_send = window.localStorage.getItem("myId");
        
        // Por cada amigo, si este está seleccionado, se envia el mensaje para compartir el evento.
        for (let i = 0; i < this.selected.length; i++) {
          let user_id_recived = this.selected[i].id;
          if (this.selected[i].isSelected) {
            fetch("http://puigmal.salle.url.edu/api/v2/messages", {
              method: 'POST',
              headers: {'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
              body: JSON.stringify({content, user_id_send, user_id_recived})
            })
            .then(res => res.json())
          }
        }
      },

      // Método para volver a la página anterior.
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

      // Método que guarda en un item el id del usuario seleccionado por el usuario.
      locateClick(id) {
        window.localStorage.setItem("selectedUserId", id);
      }

    },

    // Pedimos los amigos y preparamos el mensaje.
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

    <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
    <BackArrow v-on:back="goBack"></BackArrow>
    <br/><br/>
    <div class="topText">
      <h1>Share event</h1>
    </div>
    <br/><br/>

  </header>

  <main>

    <!-- Mostramos la lista de amigos. -->
    <li class="grid-container" v-for="(friend, index) in friends">
      <div>

        <!-- Con el v-bind vinculamos la imagen a mostrar. En caso de error mostramos una distinta por defecto. -->
        <img v-bind:src=friend.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ friend.name }}</p>

        <!-- Si el usuario marca al amigo, se guarda que está marcado en selected. -->
        <input v-model="selected[index].isSelected" type="checkbox" v-on:change="">
      </div>
    </li>

    <!-- Si el usuario no tiene amigos, se lo mostramos. -->
    <div v-if="empty">
      <h2 class="emptyList">No friends yet :(</h2>
    </div>

  </main>

  <footer>

    <!-- Si se clica el botón se envia el mensaje a los usuarios. -->
    <button v-show="!empty" class="shareButton" v-on:click="shareEvent(message)">Share</button>
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