<script>
import BackArrow from "../components/BackArrow.vue";
import Logic from "../javascript/logic.js";
export default {
  components: { BackArrow },
  data() {
    return {
        events: [],
        selected: false
      }
    },

  methods: {

    // Método que obtiene todos los próximos eventos de forma descendiente en base a la puntuación de los eventos anteriores del creador.
    getEvents() {
      let best = "";
      if (this.selected) best = "best";
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + best, {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {

          // Guardamos los eventos en una variable.
          for (let i = 0; i < data.length; i++) {
            this.events.push(data[i])
          }    
        });
    },

    // Método que guarda en un item el id del evento seleccionado por el usuario.
    locateClick(id) {
      window.localStorage.setItem("selectedEventId", id);
    },

    // Método para volver a la página anterior.
    goBack() {
      Logic.back();
    }

  },

  // Pedimos la lista de eventos.
  beforeMount(){
    this.getEvents()
  }
}

</script>

<template>

  <header>
    <br/>
    <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
    <BackArrow v-on:back="goBack"></BackArrow>
    <br/><br/>
    <div class="topText">
      <h1>Events</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>

  <main>

    <div class="sort">
      <p class="sortFont">Sort by creator rating</p>

      <!-- Cuando el usuario selecciona la casilla, se marca como selecionada y se ejecuta getEvents. -->
      <input class="sortInput" v-model="selected" type="checkbox" v-on:change="getEvents" id="sort">
    </div>
    <br/><br/><br/><br/><br/><br/>

    <!-- Con un v-for se muestran los eventos guardados en el array. -->
    <li class="grid-container" v-for="event in events" :key="event.id">
      <div>

        <!-- Con el v-bind vinculamos la imagen a mostrar. En caso de error mostramos una distinta por defecto. -->
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }}</p>

        <!-- Cuando el usuario selecciona un evento guardamos el id en un item en el localStorage para mostrarlo en la página de evento. -->
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
      </div>
    </li>

  </main>

  <footer>
  </footer>
  
</template>

<style>
  .grid-container > div > p {
    font-size: 15px;
  }

  .sortFont {
    font-size: 20px;
    font-family: 'Fredoka', sans-serif;
    display: inline;
  }

  .sortInput {
    float: left;

  }

  .sort {
    float:left;
    margin-left:0%;
  }

  @media only screen and (min-width: 640px) {
    .grid-container > div > p {
      font-size: 20px;
    }

    .sortFont {
      font-size: 26px;
      font-family: 'Fredoka', sans-serif;
      display:inline;
    }

    .sortInput {
      float: left;
      
    }

    .sort {
      float:left;
      margin-left:0%;
    }
  }


</style>