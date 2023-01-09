<script>

import logic from '../javascript/logic.js'

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
          fetch("http://puigmal.salle.url.edu/api/v2/users", {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)
          })
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            if (this.password == this.confirm) {
              console.log(data);
              const email = info.email;
              const password = info.password;
              window.localStorage.removeItem("token");
              logic.login({email, password});
            } else {
              alert('The passwords are not the same');
            }
          })
          .catch(() => {
            alert('The information has an incorrect format, or that mail is already registered');
          })
        },
        
        //A vegades no pilla la imatge nose perque
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
                this.image = data.data.link
                console.log(this.image)
            });
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
        <input v-model="username" placeholder="*Username"><br/>
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
        <input type="file" accept="image/*" class="custom" @change="onFileSelected"><br/>
        <h3 class="previewFont">Preview:</h3>
        <img v-bind:src="image" referrerpolicy="no-referrer" class='imgRedonda'/><br/><br/>
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