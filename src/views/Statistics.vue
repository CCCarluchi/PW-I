<script>
  export default {
    data() {
      return {
        user: {
          avg_score: "",
          num_comments:"",
          percentage_commenters_below:"",

        }
      }
    },

    methods: {
      getData() {
          fetch("http://puigmal.salle.url.edu/api/v2/users/"+ window.localStorage.getItem("myId")+ "/statistics", {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
          })
          .then(res => res.json())
          .then(data => {
            this.user.avg_score= data[0].avg_score;
            this.user.num_comments= data[0].num_comments;
            this.user.percentage_commenters_below = data[0].percentage_commenters_below;
          }); 
      }
    },

    beforeMount() {

    }
  }

</script>

<template>
    <main>
      <header>
        <br/>
        <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
        <br/><br/>
        <div class="topText">
          <h1>Statistics</h1>
        </div>
    </header>

    <article>
      <table class = "stats-container">
        <tr>
          <th>Events puntuation:</th>
          <th>Number of comments:</th>
          <th>Percentage of users with lower comments:</th>
        </tr>
        <tr>
          <td>{{ user.avg_score }}</td>
          <td>{{ user.num_comments }}</td>
          <td>{{ user.percentage_commenters_below }}</td>
        </tr>

      </table>
    </article>

    <footer>
    </footer>
    
    </main>
  </template>

<style>
.stats-container {
 
 margin-left: auto;
 margin-right: auto;
 margin-top: 25px;
 padding: 2% 2%;
 background-color: rgba(255, 204, 153);
 border: 1px solid black;
 font-size: 20px;
 font-family: 'Fredoka', sans-serif;
}

th {
  padding: 40px;
}

</style>