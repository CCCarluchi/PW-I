<script>
  import Bar from "../components/Bar.vue";
  export default {
    components: { Bar },
    data() {
      return {
        user: {
          name:"",
          last_name:"",
          email:"",
          password:"",
          image:""
        }
      }
    },

    methods: {

      onFileSelected(event) {
        const formdata = new FormData()
        formdata.append("image", event.target.files[0])
          fetch("https://api.imgur.com/3/image/", {
            method: 'POST',
            headers: {'Authorization': "Client-ID 3eed77413905d63"},
            body: formdata
          })
          .then(data => data.json()).then(data => {
            this.user.image = data.data.link
          })
      },

      editProfile() {
        fetch("http://puigmal.salle.url.edu/api/v2/users", {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
          }, 
          body: JSON.stringify(this.event)
        })
        .then(res => res.json())
        .then(data => {
          if (data.length > 20) {
            alert("Some information has wrong format")
          } else {
            //window.location.assign('/Data');
          }
        });
      },

      getData() {
          fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("myId"), {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
          })
          .then(res => res.json())
          .then(data => {
            this.user.name = data[0].name;
            this.user.last_name = data[0].last_name;
            this.user.email = data[0].email;
            this.user.password = data[0].password;
            this.user.image = data[0].image;
          }); 
      }
    },

    beforeMount() {
      this.getData()
    }
  }

</script>

<template>

  
    <header>
      <br/>
      <Bar></Bar>
      <br/><br/>
      <div class="topText">
        <h1>Edit profile</h1>
      </div>
      <br/><br/><br/>
    </header>

    <main>
     
      <form>
        <div class="inputContainer">
          <input type="text" v-model="user.name" placeholder="*Name"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="text" v-model="user.last_name" placeholder="*Last name"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="text" v-model="user.email" placeholder="*Email"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="password" v-model="user.password" placeholder="*Password"><br/>
        </div>
        <br/><br/>

        <div class="inputContainer">
          <input type="file" accept="image/*" class="custom" @change="onFileSelected"><br/>
          <h3 class="previewFont">Preview:</h3>
          <img v-bind:src="user.image" referrerpolicy="no-referrer" class='imgRedonda'/><br/><br/>
        </div>
        <br/><br/>
        
      </form>  

     
    </main>

    <footer>
      <a id="button2"><button class = "button2" v-on:click="editProfile">Apply Changes</button></a><br/><br/>
    </footer>
      
</template>