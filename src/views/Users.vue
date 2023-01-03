<script>

  export default {

    data() {
      return {
          users: [],
        }
      },

    methods: {
      getUsers() {
        const token = window.localStorage.getItem("token")
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          headers: {'Authorization': 'Bearer ' + token}
        })
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.users.push(data[i])
          } 
          console.log(this.users)   
          //return data 
        });
        /* .then(users => {
          const friend = {id:"", name:"", last_name:"", email:"", image:"" }
          for (let i = 0 ; i < users.length; i++) {
            this.friends.push(users[i])
          }
        });  */
      },
      
      locateClick(id) {
        window.localStorage.setItem("selectedId", id);

      }

    },

    beforeMount(){
      this.getUsers();
    }
  }

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  <header>
    <br/>
    <a onclick="window.history.back()"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="topText">
      <h1>Users list</h1>
    </div>
    <br/><br/>
    
    <div class="searchContainer">
      <input type="text" placeholder="Search friend...">
      <button type="submit"><i class="fa fa-search"></i ></button><br/><br/>
    </div>
    <br/>
  </header>
  
  <main>
    
    <li class="grid-container" v-for="user in users" :key="user.id">
      <div>
        <!-- <img v-bind:src=user.image @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgList'/> -->
        <p>{{ user.name }}</p>
        <a href="/NotFriendProfile" v-on:click="locateClick(user.id)"><button>Profile</button></a>
      </div>
    </li>

  </main>
</template>