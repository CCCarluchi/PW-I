<template>
  <main>
    <header>
      <br/>
      <div class="arrowContainer" align="left"> 
        <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
      </div>
      <div class="appTitle">
        <h2>Create event</h2>
      </div>
    </header>

    <article>
      <div class="inputContainer">
        <input type="text" placeholder="*Name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Start date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
      </div>
      <br/><br/> 

      <div class="inputContainer">
        <input placeholder="*End date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" placeholder="*Location"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <textarea type="text" placeholder="*Details"></textarea><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <router-link to="/Event" id="button"><button>Create</button></router-link>
      </div>
      <br/><br/>
    </article>

    <footer>
    </footer>
  </main>
</template>