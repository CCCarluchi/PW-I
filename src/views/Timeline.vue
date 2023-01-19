<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },


    data() {
      return {
          events: [],
        }
      },

    methods: {
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

      locateClick(id) {
        window.localStorage.setItem("selectedEventId", id);
      },

      goBack() {
          Logic.back();
        }
    },

    beforeMount(){
      this.getEvents()
    }
  }

</script>

<template>
    <main>
      <header>
        <br/>
        <BackArrow v-on:back="goBack"></BackArrow>
        <br/><br/>
        <div class="topText">
          <h1>Timeline</h1>
        </div>
      </header>
  
      <li class="grid-container" v-for="event in events" :key="event.id">
      <div>
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
      </div>
    </li>

    </main>
  </template>