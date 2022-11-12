<template>
  <main>
    <header>
      <br/>
      <div class="arrowContainer" align="left"> 
        <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
      </div>
      <div class="appTitle">
        <h2>Event</h2>
      </div>
    </header>

    <article class="column">
        <div class="appText">
            <p1>Name</p1><br/>
        </div>

        <div class="appText2">
            <p2>EventName</p2><br/><br/>
        </div>

        <div class="appText">
            <p1>Start date</p1><br/>
        </div>

        <div class="appText2">
            <p2>XX/XX/XXXX</p2><br/><br/>
        </div>

        <div class="appText">
            <p1>End date</p1><br/>
        </div>

        <div class="appText2">
            <p2>XX/XX/XXXX</p2><br/><br/>
        </div>

        <div class="appText">
            <p1>Location</p1><br/>
        </div>

        <div class="appText2">
            <p2>EventLocation</p2><br/><br/>
        </div>

        <div class="appText">
            <p1>Details</p1><br/>
        </div>

        <div class="appText2">
            <p2>EventDetails</p2><br/><br/>
        </div>
    </article>
    <br/><br/>

    <nav class="column">
        <div class="inputContainer">
        <router-link to="/ShareEvent" id="button"><button>Share</button></router-link>
        </div>
        <br/>

        <div class="inputContainer">
        <router-link to="/ParticipateEvent" id="button"><button>Participate</button></router-link>
        </div>
    </nav>

    <footer>
    </footer>
  </main>
</template>