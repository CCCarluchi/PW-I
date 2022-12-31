<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  <header>
    <br/>
    <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Friends list</h1>
    </div>
    <br/><br/>
    
    <div class="searchContainer">
      <input type="text" placeholder="Search friend...">
      <button type="submit"><i class="fa fa-search"></i ></button><br/><br/>
    </div>
    <br/>
  </header>
  
  <main>
    <div class="grid-container">
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
        <p>Friend 1</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a>
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
        <p>Friend 2</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a> 
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
        <p>Friend 3</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a>  
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
        <p>Friend 4</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a>  
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
        <p>Friend 5</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a>
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
        <p>Friend 6</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a> 
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
        <p>Friend 7</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a>  
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
        <p>Friend 8</p>
        <a href="/FriendProfile" id="button"><button>Profile</button></a>  
      </div>
    </div>
  </main>
</template>