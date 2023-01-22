<script>
export default {
    props: {
        image:"",
        name:"",
        id:"",
        friend:""
    },

    methods: {

        //Métodos para saber a qué usuario se le ha hecho click para ir a su perfil, de manera 
        //que se guarda su id para luego saber de qué usuario pedir la información a la api
        locateClick(id) {
            window.localStorage.setItem("selectedUserId", id);

            if (this.friend) {
                window.location.assign('/FriendProfile');
            } else {
                window.location.assign('/NotFriendProfile');
            }
        },

        goToChat(id) {
            window.localStorage.setItem("selectedUserId", id);
        }
    }
}
</script>

<template>
    <div>
        <img v-bind:src=image referrerpolicy="no-referrer" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/>
        <p>{{ name }}</p>
        <a href="/Chat2" v-on:click="goToChat(id)"><button>Chat</button></a>
        <!-- En caso de seleccionar a uno de los usuarios, se llama a la función locateClick para guardar su id -->
        <a v-on:click="locateClick(id)"><button>Profile</button></a>
      </div>
</template>