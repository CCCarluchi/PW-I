<script>
import Bar from "../components/Bar.vue";
  export default {
    components: { Bar }
  }
</script>

<template>
    
  <header>
    <br/>
    <Bar></Bar>
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