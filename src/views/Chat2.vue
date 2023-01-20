<script>
export default {
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
                fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId"), {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(data => {
                    this.user = data[0];
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

        sendMessage() {
            fetch("http://puigmal.salle.url.edu/api/v2/messages", {
                method: 'POST',
                headers: {'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + window.localStorage.getItem("token")},
                body: JSON.stringify({content: this.text, user_id_send: this.user.id, user_id_recived: this.otherUser.id})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.getMessages();
                this.text = "";
            })
        },

        isMyMessage(senderId) {
            return senderId == this.user.id;
        },

        isLink(body) {
            return !body.includes("Check out this event: ");
            
        },

        getSelectedEvent(body) {
            const words = body.split(' ')
            window.localStorage.setItem("selectedEventId", words[words.length - 1]);
            window.location.assign("/Event");
        }
    },

    beforeMount() {
        this.getMessages();
    }
}
</script>

<template>

    <main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
       
       
        <div class="conteiner2">
            <div class="userBox">
                <img v-bind:src=otherUser.image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
                <h3>{{ otherUser.name }}</h3>
            </div>
            <div class="chatbox2">
                <div v-for="message in fullMsg">

                    <div v-if="isMyMessage(message.senderId)" class = "msg-row">
                        <div class = "msg-text">
                            <p v-if="isLink(message.body)">{{ message.body }}</p>
                            <a v-else h-ref="/Event" v-on:click="getSelectedEvent(message.body)">{{ message.body }}</a>
                        </div>
                        <img v-bind:src=message.img referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
                    </div>

                    <div v-else class = "msg-row msg-row2">
                        <img v-bind:src=message.img referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
                        <div class = "msg-text">
                            <p v-if="isLink(message.body)">{{ message.body }}</p>
                            <a v-else h-ref="/Event" v-on:click="getSelectedEvent(message.body)">{{ message.body }}</a>
                        </div>
                    </div>
                    
                </div>              
            </div>
            <div class="msgContainer">
                <input type="text" v-model="text" placeholder="Message..." id="message">
                <button type="submit" v-on:click="sendMessage()">Send</button>
            </div>
        </div>   
            
            

    </main> 

    <!-- <article class="chatContainer">
        <li class="grid-container" v-for="message in fullMsg">

        <div v-if="isMyMessage(message.senderId)" class="myMessage">
            <img v-bind:src=message.img referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
            <h3>{{ message.username }}</h3>
            <p v-if="isLink(message.body)">{{ message.body }}</p>
            <a v-else h-ref="/Event" v-on:click="getSelectedEvent(message.body)">{{ message.body }}</a>
        </div>

        <div v-else class="otherMessage">
            <img v-bind:src=message.img referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
            <h3>{{ message.username }}</h3>
            <p v-if="isLink(message.body)">{{ message.body }}</p>
            <a v-else h-ref="/Event" v-on:click="getSelectedEvent(message.body)">{{ message.body }}</a>
        </div>
        
        </li>
    </article>
    <input type="text" v-model="text">
    <button v-on:click="sendMessage()">Send</button> -->

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
        margin-left: 4%;
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
        height: 800px;
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

    .msg-row2{
        justify-content: flex-start;
    }

    .msg-text {
        min-width: 600px;
        background: #ffcc99cc;
        padding: 20px 20px;
        border-radius: 8px;
        font-weight: 300;
        overflow-y: auto;
    }

    .msg-text p {
        color: black;
        font-family:'Roboto', sans-serif;
        font-size: 15px;
    }

    .msg-text a {
        color: black;
        align-self: left;
        font-size: 15px;
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
            margin-left: 0;
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
            height: 800px;
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

        .msg-row2{
        justify-content: flex-start;
        }

        .msg-text {
            min-width: 600px;
            background: #ffcc99cc;
            padding: 20px 20px;
            border-radius: 8px;
            font-weight: 300;
            overflow-y: auto;
        }

        .msg-text p {
            color: black;
            font-family:'Roboto', sans-serif;
            font-size: 15px;
        }

        .msg-text a {
            color: black;
            align-self: left;
            font-size: 15px;
        }
    }

</style>