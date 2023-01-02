<script>



</script>


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
        <input type="file" id="actual-btn" hidden/>
        <label class = "labeel" for="actual-btn">Change picture</label><br/><br/>
        <span id="file-chosen">No file chosen</span>
        
        <br/><br/>
        <a href="/Data" id="button2"><button class = "button2">Apply Changes</button></a><br/><br/>
      </article>  
      
      <input style="display:none" type="file" id="my-file">
<button type="button" onclick="document.getElementById('my-file').click()">Choose file\</button>

      <footer>
      </footer>
      
    </main>
  </template>

<style>
.labeel {
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
#file-chosen{
  margin-left: 0.3rem;
  font-family: sans-serif;
}
</style>
