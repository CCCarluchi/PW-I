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
          image:"",
          error:""
        }
      },
      methods: {
        login() {
          fetch('http://puigmal.salle.url.edu/api/v2/users', {method: 'POST'})
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.name = data.events.url
            this.surname = data.events.url
            this.birth = data.events.url
            this.email = data.events.url
            this.password = data.events.url
            this.image = data.events.url
          });
      }
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
        <input type="text" placeholder="*Name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" placeholder="*Surname"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" placeholder="*Username"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Date of birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" placeholder="*Email"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="password" placeholder="*Password"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="password" placeholder="*Confirm Password"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="file" accept="image/*" class="custom" placeholder="+ Add your profile picture"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <button v-on:click.prevent="login">Register  {{password}}</button>
        <router-link to="/Home" id="button"><button>Register</button></router-link>
      </div>
    </form>
    <br/><br/>
  </main>

  <footer>
  </footer>

</template>