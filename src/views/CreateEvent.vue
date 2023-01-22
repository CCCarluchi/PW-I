<script>
  import Bar from "../components/Bar.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { Bar },
    data() {
      return {
        event: {
          name:"",
          image:"",
          location:"",
          latitude:"",
          longitude:"",
          eventStart_date:"",
          eventEnd_date:"",
          n_participators:"",
          type:"",
          description:""
        },
        startDate:"",
        startTime:"",
        endDate:"",
        endTime:"",
        minDate:""
      }
    },

    methods: {

      // Método que cuelga imagen en imgur y la guarda en una variable.
      onFileSelected(event) {
        const formdata = new FormData()
        formdata.append("image", event.target.files[0])
          fetch("https://api.imgur.com/3/image/", {
              method: 'POST',
              headers: {'Authorization': "Client-ID 3eed77413905d63"},
              body: formdata
          }).then(data => data.json()).then(data => {
              this.event.image = data.data.link
          })
      },

      // Método que crea un nuevo evento.
      createEvent() {
        fetch("http://puigmal.salle.url.edu/api/v2/events", {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
          }, 
          body: JSON.stringify(this.event)
        })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json()
        })
        .then(() => {

          // Si se ha creado bien el evento, redirigimos al usuario al nuevo evento.
          window.location.assign('/Events');
        })
        .catch(() => {

          // En el caso de haber un error de formato de información, avisamos al usuario.
          alert("Some information has wrong format")
        }) 
      },

      // Método que establece la fecha mínima que se puede seleccionar en el input.
      setMinDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = ('0' + date.getMonth() + 1).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        var fullDate = year + '-' + month + '-' + day;
        this.minDate = fullDate;
      }
    },

    computed: {

      // Método que junta los valores relacionados con la fecha y la hora, según pide la API.
      calculateTimes() {
        if (this.startDate != undefined && this.startTime != undefined) {
          this.event.eventStart_date = this.startDate.concat('T', this.startTime, ':00.000Z');
        }
        if (this.endDate != undefined && this.endTime != undefined) {
          this.event.eventEnd_date = this.endDate.concat('T', this.endTime, ':00.000Z');
        }
      }
    } 
  }

</script>

<template>
  
  <header>
    <br/>
    <Bar></Bar>
    <br/><br/>
    <div class="topText">
      <h1>Create event</h1>
    </div>
    <br/><br/><br/>
  </header>

  <main>

    <!-- Formulario donde se pide la información del nuevo evento. -->
    <form>
      <div class="inputContainer">
        <input type="text" v-model="event.name" placeholder="*Name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Location" v-model="event.location" type="text"><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">
        <input placeholder="*Latitude" v-model="event.latitude" type="text"><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">
        <input placeholder="*Longitude" v-model="event.longitude" type="text"><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">

        <!-- Cuando el usuario va a elegir la fecha, se establece el limite de selección. -->
        <input placeholder="*Start date" v-model="startDate" v-on:click="setMinDate" :min ="minDate" v-bind="calculateTimes" type="text" onfocus="(this.type='date')" onblur="(this.type='text')"><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">
        <input placeholder="*Start time" v-model="startTime" v-bind="calculateTimes" type="text" onfocus="(this.type='time')" onblur="(this.type='text')"><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">

        <!-- Cuando el usuario va a elegir la fecha, se establece el limite de selección. -->
        <input placeholder="*End date" v-model="endDate" v-on:click="setMinDate" :min ="minDate" v-bind="calculateTimes" type="text" onfocus="(this.type='date')" onblur="(this.type='text')"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*End time" v-model="endTime" v-bind="calculateTimes" type="text" onfocus="(this.type='time')" onblur="(this.type='text')"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Max participants" v-model="event.n_participators" type="text"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Type" v-model="event.type" type="text"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">

        <!-- Cuando el usuario selecciona la imagen que desea, se ejecuta onFileSelected y mostramos una preview con v-bind. -->
        <input type="file" accept="image/*" class="custom2" @change="onFileSelected"><br/>
        <h3 class="previewFont">Preview:</h3>
        <img v-bind:src="event.image" referrerpolicy="no-referrer" class='imgRedonda'/><br/><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">
        <textarea type="text" v-model="event.description" placeholder="*Description"></textarea><br/>
      </div>

    </form>

  </main>

  <footer>
    <br/><br/>
    <div class="inputContainer">

        <!-- Al clicar el botón ejecutamos createEvent. -->
        <a v-on:click="createEvent"><button>Create</button></a>
      </div>
  </footer>
  
</template>

<style>

.custom2::-webkit-file-upload-button {
  visibility: hidden;
}

.custom2::before {
  content: '+ Select the event picture';
  border-radius: 4px;
  border: 1px solid transparent;
  width: 237px;
  height: 29px;
  font-size: 20px;
  font-family:'Roboto', sans-serif;
  color:rgba(0, 0, 0, 0.68);
  text-align:left;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;
}

.custom2:hover::before {
  border-color: transparent;
}
.custom2:focus::before,
.custom2:focus-visible::before {
  outline: 4px auto -webkit-focus-ring-color;
}

@media only screen and (min-width: 640px) {
.custom2::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom2::before {
    content: '+ Select the event picture';
    border-radius: 4px;
    border: 1px solid transparent;
    width: 580px;
    height: 42px;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    color:rgba(0, 0, 0, 0.68);
    text-align:left;
    background-color: white;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .custom2:hover::before {
    border-color:transparent;
  }
  .custom2:focus::before,
  .custom2:focus-visible::before {
    outline: 4px auto -webkit-focus-ring-color;
  }
}

</style>