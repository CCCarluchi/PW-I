<template>
  
  <header>
    <br/>
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Events</h1>
    </div>
    <br/><br/>
    
    <br/>
  </header>

  <main>
    <ul class="listParent">
      <li class="listContainer">
        <img src="src/assets/1.png" class="imgList"/>
        <a href="/CreateEvent" class="a2">Create</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/2.png" class="imgList"/>
        <a href="/EventsList" class="a2">List</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/3.png" class="imgList"/>
        <a href="/SearchEvent" class="a2">Search Event</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/4.png" class="imgList"/>
        <a href="/ShareEvent" class="a2">Share</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/5.png" class="imgList"/>
        <a href="/ParticipateEvent" class="a2">Participate</a>
      </li>
      <br/>

      <li class="listContainer">
        <img src="src/assets/6.png" class="imgList"/>
        <a href="/Timeline" class="a2">Timeline</a>
      </li>
    </ul>
    <br/><br/>
  </main>

  <footer>
  </footer>
  
</template>

<style>


.listParent {
  margin-left: 35%;
  margin-right: 35%;
  background-color: rgb(0, 153, 255);
  padding: 40px;
  border: 1px solid black;

}

.listContainer{
  background-color: rgba(255, 204, 153);
  border: 1px solid black;
  padding: 10px;
  width: 96.2%;
}

.listContainer > img {
  color:black;
}

.listContainer > a {
  color:black;
  text-decoration: none;
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