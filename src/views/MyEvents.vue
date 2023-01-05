<script>

export default {

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
    getFinishedEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId") + "/events/finished", {
        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(data => {
        this.empty1 = (data.length == 0);
        for (let i = 0; i < data.length; i++) {
          this.finishedEvents.push(data[i])
        }    
      });
    },

    getCurrentEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId") + "/events/current", {
        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(data => {
        this.empty2 = (data.length == 0);
        for (let i = 0; i < data.length; i++) {
          this.currentEvents.push(data[i])
        }    
      });
    },

    getFutureEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId") + "/events/future", {
        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
      })
      .then(res => res.json())
      .then(data => {
        this.empty3 = (data.length == 0);
        for (let i = 0; i < data.length; i++) {
          this.futureEvents.push(data[i])
        }    
      });
    },

    locateClick(id) {
      window.localStorage.setItem("selectedEventId", id);
    }

  },

  computed: {
    isEmpty() {
      return(this.empty1 && this.empty2 && this.empty3);
    }
  },

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
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Events</h1>
    </div>
  </header>

  <main>

    <div v-if="isEmpty">
      <h2 class="emptyList">No events created yet</h2>
    </div>

    <div v-else>
    <h3 class="persHeader">Future events</h3>
    <li class="grid-container" v-for="event in futureEvents" :key="event.id">
      <div>
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
        <a href="/ConfirmDelete" v-on:click="locateClick(event.id)"><button>Delete</button></a>
        <a href="/EditEvent" v-on:click="locateClick(event.id)"><button>Edit</button></a>
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
        
      </div>
    </li>

    <h3 class="persHeader">Current events</h3>
    <li class="grid-container" v-for="event in currentEvents" :key="event.id">
      <div>
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
        <a href="/ConfirmDelete" v-on:click="locateClick(event.id)"><button>Delete</button></a>
        <a href="/EditEvent" v-on:click="locateClick(event.id)"><button>Edit</button></a>
        <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
      </div>
    </li>

    <h3 class="persHeader">Past events</h3>
    <li class="grid-container" v-for="event in finishedEvents" :key="event.id">
      <div>
        <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
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