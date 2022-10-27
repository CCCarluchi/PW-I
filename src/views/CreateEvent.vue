<template>
  <main>
    <br/>
    <div class="arrowContainer" align="left"> 
    <i class="arrow left"></i>
    </div>
    <div class="appTitle">
    <h2>Create event</h2>
    </div>
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
    <button>Create</button>
    </div>
  </main>
</template>