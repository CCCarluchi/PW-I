<script>
  import { createVNode } from 'vue';
  import Bar from "../components/Bar.vue";
  export default {
    components: { Bar },
      data() {
        return {
          location:"",
          keyword:"",
          date:"",
          events: [],
          empty:"",
          minDate: ""
        }

      },
      methods: {

        // Método que comprueba en que campos el usuario ha introducido información y devuelve un array con los tipos.
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

        // Método que comprueba en que campos el usuario ha introducido información y devuelve un array con esta.
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

        // Método que genera una url con la información que ha seleccionado el usuario en el buscador.
        createURL() {
          var name = this.createName();
          var value = this.createValue();
          var url = new URL("http://puigmal.salle.url.edu/api/v2/events/search?");
          for (let i = 0; i < name.length; i++) { 
            url.searchParams.append(name[i], value[i]); 
          }
        
          return url;
        },

        // Método que realiza el fetch de los eventos filtrados y guarda el resultado.
        search() {
          fetch(this.createURL(), {
            method: 'GET', 
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
          })
          .then((response) => response.json())
          .then((data) => {

            // Una vez realizado el fetch, comprobamos si nos ha devuelto eventos. 
            // En caso afirmativo, guardamos los eventos en un array e indicamos que hay eventos que coinciden con la búsqueda.
            // En caso negativo, indicamos que no hay eventos que coincidan con la búsqueda.
            this.events = [];
            if(data.length > 0) {
              this.empty = false;
              for (let i = 0; i < data.length; i++) {
                this.events.push(data[i])
              }  
            } else {
              this.empty = true;
            }
          }); 
        },

        // Método que guarda en un item el id del evento seleccionado por el usuario.
        locateClick(id) {
          window.localStorage.setItem("selectedEventId", id);
        },

        // Método que establece la fecha mínima que el usuario puede seleccionar en el input.
        setMinDate() {
          var date = new Date();
          var year = date.getFullYear() - 100;
          var month = '01';
          var day = '01'
          var fullDate = year + '-' + month + '-' + day;
          this.minDate = fullDate;
        }

      }
    }

</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header>
        <br/>
        <div class="arrowContainer"> 

            <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
            <Bar></Bar>
        </div>
        <div class="searchTitle">
          <h2>Search Events</h2>
        </div>
    </header>

    <main>

      <!-- Buscador. -->
      <form class="searchContainer2">
        <h2>Search</h2>
        <div class="inputContainer">
          <input type="text" v-model = "keyword" placeholder="Search event by keyword">
        </div>
        <div class="inputContainer">

          <!-- Cuando el usuario va a seleccionar la fecha se calcula los límites con setMinDate. -->
          <input v-model = "date" v-on:click="setMinDate" :min="minDate" placeholder="Search event by start date" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
        </div>
        <div class="inputContainer">
          <input type="text" v-model = "location" placeholder="Search event by location">
        </div>
        <div class="inputContainer">

          <!-- Cuando el usuario clica el botón se ejecuta search para realizar el fetch. -->
          <button type="submit" v-on:click.prevent="search()"><i class="fa fa-search"></i></button><br/><br/>
        </div>
      </form>
      <br/><br/><br/>
      

      <!-- En el caso de que no haya eventos que coincidan con la búsqueda se le indica al usuario. -->
      <div v-if="empty">
        <h2 class="emptyList">No events match the search</h2>
      </div>

      <!-- Si hay elementos, con un v-for se muestran los eventos guardados en el array. -->
      <div v-else>
        <li class="grid-container" v-for="event in events" :key="event.id">
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
</style>