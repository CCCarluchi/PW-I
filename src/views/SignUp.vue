<script>

  import { onBeforeMount } from 'vue';
import login from './../javascript/login.js'

  export default {
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
        }

      },
      methods: {
        signUp(info = {}) {
          console.log(info);
          fetch("http://puigmal.salle.url.edu/api/v2/users", {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)})
          .then((response) => response.json())
          .then((data) => {
            const email = info.email;
            const password = info.password;
            if (data.hasOwnProperty('Error')) {
                alert('The information has an incorrect format, or that mail is already registered');
            } else {
              window.localStorage.removeItem("token");
              login.login({email, password});
              
            }
          }); 
        },
        
        onFileSelected(event) {
          const formdata = new FormData()
          formdata.append("image", event.target.files[0])
            fetch("https://api.imgur.com/3/image/", {
                method: 'POST',
                headers: {'Authorization': "Client-ID 3eed77413905d63"},
                body: formdata
            }).then(data => data.json()).then(data => {
                this.image = data.data.link
            })
        }
      },
      beforeMount() {
        window.localStorage.clear();
      }
    }
  
</script>
<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
    <div class="appTitle">
      <h2>Sign up</h2>
    </div>
  </header>
    
  <main>
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
        <input id="vmodel-example" v-model="username" placeholder="*Username"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Date of birth" v-model="birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
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
        <input type="file" accept="image/*" class="custom" @change="onFileSelected" placeholder="+ Add your profile picture"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <button v-on:click.prevent="signUp({ name, last_name, email, password, image });"> Register </button>
        <router-link to="/Home"><button>Register</button></router-link>
      </div>
    </form>
    <br/><br/>
  </main>

  <footer>
  </footer>

</template>