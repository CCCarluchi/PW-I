<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },

  data() {
    return {
        finishedEvents: [],
        currentEvents: [],
        futureEvents: [],
        empty:"",
        empty1:"",
        empty2:"",
        empty3:""
      }
    },

  methods: {

    // Método que, en el caso de existir, guarda los eventos creados por el usuario seleccionado que han terminado. 
    getFinishedEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId") + "/events/finished", {
        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(data => {

        // Guarda si hay eventos y en el caso de existir los guarda en una variable.
        this.empty1 = (data.length == 0);
        for (let i = 0; i < data.length; i++) {
          this.finishedEvents.push(data[i])
        }    
      });
    },

    // Método que, en el caso de existir, guarda los eventos creados por el usuario seleccionado que se estan llevando a cabo.
    getCurrentEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId") + "/events/current", {
        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(data => {

        // Guarda si hay eventos y en el caso de existir los guarda en una variable.
        this.empty2 = (data.length == 0);
        for (let i = 0; i < data.length; i++) {
          this.currentEvents.push(data[i])
        }    
      });
    },

    // Método que, en el caso de existir, guarda los eventos creados por el usuario seleccionado que se llevarán a cabo.
    getFutureEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId") + "/events/future", {
        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(data => {

        // Guarda si hay eventos y en el caso de existir los guarda en una variable.
        this.empty3 = (data.length == 0);
        for (let i = 0; i < data.length; i++) {
          this.futureEvents.push(data[i])
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

  computed: {
    
    // Comprobamos si no hay eventos creados por el usuario seleccionado.
    isEmpty() {
      return(this.empty1 && this.empty2 && this.empty3);
    }
  },

  // Pedimos los eventos del usuario seleccionado.
  beforeMount(){
    this.getFinishedEvents();
    this.getCurrentEvents();
    this.getFutureEvents();
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
  </header>

  <main>

    <!-- Si el usuario seleccionado no ha creado eventos, lo indicamos al usuario. -->
    <div v-if="isEmpty">
      <h2 class="emptyList">No events created yet</h2>
    </div>

    <!-- En el caso contrario, mostramos las listas de los eventos pasados, futuros y presentes del usuario seleccionado con 3 v-for. -->
    <div v-else>
    <h3 class="persHeader">Future events</h3>
    <li class="grid-container" v-for="event in futureEvents" :key="event.id">
      <div>

        <!-- Con el v-bind vinculamos la imagen a mostrar. En caso de error mostramos una distinta por defecto. -->
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }}</p>

        <!-- Cuando el usuario selecciona un evento guardamos el id en un item en el localStorage para mostrarlo en la página de evento. -->
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
        
      </div>
    </li>

    <h3 class="persHeader">Current events</h3>
    <li class="grid-container" v-for="event in currentEvents" :key="event.id">
      <div>

        <!-- Con el v-bind vinculamos la imagen a mostrar. En caso de error mostramos una distinta por defecto. -->
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }}</p>

        <!-- Cuando el usuario selecciona un evento guardamos el id en un item en el localStorage para mostrarlo en la página de evento. -->
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
      </div>
    </li>

    <h3 class="persHeader">Past events</h3>
    <li class="grid-container" v-for="event in finishedEvents" :key="event.id">
      <div>

        <!-- Con el v-bind vinculamos la imagen a mostrar. En caso de error mostramos una distinta por defecto. -->
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }}</p>

        <!-- Cuando el usuario selecciona un evento guardamos el id en un item en el localStorage para mostrarlo en la página de evento. -->
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
      </div>
    </li>
  </div>

  </main>
  
</template>

<style>
  .grid-container > div > p {
    font-size: 20px;
  }

  .persHeader {
    color: white;
    border: 1px solid black;
    background-color: rgb(0, 153, 255);
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 10px;
  }

</style>