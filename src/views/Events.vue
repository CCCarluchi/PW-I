<template>
  
  <header>
    <br/>
    <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
    <div class="appTitle">
      <h2>Events</h2>
    </div>
  </header>

  <main>
    <ul>
      <li class="listContainer">
        <img src="src/assets/1.png" class="imgList"/>
        <a href="/CreateEvent" id="a" class="a2">Create</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/2.png" class="imgList"/>
        <a href="/EventsList" id="a" class="a2">List</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/3.png" class="imgList"/>
        <a href="/SearchEvent" id="a" class="a2">Search Event</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/4.png" class="imgList"/>
        <a href="/ShareEvent" id="a" class="a2">Share</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/5.png" class="imgList"/>
        <a href="/ParticipateEvent" id="a" class="a2">Participate</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/6.png" class="imgList"/>
        <a href="/Timeline" id="a" class="a2">Timeline</a>
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