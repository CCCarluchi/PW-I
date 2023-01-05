<script>

export default {
  data() {
    return {
      puntuation: null,
      comentary:""
      
    }
  },

  methods: {
    postRating(info) {
      fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedId") + "/assistances", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + window.localStorage.getItem("token")
        },
        body: JSON.stringify(info)
      })
      .then(res => res.text())
      .then(data => {
        if (data.length > 20) {
          alert("Some information has wrong format")
        } else {
          window.location.assign('/Events');
        }
      }); 
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

      <select name="puntuation" v-model="puntuation">
        <option value=0>0</option>
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        <option value=5>5</option>
        <option value=6>6</option>
        <option value=7>7</option>
        <option value=8>8</option>
        <option value=9>9</option>
        <option value=10>10</option>
      </select>
      <br/><br/>

      <p>Comments on the event:</p>
      <div class="inputContainer">
        <textarea type="text" v-model="comentary" placeholder="*Comments"></textarea>
      </div>

    </form>
  </main>

  <footer>
    <a v-on:click="postRating({puntuation, comentary})"><button class = "button2">Done</button></a>
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