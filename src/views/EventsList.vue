<template>
  <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <br/>
    <div class="arrowContainer"> 
      <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
    </div>
    <div class="appTitle">
      <h2>List</h2>
    </div>
  </header>

  <main>
    
    <form>
      <div class="searchContainer2">
        <h2>Search</h2>
        <div class="inputContainer">
          <input type="text" placeholder="Search event by name">
        </div>
        <div class="inputContainer">
          <input placeholder="Search event by start date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
        </div>
        <div class="inputContainer">
          <input type="text" placeholder="Search event by location">
        </div>
        <div class="inputContainer">
          <button type="submit"><i class="fa fa-search"></i></button><br/><br/>
        </div>
      </div>
      <br/><br/><br/>
    </form>

    <div class="appTitle">
      <p class="p1">Results</p>
    </div>
    <br/>

    <ol>
      <li class="listContainer3">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p class="p1List">Event1</p><p class="p2List">   XX/XX/XXXX   Location</p></router-link>
      </li>
      <br/>

      <li class="listContainer3">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p class="p1List">Event2</p><p class="p2List">   XX/XX/XXXX   Location</p></router-link>
      </li>
      <br/>

      <li class="listContainer3">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p class="p1List">Event3</p><p class="p2List">   XX/XX/XXXX   Location</p></router-link>
      </li>
      <br/>

      <li class="listContainer3">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p class="p1List">Event4</p><p class="p2List">   XX/XX/XXXX   Location</p></router-link>
      </li>
      <br/>

      <li class="listContainer3">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p class="p1List">Event5</p><p class="p2List">   XX/XX/XXXX   Location</p></router-link>
      </li>
      <br/>

      <li class="listContainer3">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p class="p1List">Event6</p><p class="p2List">   XX/XX/XXXX   Location</p></router-link>
      </li>

    </ol>
    <br/><br/>
  </main>

  <footer>
  </footer>
  
</template>

<style>
.listContainer3{
  margin-left: 0px;
  display: flex;
}

@media only screen and (min-width: 640px) {
.listContainer3{
    margin-left: 0px;
    display: flex;
  }
}
</style>