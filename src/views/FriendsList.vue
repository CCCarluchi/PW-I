<script>
  import Bar from "../components/Bar.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { Bar },
    data() {
        return {
            friends: [],
            empty: ""
        };
    },
    methods: {

        //Método para pedir información a la api, en este caso de los amigos del usuario
        getFriends() {
            fetch("http://puigmal.salle.url.edu/api/v2/friends", {
                headers: { "Authorization": "Bearer " + window.localStorage.getItem("token") }
            })
                .then(res => res.json())
                .then(data => {
                this.empty = (data.length == 0);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id != null) {
                        this.friends.push(data[i]);
                    }
                }
            });
        },

        //Método para saber a qué usuario se le ha hecho click para ir a su perfil, de manera 
        //que se guarda su id para luego saber de qué usuario pedir la información a la api
        locateClick(id) {
            window.localStorage.setItem("selectedUserId", id);
        },

        //Método para ir una página atrás
        goBack() {
          Logic.back();
        }

    },

    //Antes de montarse la página se pide la información de los amigos
    beforeMount() {
        this.getFriends();
    },
}

</script>

<template>
    
  <header>
    <br/>
    <Bar></Bar>
    <br/><br/>
    <div class="topText">
      <h1>Friends list</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>
  
  <main>
    
    <!-- Con el v-for se muestran todos los amigos recibios de la api, con sus datos cada uno -->
    <li class="grid-container" v-for="friend in friends" :key="friend.id">
      <div>
        <img v-bind:src=friend.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ friend.name }}</p>
        <!-- En caso de seleccionar a uno de los usuarios, se llama a la función locateClick para guardar su id -->
        <a href="/FriendProfile" v-on:click="locateClick(friend.id)"><button>Profile</button></a>
      </div>
    </li>

    <!-- Si no se ha recibido información de la api, el usuario no tiene amigos y un mensaje se lo muestra -->
    <div v-if="empty">
      <h2 class="emptyList">No friends yet :(</h2>
    </div>


  </main>
</template>