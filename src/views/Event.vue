<script>
    import BackArrow from "../components/BackArrow.vue";
    import Logic from "../javascript/logic.js";
    export default {
        components: { BackArrow },

    data() {
        return {
            event: {},
            comments: [],
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
        // Método que obtiene información del evento seleccionado a partir de su id, guarda el resultado y pide la información del creador.
        getEvent() {
            fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId"), {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {

                // Guardamos la información del evento en las variables.
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

                // Pedimos la información del usuario que ha creado el evento.
                fetch("http://puigmal.salle.url.edu/api/v2/users/" + data[0].owner_id, {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(user => {

                    // Nos guardamos el nombre en una variable.
                    this.name = user[0].name;

                    // Comprobamos y guardamos si como usuarios participamos en el evento seleccionado.
                    this.checkParticipation();
                })
            })
        },

        // Método que permite al usuario participar en el evento seleccionado.
        participateInEvent() {
            fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId") + '/assistances', {
                method: 'POST',
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
            })
            .then(res => res.json())
            .then(data => {

                // Guardamos que estamos participando en el evento.
                this.checkParticipation();
            })
        },

        // Método que comprueba la asistencia del usuario al evento seleccionado.
        checkParticipation() {
            fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId") + "/assistances", {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
            })
            .then(res => res.json())
            .then(data => {

                // Si dentro de todos los eventos hay uno cuyo id concuerde con el seleccionado, nos guardamos que está participando.
                for (let i = 0; i < data.length; i++) {
                    if ( window.localStorage.getItem("selectedEventId") == data[i].id) {
                        this.isParticipating = true;
                    }
                }
            })
        },
        
        // Método que obtiene los comentarios y las puntuaciones de los asistentes del evento.
        getComments() {
            fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("selectedEventId") + "/assistances", {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {

                // Guardamos las puntuaciones y eventos en una variable.
                for(let i = 0; i < data.length; i++) {
                    if (data[i].puntuation != null && data[i].comentary != null) {
                        this.comments.push(data[i]);
                    }
                }
                
            })
        },
        
        // Método para volver a la página anterior.
        goBack() {
          Logic.back();
        }
         
    },

    // Una vez se ha montado la página, pedimos la información del evento y sus comentarios.
    created() {
        this.getEvent();
        this.getComments();
    }

}
</script>

<template>

    <header>
        <br/>

        <!-- Cuando el usuario le da a la flecha se ejecuta el método goBack. -->
        <BackArrow v-on:back="goBack"></BackArrow>
        <br/><br/>
        <div class="profileGrid">
            <div class="profileMainE">

                <!-- Con el v-bind vinculamos la imagen a mostrar. En caso de error mostramos una distinta por defecto. -->
                <br/><br/><img v-bind:src="event.image" referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgRedonda'/>
                <h1>{{event.name}}</h1>
            </div>
        </div>
    </header>

    <main>
        <br/>

        <!-- Mostramos la información guardada en las variables sobre el evento y su creador. -->
        <article class = "eventData">
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
        </article>  

        <nav>   
            <br/><br/>
            <div class="buttonContainer">

                <!-- Botón que redirige al usuario para compartir el evento. -->
                <a href="/ShareEvent"><button class="eventButton">Share</button></a>

                <!-- Botón que redirige al usuario a una página con la lista de participantes del evento. -->
                <a href="/EventParticipants"><button class="eventButton">Participants</button></a>

                <!-- Si el usuario participa en el evento seleccionado tiene la opción de comentar y puntuar el evento-->
                <a v-if="isParticipating" href="/ParticipateEvent"><button class="eventButton">Rate</button></a>

                <!-- En el caso contrario, si le clica al botón se ejecutará participateInEvent. -->
                <button v-else class="eventButton" v-on:click="participateInEvent()">Participate</button>     
            </div>
        </nav>
        
        <br/>
        <article>

            <!-- Mostramos los comentarios. -->
            <h3 class="persHeader">Comments:</h3>
            <li class="grid-container" v-for="comment in comments" :key="comment.id">
                <div>
                    <h3 class="commentName"> {{ comment.name }}</h3>
                    <p>-------------</p><br/>
                    <p>Given rating:  {{ comment.puntuation }}&#11088;</p><br/>
                    <p>Comment:  {{ comment.comentary }}</p>
                </div>
            </li>
        </article>

    </main>

    <footer>
    </footer>

</template>

<style>
    .profileMainE {
        grid-column: 2/3;
        grid-row: 1/2;
        background-color: #0099ff;
        border: 1px solid black;
    }

    .profileMainE > h1 {
        color: white;
        text-decoration: none;
        font-size: 36px;
    }

    .buttonContainer {
        margin-left: 5%;
        margin-right: 5%;
    }

    .commentName {
        font-size: 26px;
        margin-bottom: 1%;
    }

    .eventData {
        border: 1px solid black;
        display: grid;
        margin-left: 5%;
        margin-right: 5%;
    }

    .eventData > div {
        background-color:rgba(255, 204, 153);
        text-align: left;
        padding: 1%;
        font-size: 16px;
        font-family: 'Fredoka', sans-serif;
        display: inline;
    }

    .eventData > div > h3 {
        font-size: 20px;
        display: inline;
        font-family: 'Fredoka', sans-serif;
    }

    .eventButton {
        margin-left: 1%;
        margin-right: 1%;
        width: 100px;
        height: 30px;
        color:black;
        font-size: 16px;
    }

    .eventData > div > p {
        display: inline;
        font-family: 'Fredoka', sans-serif;
        font-size: 16px;
    }

    .persHeader {
        color: white;
        border: 1px solid black;
        background-color: rgb(0, 153, 255);
        margin-top: 5%;
        margin-left: 5%;
        margin-right: 5%;
        padding: 10px;
    }

    @media only screen and (min-width: 640px) {
        .profileMainE {
            grid-column: 2/3;
            grid-row: 1/2;
            background-color: #0099ff;
            border: 1px solid black;
        }

        .profileMainE > h1 {
            color: white;
            text-decoration: none;
            font-size: 50px;
        }

        .buttonContainer {
            margin-left: 5%;
            margin-right: 5%;
        }

        .commentName {
            font-size: 26px;
            margin-bottom: 1%;
        }

        .eventData {
            border: 1px solid black;
            display: grid;
            margin-left: 5%;
            margin-right: 5%;
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
            color:black;
            font-size: 32px;
            width: 259px;
            height: 43px;
        }

        .eventData > div > p {
            display: inline;
            font-family: 'Fredoka', sans-serif;
            font-size: 22px;
        }

        .persHeader {
            color: white;
            border: 1px solid black;
            background-color: rgb(0, 153, 255);
            margin-top: 5%;
            margin-left: 5%;
            margin-right: 5%;
            padding: 10px;
        }
    }

</style>