<script>

  export default {

    methods: {
      deleteEvent() {
        fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId"), {
          method: 'DELETE',
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)  
        });
      }
    }
  }

</script>

<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
  </header>
  <br/>

  <main>
    <div class="card">
      <div class="cardText">
        <h2>Delete event</h2>
      </div>
      <div class="cardText">
        <p class="p2">Do you really want to delete the event?</p>
      </div>
      <br/><br/>
        <div class="inputContainer">
          <a href="/MyEvents" id="button" v-on:click="deleteEvent"><button>Delete</button></a>
        </div>
    </div>
  </main>

</template>

<style>
.cardText {
  text-align: left;
}

</style>