<script>
import { createVNode } from 'vue';

 export default {
      data() {
        return {
          location:"",
          keyword:"",
          date:"",
          events: [],
        }

      },
      methods: {
        createName() {
          var name = [];
          if(this.location.length != 0) {
            name.push("location");
          }

          if(this.keyword.length != 0) {
            name.push("keyword");
          }

          if(this.date.length != 0) {
            name.push("date");
          }
  
          return name;
        },

        createValue() {
          var value = [];
          if(this.location.length != 0) {
            value.push(this.location);
          }

          if(this.keyword.length != 0) {
            value.push(this.keyword);
          }

          if(this.date.length != 0) {
            value.push(this.date);
          }
          
          return value;
        },

        createURL() {
          var name = this.createName();
          var value = this.createValue();
          var url = new URL("http://puigmal.salle.url.edu/api/v2/events/search?");
          for (let i = 0; i < name.length; i++) { 
            url.searchParams.append(name[i], value[i]); 
          }
        
          return url;
        },

        search() {
          fetch(this.createURL(), {
            method: 'GET', 
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
          })
          .then((response) => response.json())
          .then((data) => {
            this.events = [];
            for (let i = 0; i < data.length; i++) {
              this.events.push(data[i])
            }  
          }); 
        },

        locateClick(id) {
          window.localStorage.setItem("selectedEventId", id);
        }

      }
    }

</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <main>
    <header>
        <br/>
        <div class="arrowContainer"> 
            <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
        </div>
        <div class="searchTitle">
          <h2>Search Events</h2>
        </div>
    </header>
   
    <nav>
        <div class="searchContainer2">
          <h2>Search</h2>
          <div class="inputContainer">
            <input type="text" v-model = "keyword" placeholder="Search event by keyword">
          </div>
          <div class="inputContainer">
            <input v-model = "date" placeholder="Search event by start date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
          </div>
          <div class="inputContainer">
            <input type="text" v-model = "location" placeholder="Search event by location">
          </div>
          <div class="inputContainer">
            <button type="submit" v-on:click="search()"><i class="fa fa-search"></i></button><br/><br/>
          </div>
        </div>
        <br/><br/><br/>
      </nav>

      <li class="grid-container" v-for="event in events" :key="event.id">
        <div>
          <img v-bind:src=event.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
          <p>{{ event.name }} <!-- -- {{ event.eventStart_date }} -- {{ event.location }} --> </p>
          <a href="/Event" v-on:click="locateClick(event.id)"><button>Event</button></a>
        </div>
      </li>

    </main>

</template>

<style>
  .grid-container > div > p {
    font-size: 20px;
  }
</style>