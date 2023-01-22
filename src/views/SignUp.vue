<script>
  import Bar from "../components/Bar.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { Bar },

      data() {
        return {
          name: "",
          last_name: "",
          username:"",
          birth:"",
          email:"",
          password:"",
          confirm:"",
          image:"",
          minDate: "",
          maxDate: ""
        }

      },
      methods: {

        //Método que crea un usuario y lo sube a la api
        signUp(info = {}) {
          fetch("http://puigmal.salle.url.edu/api/v2/users", {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)
          })
          .then(response => {
            //Si se produce algun error en el proces, se lanza un error
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            //Si todo ha salido bien se hace login con el usuario que se acaba de crear, para ir directamente a la página principal
            const email = info.email;
            const password = info.password;
            window.localStorage.clear();
            Logic.login({email, password});
          })
          .catch(() => {
            //En caso de que se haya producido algun error, se muestra una alerta al usuario
            alert('The information has an incorrect format, or that mail is already registered');
          })
        },
        
        //Método que sube la imagen seleccionada de los ficheros a la api de imgur para poder mostrarla correctamente en la web y que otros la puedan ver también
        onFileSelected(event) {
          const formdata = new FormData()
          formdata.append("image", event.target.files[0])
            fetch("https://api.imgur.com/3/image/", {
                method: 'POST',
                headers: {'Authorization': "Client-ID 3eed77413905d63"},
                body: formdata
            })
            .then(data => data.json())
            .then(data => {
                this.image = data.data.link;
            });
        },

        //Método que comprueba que todos los campos contengan información y que las contraseñas coincidan
        checkDataForSignUp(info = {}) {
          if (this.name.length == 0 || this.last_name.length == 0 || this.username.length == 0 || this.birth.length == 0 || this.email.length == 0 || this.password.length == 0 || this.confirm.length == 0 || this.image == 0) {
            alert('All fields are required');
          } else {
          if(this.password.localeCompare(this.confirm) == 0) {
            this.signUp(info);
          } else {
              alert('Passwords do not match');
            }
          }
        },

        //Método que limita la fecha que se puede escoger al crearse el usuario
        setLimitsDate() {
          var dateMax = new Date();
          var yearMax = dateMax.getFullYear();
          var monthMax = ('0' + dateMax.getMonth() + 1).slice(-2);
          var dayMax = ('0' + dateMax.getDate()).slice(-2);
          var fullDateMax = yearMax + '-' + monthMax + '-' + dayMax;
          this.maxDate = fullDateMax;
          
          var dateMin = new Date();
          var yearMin = dateMin.getFullYear() - 100;
          var monthMin = '01';
          var dayMin = '01'
          var fullDateMin = yearMin + '-' + monthMin + '-' + dayMin;
          this.minDate = fullDateMin;
        }
      },
    }
  
</script>
<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <Bar></Bar>
    </div>
    <div class="appTitle">
      <h2>Sign up</h2>
    </div>
  </header>
    
  <main>
    <!-- Todos los campos se guardan en distintas variables locales, para luego enviarselo a la api -->
    <form>
      <div class="inputContainer">
        <input type="text" v-model="name" placeholder="*Name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" v-model="last_name" placeholder="*Last_name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input v-model="username" placeholder="*Username"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Date of birth" v-model="birth" v-on:click="setLimitsDate" :max="maxDate" :min="minDate" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" v-model="email" placeholder="*Email"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="password" v-model="password" placeholder="*Password"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="password" v-model="confirm" placeholder="*Confirm Password"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="file" accept="image/*" class="custom" @change="onFileSelected"><br/>
        <h3 class="previewFont">Preview:</h3>
        <img v-bind:src="image" referrerpolicy="no-referrer" class='imgRedonda'/><br/><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <button v-on:click.prevent="checkDataForSignUp({ name, last_name, email, password, image });"> Register </button>
      </div>
    </form>
    <br/><br/>
  </main>

</template>