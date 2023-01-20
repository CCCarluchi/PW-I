<script>
  export default {

    data() {
      return {
        name:"",
        image:""
      }
    },

    methods: {

      //Método para pedir la información del amigo escogido a la api y guardarla en variables locales
      getFriend() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId"), {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.name = data[0].name;
          this.image = data[0].image;
        })
      }
    },

    //Se hace la petición a la api antes de montarse la página
    beforeMount() {
      this.getFriend()
    }
  }

</script>

<template>

  <header>
    <br/>
    <!-- En este caso la flechita vuelve para atrás dos páginas, ya que si se viene desde el NotFriend se entra en un bucle -->
    <a v-on:click="$router.go(-2)" id="i"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="profileGrid">
      <div class="profileMain">
        <!-- Se usa la imagen y nombre recibido de la api. En caso de que la imagen no sea valida se utiliza un placeholder -->
        <br/><br/><img v-bind:src="image" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgRedonda'/>
        <h1>{{name}}</h1>
      </div>
    </div>
  </header>
  
  <main>
    <article class="elementsGrid">
      <div class="profileItem">
        <a href="/Statistics"><button class="buttonProfile">Public stats</button></a>
      </div>
      <div class="profileItem">
        <a href="/FriendEvents"><button class="buttonProfile">{{name}} events</button></a>
      </div>
    </article>
  </main>
    
</template>