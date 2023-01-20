<script>
import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },
    data() {
      return {

      }
    },
    methods: {

      //Método que retrocede a la página anterior
      goBack() {
        Logic.back();
      }
    }
  }
</script>

<template>
    
  <header>
    <br/>
    <BackArrow v-on:back="goBack"></BackArrow>
    <br/><br/>
    <div class="topText">
      <h1>Messages</h1>
    </div>    
    <br/>
  </header>
  
  <main>
    
    <article class="elementsGrid">
      <div class="profileItem">
        <a href="/Users" id="button"><button class="buttonProfile">Text new user</button></a>
      </div>
      <div class="profileItem">
        <a href="/ReceivedMessages" id="button"><button class="buttonProfile">Received messages</button></a>
      </div>
    </article>

  </main>
</template>