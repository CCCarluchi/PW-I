<template>
    <main>
    <header class="appTitle">
        <h2>Home</h2>
    </header>

    <nav>
        <div class="buttonHome">
            <router-link to="/Data" id="button"><button class="buttonH">Profile</button></router-link>
        
            <router-link to="/FriendsList" id="button"><button class="buttonH">Friends</button></router-link>
        
            <router-link to="/Events" id="button"><button class="buttonH">Events</button></router-link>
    
            <router-link to="/Chat" id="button"><button class="buttonH">Chat</button></router-link>
        </div>
    </nav>

    </main>
  </template>