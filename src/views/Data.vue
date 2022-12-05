<template>
  <header>
    <br/>
    <router-link to="/Home" id="i"><i class="arrow left"></i></router-link>
    <br/><br/>
    <div class="profileGrid">
      <div class="profileMain">
        <br/><br/><img src='https://i.blogs.es/80e441/big-chungus-multiversus/1366_2000.webp' class='imgRedonda' />
        <h1>Name</h1>
      </div>
    </div>
  </header>

  <main>
    <div class="elementsGrid">
      <div class="profileItem">
        <router-link to="/Statistics" id="button"><button class="buttonProfile">Public Stats</button></router-link><br/><br/>
      </div>
      <div class="profileItem">
        <router-link to="/PendingRequests" id="button"><button class="buttonProfile">Pending requests</button></router-link><br/><br/>
      </div>
      <div class="profileItem">
        <router-link to="/ModifyData" id="button"><button class="buttonProfile">Change profile</button></router-link><br/><br/>
      </div>
      <div class="profileItem">
        <router-link to="/SignOut" id="button"><button class="buttonProfile">Sign Out</button></router-link><br/><br/>
      </div>
      <div class="profileItem">
        <router-link to="/DeleteAccount" id="button"><button class="buttonProfile">Delete Account</button></router-link><br/><br/>
      </div>
    </div>
  </main>
</template>