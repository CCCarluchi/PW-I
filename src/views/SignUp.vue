<script>
  export default {
      data() {
        return {
          name: "",
          surname: "",
          username:"",
          birth:"",
          email:"",
          password:"",
          confirm:"",
          image:"hfhf.com",
          error:""
        }
      },

      methods: {
        signUp(url = '', data = {}) {
          response = fetch(url, {method: 'POST', body: JSON.stringify(data)});
          return response.json();
        },

      }
  }
  
</script>
<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <router-link to="/" id="i"><i class="arrow left"></i></router-link>
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
        <input type="text" v-model="surname" placeholder="*Surname"><br/>
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
        <input type="file" accept="image/*" class="custom" placeholder="+ Add your profile picture"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <button v-on:click="signUp('http://puigmal.salle.url.edu/api/v2/users', { name }).then((response) => {
          console.log(response)});"> Register </button>
        <router-link to="/Home" id="button"><button>Register</button></router-link>
      </div>
    </form>
    <br/><br/>
  </main>

  <footer>
  </footer>

</template>