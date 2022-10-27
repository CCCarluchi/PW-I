<template>
  <main>
    <div class="appTitle" >
    <h1>OpenEvents</h1>
    </div>
    <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" class="imgLogo">
    <br/><br/>
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
  </main>
</template>