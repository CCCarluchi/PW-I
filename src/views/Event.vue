<script>
export default {

    data() {
        return {
            event: {},
            name:"",
            isParticipating: false,
            startDate:"",
            startTime:"",
            endDate:"",
            endTime:"",
            creationDate:"",
            creationTime:""
        }
    },

    methods: {
        getEvent() {
            fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedId"), {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {
                this.event = data[0];
                let start = this.event.eventStart_date.split("T");
                this.startDate = start[0];
                this.startTime = start[1].match((/.{1,5}/g))[0];
                let end = this.event.eventEnd_date.split("T");
                this.endDate = end[0];
                this.endTime = end[1].match((/.{1,5}/g))[0];
                let creation = this.event.date.split("T");
                this.creationDate = creation[0];
                this.creationTime = creation[1].match((/.{1,5}/g))[0];

                fetch("http://puigmal.salle.url.edu/api/v2/users/" + data[0].owner_id, {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(user => {
                    this.name = user[0].name;
                    this.checkParticipation();
                })
            })
        },

        participateInEvent() {
            fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedId") + '/assistances', {
                method: 'POST',
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
        },

        checkParticipation() {
            fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId") + "/assistances", {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
            })
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if ( window.localStorage.getItem("selectedId") == data[i].id) {
                        this.isParticipating = true;
                    }
                }
            })
        }
    },

    created() {
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
                <h3>Start day and time:   </h3>
                <p>{{ startDate }} || {{ startTime }}</p>
            </div>
            <div>
                <h3>End day and time:   </h3>
                <p>{{ endDate }} || {{ endTime }}</p>
            </div>
            <div>
                <h3>Creation day and time:   </h3>
                <p>{{ creationDate }} || {{ creationTime }}</p>
            </div>
            <div>
                <h3>Max number of participants:   </h3>
                <p>{{ event.n_participators }}</p>
            </div>
        </li>      

    </main>

    <footer>
        <div class="inputContainer">
            <a href="/ShareEvent"><button class="eventButton">Share</button></a>
            <a v-if="isParticipating" href="/ParticipateEvent"><button class="eventButton">Rate</button></a>
            <button v-else class="eventButton" v-on:click="participateInEvent()">Participate</button>     
        </div>
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
.eventButton {
    margin-left: 2%;
    margin-right: 2%;
    color:black
}

.eventData > div > p {
  display: inline;
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
}

</style>