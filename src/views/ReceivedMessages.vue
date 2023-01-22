<script>
  import Bar from "../components/Bar.vue";
  export default {
    components: { Bar },

    data() {
      return {
          users: [],
          empty:""
        }
      },

    methods: {

      //Método que pide a la api todos los usuarios con los que el usuario loggeado haya compartido mensajes
      getUsers() {
          fetch("http://puigmal.salle.url.edu/api/v2/messages/users", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
          })
          .then(res => res.json())
          .then(data => {
          this.empty = (data.length == 0);
          for (let i = 0; i < data.length; i++) {
              if (data[i].id != null) {
              this.users.push(data[i])
              }    
          } 
          });
      },

      //Método que guarda la id del usuario al que se ha seleciconado
      locateClick(id) {
            window.localStorage.setItem("selectedUserId", id);
      }
    },

    //Antes de montar la página se guardan los usuarios
    beforeMount(){
      this.getUsers();
    }
  }

</script>

<template>
    
  <header>
    <br/>
    <Bar></Bar>
    <br/><br/>
    <div class="topText">
      <h1>Received messages</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>
  
  <main>
    
    <!-- Se muestran todos los usuarios que se hayan recibido de la api -->
    <li class="grid-container" v-for="user in users" :key="user.id">
      <div>
        <img v-bind:src=user.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ user.name }}</p>
        <span class="break"></span>
        <a href="/Chat2" v-on:click="locateClick(user.id)"><button>Chat</button></a>
        <a href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
      </div>
    </li>

    <!-- En caso de que no haya usuarios, se muestra un mensaje -->
    <div v-if="empty">
      <h2 class="emptyList">No messages received</h2>
    </div>

  </main>
</template>

<style>
  .break {
    display: block;
    height: 10px;
  }

  @media only screen and (min-width: 640px) {

    .break {
        display: inline;
    }
  }




</style>