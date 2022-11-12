<template>
    <main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <header>
            <br/>
            <router-link to="/Data" id="i"><i class="arrow left"></i></router-link>
            <br/><br/>

            <div class="topText">
                <h1>Pending Requests</h1>
            </div>
            <br/><br/>
            <div class="searchContainer">
                <input type="text" placeholder="Search friend...">
                <button type="submit"><i class="fa fa-search"></i></button><br/><br/>
            </div>
            <br/>
        </header>
      
        <article>
            <div class="grid-container">
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
                    <p>Person 1</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link> 
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                    <p>Person 2</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link> 
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
                    <p>Person 3</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link>  
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
                    <p>Person 4</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link> 
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                    <p>Person 5</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link>  
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                    <p>Person 6</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link>  
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                    <p>Person 7</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link>  
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                    <p>Person 8</p>
                    <button>Deny</button>   
                    <button>Accept</button>
                    <router-link to="/NotFriendProfile" id="button"><button>Profile</button></router-link> 
                </div>
            </div>
        </article>

    </main>
  </template>