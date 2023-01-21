<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },
    data() {
      return {
        user: {
          name:"",
          last_name:"",
          email:"",
          password:"",
          image:""
        }
      }
    },

    methods: {
      //Método que sirve para guardar la imagen en una api i poder luego utilizar su link
      onFileSelected(event) {
        const formdata = new FormData()
        formdata.append("image", event.target.files[0])
          fetch("https://api.imgur.com/3/image/", {
            method: 'POST',
            headers: {'Authorization': "Client-ID 3eed77413905d63"},
            body: formdata
          })
          .then(data => data.json()).then(data => {
            this.user.image = data.data.link
          })
      },
      // Método domde cambiamos todos los datos actualizados
      editProfile() {
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
          }, 
          body: JSON.stringify(this.event)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.length > 20) {
            alert("Some information has wrong format")
          } else {
            //window.location.assign('/Data');
          }
        });
      },

      // Método en el que cojemos los datos que van a ser modificados para mostrarlos posteriormente por pantalla
      getData() {
          fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId"), {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
          })
          .then(res => res.json())
          .then(data => {
            this.user.name = data[0].name;
            this.user.last_name = data[0].last_name;
            this.user.email = data[0].email;
            this.user.password = data[0].password;
            this.user.image = data[0].image;
          }); 
      },
      // Método para volver a la página anterior.
      goBack() {
        Logic.back();
      }
    },
    // Pedimos los datos del usuario.
    beforeMount() {
      this.getData()
    }
  }

</script>

<template>

  
    <header>
      <br/>
      <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
      <BackArrow v-on:back="goBack"></BackArrow>
      <br/><br/>
      <div class="topText">
        <h1>Edit profile</h1>
      </div>
      <br/><br/><br/>
    </header>

    <main>
     <!-- Guardamos en cada variable usando v-model los datos introducidos en cada apartado -->
      <form>
        <div class="inputContainer">
          <input type="text" v-model="user.name" placeholder="*Name"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="text" v-model="user.last_name" placeholder="*Last name"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="text" v-model="user.email" placeholder="*Email"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="password" v-model="user.password" placeholder="*Password"><br/>
        </div>
        <br/><br/>
        
        <!-- Conseguimos el fichero de la imagen y llamamos a la funcion para guardarla -->
        <div class="inputContainer">
          <input type="file" accept="image/*" class="custom" @change="onFileSelected"><br/>
          <h3 class="previewFont">Preview:</h3>
          <img v-bind:src="user.image" referrerpolicy="no-referrer" class='imgRedonda'/><br/><br/>
        </div>
        <br/><br/>
        
      </form>  

     
    </main>

    <footer>
      <a id="button2"><button class = "button2" v-on:click="editProfile">Apply Changes</button></a><br/><br/>
    </footer>
      
</template>