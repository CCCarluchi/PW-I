<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <main>
      
      <header>
        <br/>
        <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
        <br/><br/>

        <div class="topText">
          <h1>Share event</h1>
        </div>
        <br/><br/>
      
        <div class="searchContainer">
            <input type="text" placeholder="Share to...">
            <button type="submit"><i class="fa fa-search"></i></button><br/><br/>
        </div>
        <br/>
      </header>

      <article>
        <div class="grid-container">
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
            <p>Friend 1</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
            <p>Friend 2</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
            <p>Friend 3</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
            <p>Friend 4</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
            <p>Friend 5</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
            <p>Friend 6</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
            <p>Friend 7</p>
            <input type="checkbox">
          </div>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
            <p>Friend 8</p>
            <input type="checkbox">
          </div>
        </div>
      </article>

      <footer>
        <button style = "background-color: rgba(255, 204, 153, 0.8);">Share</button>
      </footer>
     
   

    </main>
  </template>