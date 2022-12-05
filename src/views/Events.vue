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
        <router-link to="/CreateEvent" id="a" class="a2">Create</router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/2.png" class="imgList"/>
        <router-link to="/EventsList" id="a" class="a2">List</router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/3.png" class="imgList"/>
        <router-link to="/SearchEvent" id="a" class="a2">Search Event</router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/4.png" class="imgList"/>
        <router-link to="/ShareEvent" id="a" class="a2">Share</router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/5.png" class="imgList"/>
        <router-link to="/ParticipateEvent" id="a" class="a2">Participate</router-link>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/6.png" class="imgList"/>
        <router-link to="/Timeline" id="a" class="a2">Timeline</router-link>
      </li>
    </ul>
    <br/><br/>
  </main>

  <footer>
  </footer>
  
</template>

<style>
.listContainer{
  margin-left: 0px;
}
.listContainer > img{
  padding: 0px;
}

.listContainer > .a2{
  padding: 0px;
}



@media only screen and (min-width: 640px) {
  .listContainer{
    margin-left: 0px;
  }
  .listContainer > img{
    padding: 0px;
  }
  
  .listContainer > .a2{
    padding: 0px;
    font-size: 32px;
  }
}
</style>