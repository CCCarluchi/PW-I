<template>
  
  <header>
    <br/>
    <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
    <div class="appTitle">
      <h2>Create event</h2>
    </div>
  </header>

  <main>
    <form>
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
        <a href="/Event" id="button"><button>Create</button></a>
      </div>
      <br/><br/>
    </form>

  </main>

  <footer>
  </footer>
  
</template>