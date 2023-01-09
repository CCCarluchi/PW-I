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
            })
        },

        isMyMessage(senderId) {
            return senderId == this.user.id;
        },

        isLink(body) {
            return !body.includes("Check out this event: ") ;
            
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
                <div class="chatbox2">
                    <div class = "col-3" v-for="message in fullMsg">

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
            </div>   
            
            <div class="msgContainer">
                <input type="text" v-model="text" placeholder="Search user...">
                <button type="submit" v-on:click="sendMessage()"><i class="fa fa-search"></i ></button><br/><br/>
            </div>

    </main> 


    <footer>
        
    </footer>

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

.msgContainer {
  margin-right: 3%;
  margin-left: 3%;
  padding: 8px;
  
}

.msgContainer > input[type=text] {
  float: center;
  padding: 6px;
  font-size: 17px;
  width: 30%;
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
  padding: 0;
  box-sizing:border-box;
  width: 80%;
  height: 800px;
  display: flex;
  grid-template-rows: 90% 10%;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.chatbox2{
  background: #306ec5;
  width: 90%;
  height: 100%;
  display: grid;
  flex: 1;
  overflow-y: scroll;
}

.chatbox h2{
  font-family: 'Fredoka', sans-serif;
  font-size: 28px;
}

.col-3{
  display: block;
}

.chatbox p {
  font-family:'Roboto', sans-serif;
  font-size: 20px ;
  color:#000000
}

.msg-row{
  display: flex;
  align-items: center;
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

.msg-text h2{
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 10px;
  text-align:left;
}
.msg-text p {
  color: #fff;
  text-align: left;
  font-size: 15px;
}

.msg-text a {
  color: #fff;
  align-self: left;
  font-size: 15px;
}

.msg-img{
  width: 10px;
  border-radius: 10%;
  margin: 0 20xp;
}

.chatContainer {
    overflow-y:scroll;
    max-height: 800px;
}

.myMessage {
    float:right;
}

.otherMessage {
    float:left;
}

</style>