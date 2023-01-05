<script>

export default {
  data() {
    return {
      puntuation:"",
      comment:""
    }
  },

  methods: {
    postRating() {
      console.log(this.puntuation, this.comment)
    }
  }
}


</script>

<template>
    
  <header>
    <br/>
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="rateEventTop">
      <h1>Rate the event</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>

  <main>
    
    <form class="rateEventMain">

      <h3>Event Name</h3><br/><br/>
      <p>Your puntuation:</p>

      <select name="lenguajes" v-model="puntuation">
        <option value="javascript">0</option>
        <option value="php">1</option>
        <option value="java">2</option>
        <option value="golang">3</option>
        <option value="python">4</option>
        <option value="c#">5</option>
        <option value="C++">6</option>
        <option value="erlang">7</option>
        <option value="c#">8</option>
        <option value="C++">9</option>
        <option value="erlang">10</option>
      </select>
      <br/><br/>

      <p>Comments on the event:</p>
      <div class="inputContainer">
        <textarea type="text" v-model="comment" placeholder="*Comments"></textarea>
      </div>

    </form>
  </main>

  <footer>
    <a v-on:click="postRating"><button class = "button2">Done</button></a>
  </footer>

</template>

<style>

label {
  padding: 0px;
  margin-left: 0px;
}

.rateEventTop {
  background-color: rgb(0, 153, 255);
  margin-left: 37.5%;
  margin-right: 37.5%;
  padding: 5px;
  border: 2px solid black;
}

.rateEventTop > h1 {
  color: white;
  font-size: 56px;
  
}

.rateEventMain {
  background-color: rgba(255, 204, 153);
  margin-left: 32.5%;
  margin-right: 32.5%;
  margin-bottom: 25px;
  padding: 1%;
  border: 1px solid black;
}

.rateEventMain > p {
  font-size: 22px;
  font-family: 'Fredoka', sans-serif;
}

.rateEventMain > h3 {
  text-align: center;
}

</style>