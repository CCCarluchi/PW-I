<template>
    <main>
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

    <article>
      <div class="elementsGrid">
          <div class="profileItem0">
            <router-link to="/Statistics" id="button"><button3>Public Stats</button3></router-link><br/><br/>
          </div>
          <div class="profileItem1">
            <router-link to="/PendingRequests" id="button"><button3>Pending requests</button3></router-link><br/><br/>
          </div>
          <div class="profileItem2">
            <router-link to="/ModifyData" id="button"><button3>Change profile</button3></router-link><br/><br/>
          </div>
          <div class="profileItem3">
            <router-link to="/SignOut" id="button"><button3>Sign Out</button3></router-link><br/><br/>
          </div>
          <div class="profileItem4">
            <router-link to="/DeleteAccount" id="button"><button3>Delete Account</button3></router-link><br/><br/>
          </div>
      </div>
    </article>

    <footer>
    </footer>
    
    </main>
  </template>