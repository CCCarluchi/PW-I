<template>
    <main>
    <header class="appTitle">
        <h1>Home</h1>
    </header>

    <nav>
        <div class="buttonHome">
            <div class="homeItemLeft">
                <router-link to="/Data" id="button"><button class="buttonH">Profile</button></router-link>
            </div>
            <div class="homeItemRight">
                <router-link to="/FriendsList" id="button"><button class="buttonH">Friends</button></router-link>
            </div>
            <div class="homeItemLeft">
                <router-link to="/Events" id="button"><button class="buttonH">Events</button></router-link>
            </div>
            <div class="homeItemRight">
                <router-link to="/Chat" id="button"><button class="buttonH">Chat</button></router-link>
            </div>
        </div>
    </nav>

    </main>
  </template>