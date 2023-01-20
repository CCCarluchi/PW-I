<script>
  import Bar from "../components/Bar.vue";
  export default {
    components: { Bar },

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
      <BackArrow v-on:back="goBack"></BackArrow>
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