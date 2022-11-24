<template>

    <header>
      <br/>
      <div class="arrowContainer"> 
        <router-link to="/Events" id="i"><i class="arrow left"></i></router-link>
      </div>
      <div class="appTitle">
        <h2>Event</h2>
      </div>
    </header>

    <main>
        <article class="column">
            <div class="appText">
                <p class="p1">Name</p>
            </div>

            <div class="appText2">
                <p class="p2">EventName</p>
            </div>

            <div class="appText">
                <p class="p1">Start date</p>
            </div>

            <div class="appText2">
                <p class="p2">XX/XX/XXXX</p>
            </div>

            <div class="appText">
                <p class="p1">End date</p>
            </div>

            <div class="appText2">
                <p class="p2">XX/XX/XXXX</p>
            </div>

            <div class="appText">
                <p class="p1">Location</p>
            </div>

            <div class="appText2">
                <p class="p2">EventLocation</p>
            </div>

            <div class="appText">
                <p class="p1">Details</p>
            </div>

            <div class="appText2">
                <p class="p2">EventDetails</p>
            </div>
        </article>
        <br/><br/>

        <div class="column">
            <div class="inputContainer">
                <router-link to="/ShareEvent" id="button"><button>Share</button></router-link>
            </div>
            <br/>

            <div class="inputContainer">
                <router-link to="/ParticipateEvent" id="button"><button>Participate</button></router-link>
            </div>
        </div>

    </main>

    <footer>
    </footer>

</template>

<style>

.appText {
  overflow: hidden;
  margin-left: 55px;
  text-align: left;
  text-decoration: none;
}

.appText2 {
  overflow: hidden;
  margin-left: 90px;
  text-align: left;
  text-decoration: none;
}

@media only screen and (min-width: 640px) {
.appText {
    overflow: hidden;
    margin-left: 465px;
    text-align: left;
    text-decoration: none;
  }

  .appText2 {
    overflow: hidden;
    margin-left: 500px;
    text-align: left;
    text-decoration: none;
  }
}
</style>