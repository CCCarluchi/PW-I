<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <router-link to="/Data" id="i"><i class="arrow left"></i></router-link>
    </div>
  </header>
  <br/>

  <main>
    <div class="card">
      <div class="cardText">
        <h2>Sign out</h2>
      </div>
      <div class="cardText">
        <p class="p2">Do you wish to sign out?</p>
      </div>
      <br/><br/>
        <div class="inputContainer">
          <router-link to="/" id="button"><button>Sign out</button></router-link>
        </div>
    </div>
  </main>

  <footer>
  </footer>

</template>

<style>
.cardText {
  text-align: left;
}

</style>