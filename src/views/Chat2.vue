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

    <article class="chatContainer">
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
    <button v-on:click="sendMessage()">Send</button>

</template>

<style>

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