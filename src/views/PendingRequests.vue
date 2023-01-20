<script>
    import BackArrow from "../components/BackArrow.vue";
    import Logic from "../javascript/logic.js";
    export default {
        components: { BackArrow },
        data() {
            return {
                users: [],
                empty:""
            }
        },

        methods: {

            //Método que pide a la api todas las peticiones de amistad que haya recibido el usuario, y las guarda
            getRequests() {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/requests", {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(data => {
                    this.empty = (data.length == 0)
                    for (let i = 0; i < data.length; i++) {
                        this.users.push(data[i])
                    }
                });
            },

            //Método que acepta la petición de amistad de un usuario
            acceptRequest(id) {
                this.locateClick(id)
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + window.localStorage.getItem("selectedUserId"), {
                    method: 'PUT', 
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .then(data => {
                    window.location.reload()
                }); 
            },

            //Metodo que rechaza la petición de amistad de un usuario
            deleteRequest(id) {
                this.locateClick(id)
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + window.localStorage.getItem("selectedUserId"), {
                    method: 'DELETE', 
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .then(() => {
                    window.location.reload()
                }); 
            },

            //Método que guarda la id del usuario al que se ha seleciconado
            locateClick(id) {
                window.localStorage.setItem("selectedUserId", id);
            },
            
            //Método que retrocede a la página anterior
            goBack() {
                Logic.back();
            }
        },

        //Antes de montar la página de piden todas las peticiones
        beforeMount() {
            this.getRequests()
        }
    }
</script>

<template>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
     <header>
        <br/>
        <BackArrow v-on:back="goBack"></BackArrow>
        <br/><br/>
        <div class="topText">
            <h1>Pending Requests</h1>
        </div>
        <br/><br/>
        <br/>
    </header>

    <main>
        <!-- Con el v-for se muestran todas las peticiones que ha recibido el usuario -->
        <li class="grid-container" v-for="user in users" :key="user.id">
            <div>
                <img v-bind:src=user.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/> 
                <p>{{ user.name }}</p>
                <span class="break"></span>
                <button v-on:click="deleteRequest(user.id)">Deny</button>   
                <button v-on:click="acceptRequest(user.id)">Accept</button>
                <a href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
            </div>
        </li>

        <!-- En caso de que no haya recibido ninguna, se muestra un mensaje -->
        <div v-if="empty">
            <h2 class="emptyList">No requests pending</h2>
        </div>

    </main>
</template>

<style>

    .break {
        display: block;
        height: 10px;
    }

    .grid-container > div > button {
        background-color: white;
        border: 1px solid black;
        height: 50px;
        width: 80px;
        margin-right: 2px;
        margin-left: 2px;
        font-size: 15px;
        font-family: 'Fredoka', sans-serif;
        color: black;
        margin-top: 0.6%;
    }


    @media only screen and (min-width: 640px) {

        .break {
            display: inline;
        }

        .grid-container > div > button {
            float: right;
            background-color: white;
            border: 1px solid black;
            height: 50px;
            width: 150px;
            padding: 20px;
            font-size: 20px;
            line-height: 0px;
            font-family: 'Fredoka', sans-serif;
            color: black;
        }
    }

</style>