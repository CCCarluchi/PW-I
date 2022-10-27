<template>
  <main>
    <br/>
    <div class="arrowContainer" align="left"> 
    <router-link to="/" id="i"><i class="arrow left"></i></router-link>
    </div>
    <div class="appTitle">
    <h2>Sign up</h2>
    </div>
    <div class="inputContainer">
    <input type="text" placeholder="*Name"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input type="text" placeholder="*Surname"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input type="text" placeholder="*Username"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input placeholder="*Date of birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input type="text" placeholder="*Email"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input type="text" placeholder="*Password"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input type="text" placeholder="*Confirm Password"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <input type="text" placeholder="+ Add your profile picture"><br/>
    </div>
    <br/><br/>
    <div class="inputContainer">
    <router-link to="/Home" id="button"><button>Register</button></router-link>
    </div>
  </main>
</template>