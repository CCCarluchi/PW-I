<template>

    <main>
        <header>
      <br/>
      <div class="arrowContainer" align="left"> 
        <router-link to="/Data" id="i"><i class="arrow left"></i></router-link>
      </div>
     </header> 
     
     <article>
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
        <img src='https://pbs.twimg.com/media/EztG5y0WQAAPS69?format=jpg&name=medium' class='imgRedonda' /><br/><br/>
        <button2 type="button">Change picture</button2><br/><br/>
        <br/><br/>
        <router-link to="/Data" id="button"><button2>Apply Changes</button2></router-link><br/><br/>
      </article>  

      <footer>
      </footer>
      
    </main>
  </template>