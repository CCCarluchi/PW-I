<template>
    <main>

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

      <article>
        <div class="elementsGrid">
          <div class="profileItem0">
            <button3 type="button">+ Add friend</button3>
          </div>
          <div class="profileItem1">
            <router-link to="/Statistics" id="button"><button3>Public stats</button3></router-link>
          </div>
        </div>
      </article>
    </main>
  </template>