<template>
  
  <header>
    <br/>
    <div class="arrowContainer"> 
      <router-link to="/Home" id="i"><i class="arrow left"></i></router-link>
    </div>
    <div class="appTitle">
      <h2>Events</h2>
    </div>
  </header>

  <main>
    <ol>
      <div class="listContainer">
        <img src="src/assets/1.png" class="imgList"/>
        <router-link to="/CreateEvent" id="a2"><a2>Create</a2></router-link>
      </div>
      <br/>

      <div class="listContainer">
        <img src="src/assets/2.png" class="imgList"/>
        <router-link to="/EventsList" id="a2"><a2>List</a2></router-link>
      </div>
      <br/>

      <div class="listContainer">
        <img src="src/assets/3.png" class="imgList"/>
        <router-link to="/SearchEvent" id="a2"><router-link to="/SearchEvent" id="a2"><a2>Search Event</a2></router-link></router-link>
      </div>
      <br/>

      <div class="listContainer">
        <img src="src/assets/4.png" class="imgList"/>
        <router-link to="/ShareEvent" id="a2"><a2>Share</a2></router-link>
      </div>
      <br/>

      <div class="listContainer">
        <img src="src/assets/5.png" class="imgList"/>
        <router-link to="/ParticipateEvent" id="a2"><a2>Participate</a2></router-link>
      </div>
      <br/>

      <div class="listContainer">
        <img src="src/assets/6.png" class="imgList"/>
        <router-link to="/Timeline" id="a2"><a2>Timeline</a2></router-link>
      </div>
    </ol>
    <br/><br/>
  </main>

  <footer>
  </footer>
  
</template>