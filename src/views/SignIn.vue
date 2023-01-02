<script >

  export default {
    data() {
      return {
        email:"",
        password:""
      }
    },

    methods: {
      login (info = {}) {
        fetch('http://puigmal.salle.url.edu/api/v2/users/login', {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(info)})
        .then(response => response.json())
        .then (data => { 
            //window.localStorage.setItem("token", data.accessToken);
            console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  } 
</script>

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
        <input type="text" v-model="email" placeholder="Mail"><br/>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <input type="password" v-model="password" placeholder="Password"><br/>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <button v-on:click.prevent="login({ email, password })">Sign in</button>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <a href="/SignUp" id="a" class="a2">Sign up</a>
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