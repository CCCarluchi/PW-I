<script>
export default {

    data() {
        return {
            event: {}
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
                <a href="/ShareEvent" id="button"><button>Share</button></a>
            </div>
            <br/>

            <div class="inputContainer">
                <a href="/ParticipateEvent" id="button"><button>Participate</button></a>
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