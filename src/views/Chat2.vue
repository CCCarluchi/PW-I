<script>
    import Bar from "../components/Bar.vue";
    export default {
    components: { Bar },
    data() {
        return {
            messages: [],
            user: {},
            otherUser: {},
            fullMsg: [],
            text:""
        }
    },
    methods: {

        //Método para pedir a la api todos los mensajes que ha recibido el usuario y guardarlos, así como los usuarios
        //participantes en la conversación
        getMessages() {
            fetch("http://puigmal.salle.url.edu/api/v2/messages/" + window.localStorage.getItem("selectedUserId"), {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => {
                this.messages.length = 0;
                for (let i = 0; i < data.length; i++) {
                    this.messages.push(data[i]);
                }
            })
            .then(() => {
                //Una vez guardados los mensajes, se guarda la información del usuario loggeado
                fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId"), {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(data => {
                    this.user = data[0];
                    //Luego pide también la información del usuario con el que se está chateando
                    fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedUserId"), {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.otherUser = data[0];
                    })
                    .then(() => {
                        let username;
                        let img;
                        let body;
                        let senderId;
                        this.fullMsg.length = 0;

                        //Se junta toda la información recibida para poder mostrar correctamente luego con el v-for los mensajes y las imágenes de cada usuario
                        for (let i = 0; i < this.messages.length; i++) {
                            if (this.messages[i].user_id_send == window.localStorage.getItem("myId")) {
                                username = this.user.name;
                                img = this.user.image;
                                senderId = this.user.id;
                            } else {
                                username = this.otherUser.name;
                                img = this.otherUser.image;
                                senderId = this.otherUser.id;
                            }
                            body = this.messages[i].content;
                            this.fullMsg.push({username, img, body, senderId})
                        }
                    });
                });  
            });
        },

        //Método que enviar un mensaje
        sendMessage() {

            //Si el mensaje es más largo de 45 carácters la api daba un error, así que se ha limitado
            if (this.text.length > 45) {
                alert("Yor message must be 45 characters or less!")
            } else {
                fetch("http://puigmal.salle.url.edu/api/v2/messages", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
                    body: JSON.stringify({content: this.text, user_id_send: this.user.id, user_id_recived: this.otherUser.id})
                })
                .then(res => res.json())
                .then(data => {
                    //Una vez enviado se actualizan los mensajes apra que aparezca en tiempo real, y se limpia el input de texto
                    this.getMessages();
                    this.text = "";
                })
            }
        },

        //Método que comprueba si el mensaje es nuestro o del otro usuario
        isMyMessage(senderId) {
            return senderId == this.user.id;
        },

        //Método que comprueba si se ha enviado un link a otro evento
        isLink(body) {
            return !body.includes("Check out this event: ");
            
        },

        //Método que se encarga de rediirigirte a la página del evento seleccionado al clicar un enlace
        getSelectedEvent(body) {
            const words = body.split(' ')
            window.localStorage.setItem("selectedEventId", words[words.length - 1]);
            window.location.assign("/Event");
        }
    },

    //Antes de montarse se piden todos los mensajes a la api
    beforeMount() {
        this.getMessages();
    }
}
</script>

<template>

    <header>
        <!-- Aparece el nombre y imagen de perfil del usuario con el que se está chateando -->
        <div class="userBox">
            <Bar></Bar>
            <img v-bind:src=otherUser.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
            <h3>{{ otherUser.name }}</h3>
        </div>
    </header>

    <main>      
       
        <div class="conteiner2">
            
            <div class="chatbox2">

                <!-- Aparecen todos los mensajes entre los dos usuarios, y dependiendo de quién sea el que lo ha enviado estarán a la derecha o la izquierda-->
                <div v-for="message in fullMsg">

                    <div v-if="isMyMessage(message.senderId)" class = "msg-row">
                        <div class = "msgBody">
                            <p v-if="isLink(message.body)">{{ message.body }}</p>
                            <a v-else h-ref="/Event" v-on:click="getSelectedEvent(message.body)">{{ message.body }}</a>
                        </div>
                        <img v-bind:src=message.img referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
                    </div>

                    <div v-else class = "msg-row msg-row2">
                        <img v-bind:src=message.img referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
                        <div class = "msgBody">
                            <p v-if="isLink(message.body)">{{ message.body }}</p>
                            <a v-else h-ref="/Event" v-on:click="getSelectedEvent(message.body)">{{ message.body }}</a>
                        </div>
                    </div>
                    
                </div>              
            </div>
            <form class="msgContainer">
                <input type="text" v-model="text" placeholder="Message..." id="message">
                <button type="submit" v-on:click="sendMessage()">Send</button>
            </form>
        </div>   
    </main> 

</template>

<style>

    .userBox {
        background: rgb(255, 204, 153);
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1%;
        color: black;
    }

    .userBox > img {
        margin-right: 10%;
        margin-left: 10%;
    }

    .msgContainer {
        background: rgb(255, 204, 153);
        width: 100%;
        padding: 1%;
    }

    .msgContainer > input[type=text] {
        padding: 6px;
        font-size: 17px;
        align-self: center;
        width: 55%;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: white;
    }

    .msgContainer > button {
        width: 20%;
        align-self: center;
        float: center;
        background: rgb(0, 153, 255);
        color: white;
        font-size: 17px;
        cursor: pointer;
        min-height: 40px;
    }

    .conteiner2 {
        padding: 0;
        box-sizing:border-box;
        max-width: 100%;
        height: 545px;
        align-items: center;
        justify-content: center;
    }

    .chatbox2{
        background: #306ec5;
        width: 100%;
        padding: 1%;
        height: 455px;
        overflow-y: scroll;
    }

    .msg-row{
        display: flex;
        align-items: flex-end;
        margin: 10px;
        flex-basis: 70%;
        justify-content: flex-end;
    }

    .msg-row img {
        margin-left: 10px;
        align-self: center;
    }

    .msg-row2{
        justify-content: flex-start;
    }

    .msgBody {
        width: 225px;
        height: 30px;
        background: #ffcc99cc;
        padding: 15px 15px;
        border-radius: 8px;
        font-weight: 300;
        text-align: left;
        line-height: 0px;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .msgBody p {
        color: black;
        font-family:'Roboto', sans-serif;
        font-size: 16px;
    }

    .msgBody a {
        color: black;
        font-size: 16px;
    }

    @media only screen and (min-width: 640px) {

        .userBox {
            background: rgb(255, 204, 153);
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 1%;
            color: black;
        }

        .userBox > img {
            margin-right: 2%;
            margin-left: 2%;
        }

        .msgContainer {
            background: rgb(255, 204, 153);
            width: 100%;
            padding: 1%;
        }

        .msgContainer > input[type=text] {
            float: center;
            padding: 6px;
            font-size: 17px;
            width: 30%;
            margin-top: 10px;
            margin-bottom: 10px;
            background-color: white;
        }

        .msgContainer > button {
            width: 5%;
            float: center;
            background: rgb(0, 153, 255);
            color: white;
            font-size: 17px;
            cursor: pointer;
            min-height: 40px;
        }

        .conteiner2{
            margin-top: 1.5%;
            margin-left: 10%;
            margin-right: 10%;
            padding: 0;
            box-sizing:border-box;
            max-width: 100%;
            height: 725px;
            grid-template-rows: 90% 10%;
            align-items: center;
            justify-content: center;
        }

        .chatbox2{
            background: #306ec5;
            width: 100%;
            padding: 1%;
            height: 85%;
            overflow-y: scroll;
        }

        .msg-row{
            display: flex;
            align-items: flex-end;
            margin: 10px;
            flex-basis: 70%;
            justify-content: flex-end;
        }

        .msg-row img {
            margin-left: 10px;
        }

        .msg-row2{
            justify-content: flex-start;
        }

        .msgBody {
            width: 500px;
            height: 40px;
            background: #ffcc99cc;
            padding: 15px 15px;
            border-radius: 8px;
            font-weight: 300;
            text-align: left;
            line-height: 10px;
        }

        .msgBody p {
            color: black;
            font-family:'Roboto', sans-serif;
            font-size: 16px;
        }

        .msgBody a {
            color: black;
            align-self: left;
            font-size: 16px;
        }
    }

</style>