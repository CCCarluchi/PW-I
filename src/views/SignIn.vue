<template>
  <main>
    <header class="appTitle">
        <h1>OpenEvents</h1>
    </header>

    <figure>
      <img src="src/assets/withHat.png" alt="logo" class="imgLogo">
    </figure>
    <br/><br/>

    <article>
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
    </article>
    <br/><br/>

    <footer>
    </footer>

  </main>
</template>