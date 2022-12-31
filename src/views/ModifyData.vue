<template>

    <main>
        <header>
      <br/>
      <div class="arrowContainer" align="left"> 
        <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
      </div>
      <div class="appTitle">
        <h2>Change profile</h2>
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
        <button class = "button2">Change picture</button><br/><br/>
        <br/><br/>
        <a href="/Data" id="button2"><button class = "button2">Apply Changes</button></a><br/><br/>
      </article>  

      <footer>
      </footer>
      
    </main>
  </template>