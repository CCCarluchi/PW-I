<script>
export default {

    data() {
        return {
            event: {},
            name:""
        }
    },

    methods: {
        getEvent() {
            fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedId"), {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {
                this.event = data[0]
                fetch("http://puigmal.salle.url.edu/api/v2/users/" + data[0].id, {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(user => {
                    this.name = user[0].name
                })

                
            })
        }
    },

    beforeMount() {
        this.getEvent()
    }

}
</script>

<template>

    <header>
        <br/>
        <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
        <br/><br/>
        <div class="profileGrid">
            <div class="profileMain">
                <br/><br/><img v-bind:src="event.image" referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgRedonda'/>
                <h1>{{event.name}}</h1>
            </div>
        </div>
    </header>

    <main>
        
        <li class = "eventData">
            <div>
                <h3>Owner:   </h3>
                <p>{{ name }}</p>
            </div>
            <div>
                <h3>Date:   </h3>
                <p>{{ event.date }}</p>
            </div>
            <div>
                <h3>Location:   </h3>
                <p>{{ event.location }}</p>
            </div>
            <div>
                <h3>Type:   </h3>
                <p>{{ event.type }}</p>
            </div>
            <div>
                <h3>Description:   </h3>
                <p>{{ event.description }}</p>
            </div>
            <div>
                <h3>Start date:   </h3>
                <p>{{ event.eventStart_date }}</p>
            </div>
            <div>
                <h3>End date:   </h3>
                <p>{{ event.eventEnd_date }}</p>
            </div>
            <div>
                <h3>Nº of participants:   </h3>
                <p>{{ event.n_participators }}</p>
            </div>
        </li>


    
        <div class="inputContainer">
            <a href="/ShareEvent" id="button"><button>Share</button></a>
        </div>
        <br/>

        <div class="inputContainer">
            <a href="/ParticipateEvent" id="button"><button>Participate</button></a>
        </div>
       

    </main>

    <footer>
    </footer>

</template>

<style>

.eventData {
  border: 1px solid black;
  display: grid;
  margin-left: 5.5%;
  margin-right: 5.5%;
}

.eventData > div {
  background-color:rgba(255, 204, 153);
  text-align: left;
  padding: 1%;
  font-size: 24px;
  font-family: 'Fredoka', sans-serif;
  display: inline;
}

.eventData > div > h3 {
  font-size: 26px;
  display: inline;
  font-family: 'Fredoka', sans-serif;
}

.eventData > div > p {
  display: inline;
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
}

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