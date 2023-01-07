<script>




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
          <th>Your events puntuation:</th>
          <th>Your number of comments:</th>
          <th>Percentage of users with lower comments:</th>
        </tr>
        <tr>
          <td>50</td>
          <td>200</td>
          <td>40%</td>
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