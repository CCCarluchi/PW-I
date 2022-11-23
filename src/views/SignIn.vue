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
        <input type="text" placeholder="Username"><br/>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <input type="password" placeholder="Password"><br/>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <router-link to="/Home" id="button"><button>Sign in</button></router-link>
      </div>
      <br/><br/>
      <div class="inputContainer">
        <router-link to="/SignUp" id="a2"><a2>Sign up</a2></router-link>
      </div>
    </form>
    <br/><br/>

  </main>

  <footer>
  </footer>

</template>