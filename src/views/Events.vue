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
    <ul>
      <li class="listContainer">
        <img src="src/assets/1.png" class="imgList"/>
        <router-link to="/CreateEvent" id="a"><a class="a2">Create</a></router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/2.png" class="imgList"/>
        <router-link to="/EventsList" id="a"><a class="a2">List</a></router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/3.png" class="imgList"/>
        <router-link to="/SearchEvent" id="a"><a class="a2">Search Event</a></router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/4.png" class="imgList"/>
        <router-link to="/ShareEvent" id="a"><a class="a2">Share</a></router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/5.png" class="imgList"/>
        <router-link to="/ParticipateEvent" id="a"><a class="a2">Participate</a></router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/6.png" class="imgList"/>
        <router-link to="/Timeline" id="a"><a class="a2">Timeline</a></router-link>
      </li>
    </ul>
    <br/><br/>
  </main>

  <footer>
  </footer>
  
</template>