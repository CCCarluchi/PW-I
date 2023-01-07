<script>

  export default {

    methods: {
      logOut() {
        window.localStorage.clear()
      }
    }
  }

</script>

<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
  </header>
  <br/>

  <main>
    <div class="card">
      <div>
        <h2 class="center">Log out</h2>
      </div>
      <div>
        <p class="p2">Do you wish to log out?</p>
      </div>
      <br/><br/>
        <div class="inputContainer">
          <a href="/" v-on:click="logOut"><button>Log out</button></a>
        </div>
    </div>
  </main>

</template>