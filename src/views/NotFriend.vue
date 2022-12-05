<template>

  <header>
    <br/>
    <router-link to="/PendingRequests" id="i"><i class="arrow left"></i></router-link>
    <br/><br/>
    <div class="profileGrid">
      <div class="profileMain">
        <br/><br/><img src='https://i.ytimg.com/vi/ywthKNqI7uI/mqdefault.jpg' class='imgRedonda'/>
        <h1>Name</h1>
      </div>
    </div>
  </header>

  <main>
    <div class="elementsGrid">
      <div class="profileItem">
        <router-link to="/SendRequest" id="button"><button class="buttonProfile">+ Add friend</button></router-link>
      </div>
      <div class="profileItem">
        <router-link to="/Statistics" id="button"><button class="buttonProfile">Public stats</button></router-link>
      </div>
    </div>
  </main>
</template>