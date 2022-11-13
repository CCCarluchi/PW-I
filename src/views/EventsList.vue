<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <main>
    <header>
      <br/>
      <div class="arrowContainer" align="left"> 
        <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
      </div>
      <div class="appTitle">
        <h2>List</h2>
      </div>
    </header>

    <article>
      <nav>
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
      </nav>

      <div class="appTitle">
        <p1>Results</p1>
      </div>
      <br/>

      <div class="listContainer3" align="left">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p1>Event1</p1><p2>  XX/XX/XXXX  Location</p2></router-link>
      </div>
      <br/>

      <div class="listContainer3" align="left">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p1>Event2</p1><p2>  XX/XX/XXXX  Location</p2></router-link>
      </div>
      <br/>

      <div class="listContainer3" align="left">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p1>Event3</p1><p2>  XX/XX/XXXX  Location</p2></router-link>
      </div>
      <br/>

      <div class="listContainer3" align="left">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p1>Event4</p1><p2>  XX/XX/XXXX  Location</p2></router-link>
      </div>
      <br/>

      <div class="listContainer3" align="left">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p1>Event5</p1><p2>  XX/XX/XXXX  Location</p2></router-link>
      </div>
      <br/>

      <div class="listContainer3" align="left">
        <img src="https://images.squarespace-cdn.com/content/v1/5a726fcd4c0dbfa531ec98cf/1523669284136-BTJA038C00QFP5M3AX0N/image-asset.jpeg" class="imgList2"/>
        <router-link to="/Event" id="p"><p1>Event6</p1><p2>  XX/XX/XXXX  Location</p2></router-link>
      </div>
    </article>
    <br/><br/>

    <footer>
    </footer>
  </main>
</template>