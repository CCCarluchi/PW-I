<script>
  import Bar from "../components/Bar.vue";
  import UserItem from "../components/UserItem.vue";

  export default {
    components: { Bar, UserItem },

    data() {
      return {
          users: [],
          name:""
        }
      },

    methods: {
      //Método que pide a la api la información de todos los usuarios y los guarda
      getUsers() {
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.users.push(data[i])
          }    
        });
      },
      
      //Método que filtra a los usuarios por el nombre, apellido o mail
      searchUsers(name) {
        fetch('http://puigmal.salle.url.edu/api/v2/users/search?s=' + name, {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.users.splice(0)
          for (let i = 0; i < data.length; i++) {
            this.users.push(data[i])
          } 
          
        })
      },

      //Método que guarda la id del usuario al que se ha seleciconado
      locateClick(id) {
        window.localStorage.setItem("selectedUserId", id);
      },

      //Método que comprueba si el usuario loggeado es uno de los usuario que aparecen
      isNotMe(id) {
        return (id != window.localStorage.getItem("myId"))
      }
    },

    //Antes de montarse se recoge la información de todos los usuarios
    beforeMount(){
      this.getUsers();
    }
  }

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  <header>
    <br/>
    <Bar></Bar>
    <br/><br/>
    <div class="topText">
      <h1>Users list</h1>
    </div>
    <br/><br/>
    
    <!-- Barra con la que se puede buscar a los usuarios -->
    <div class="searchContainer">
      <input type="text" v-model="name" placeholder="Search user...">
      <button type="button" v-on:click="searchUsers(name)"><i class="fa fa-search"></i ></button><br/><br/>
    </div>
    <br/>
  </header>
  
  <main>
    
    <!-- V-for que muestra a todos los usuarios de la api, con su información. En caso de que uno de esos usuarios seamos nosotros, no aparecerá -->
    <li class="grid-container" v-for="user in users" :key="user.id">
      <UserItem v-bind:image="user.image" v-bind:name="user.name" v-bind:id="user.id" v-bind:friend="false"></UserItem>
    </li>

  </main>
</template>