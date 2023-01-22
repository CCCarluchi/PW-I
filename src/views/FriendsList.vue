<script>
  import Bar from "../components/Bar.vue";
  import UserItem from "../components/UserItem.vue";
  export default {
    components: { Bar, UserItem },
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
      <UserItem v-bind:image="friend.image" v-bind:name="friend.name" v-bind:id="friend.id" v-bind:friend="true"></UserItem>
    </li>

    <!-- Si no se ha recibido información de la api, el usuario no tiene amigos y un mensaje se lo muestra -->
    <div v-if="empty">
      <h2 class="emptyList">No friends yet :(</h2>
    </div>


  </main>
</template>