<template>
  
  <header>
    <div class="appTitle">
      <h1>Slow-Go</h1>
    </div>
  </header>

  <main>
    <figure>
      <img src="src/assets/withHat.png" alt="logo" class="imgLogo">
    </figure>
    <br/><br/>

    <form>
      <div class="inputContainer">
        <input type="text" placeholder="Username"><br/>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <input type="password" placeholder="Password"><br/>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <button v-on:click.prevent="login">Sign in  {{password}}</button>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <router-link to="/SignUp" id="a" class="a2">Sign up</router-link>
      </div>
    </form>
    <br/><br/>

  </main>

  <footer>
  </footer>

</template>

<style>
.imgLogo {
  max-width:200px;
  max-height:200px;
  border-radius:10px;
  margin-right: 15px;
}

@media only screen and (min-width: 640px) {
.imgLogo {
    max-width:332px;
    max-height:332px;
    border-radius:100px;
    margin-right: 15px;
  }
  }
</style>

<script>
  export default {
      data() {
        return {
          signIn: "",
          user:"",
          password:"",
          error:""
        }
      },
      methods: {
        login() {
          fetch('http://puigmal.salle.url.edu/api/v2')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.password = data.events.url
          });
      }
    }
  }
  
</script>