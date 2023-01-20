<script>
  import Bar from "../components/Bar.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { Bar },
    data() {
      return {
        name:"",
        image:""
      }
    },

    methods: {

      //Método que pide la información del usuario seleccionado a la api y la guarda
      getUser() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId"), {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.name = data[0].name;
          this.image = data[0].image;
        })
      },

      //Método que retrocede a la página anterior
      goBack() {
        Logic.back();
      }
    },

    //Antes de montar la página se comprueba si el usuario es amigo nuestro y se pide su información
    beforeMount() {
      Logic.checkFriends()
      this.getUser()
    }

  }
</script>

<template>

  <header>
    <br/>
    <Bar></Bar>
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
    <div class="elementsGrid">
      <div class="profileItem">
        <a href="/SendRequest" id="button"><button class="buttonProfile">+ Add friend</button></a>
      </div>
      <div class="profileItem">
        <a href="/Statistics" id="button"><button class="buttonProfile">Public stats</button></a>
      </div>
    </div>
  </main>
</template>