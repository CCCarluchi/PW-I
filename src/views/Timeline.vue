<script>
  import Bar from "../components/Bar.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { Bar },


    data() {
      return {
          events: [],
        }
      },

    methods: {

      //Método que pide a la api los eventos en los que el usuario ha participado en el pasado
      getEvents() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId") + "/assistances/finished", {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.events.push(data[i])
          }    
        });
      },

      //Método que guarda la id del usuario al que se ha seleciconado
      locateClick(id) {
        window.localStorage.setItem("selectedEventId", id);
      },

      //Método que retrocede a la página anterior
      goBack() {
          Logic.back();
        }
    },

    //Antes de montar la página se guardan los eventos
    beforeMount(){
      this.getEvents()
    }
  }

</script>

<template>
    <main>
      <header>
        <br/>
        <Bar></Bar>
        <br/><br/>
        <div class="topText">
          <h1>Timeline</h1>
        </div>
      </header>
  
      <!-- Se muestran todos los eventos pasados -->
      <li class="grid-container" v-for="event in events" :key="event.id">
      <div>
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
      </div>
    </li>

    </main>
  </template>