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
    getEvents() {
      let best = "";
      if (this.selected) best = "best";
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + best, {
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

  <header>
    <br/>
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
      <input class="sortInput" v-model="selected" type="checkbox" v-on:change="getEvents" id="sort">
    </div>
    <br/><br/><br/><br/><br/><br/>

    <li class="grid-container" v-for="event in events" :key="event.id">
      <div>
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
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