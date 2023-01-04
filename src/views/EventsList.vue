<script>

export default {

  data() {
    return {
        events: [],
      }
    },

  methods: {
    getEvents() {
      fetch("http://puigmal.salle.url.edu/api/v2/events/best", {
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
      window.localStorage.setItem("selectedId", id);
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
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Events</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>

  <main>

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
    font-size: 20px;
  }
</style>