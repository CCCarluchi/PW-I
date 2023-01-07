<script>

import logic from '../javascript/logic.js'

  export default {
      data() {
        return {
          name: "",
          last_name: "",
          username:"",
          birth:"",
          confirm:"",
          image:"",
        }

      },
      methods: {
        applychange(info = {}) {
          fetch("http://puigmal.salle.url.edu/api/v2/users", {
            method: 'PUT', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)
          })
          .then((response) => response.json())
          .then((data) => {
            const email = info.email;
            const password = info.password;
            if (data.hasOwnProperty('Error')) {
                alert('The information has an incorrect format, or that mail is already registered');
            } else {
              window.localStorage.removeItem("token");
              logic.login({email, password});
              
            }
          }); 
        },
        
        onFileSelected(event) {
          const formdata = new FormData()
          formdata.append("image", event.target.files[0])
            fetch("https://api.imgur.com/3/image/", {
                method: 'POST',
                headers: {'Authorization': "Client-ID 3eed77413905d63"},
                body: formdata
            }).then(data => data.json()).then(data => {
                this.image = data.data.link
            })
        }
      },
      beforeMount() {
        window.localStorage.clear();
      }
    }
  
</script>



<template>

    <main>
        <header>
      <br/>
      <div class="arrowContainer"> 
      <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    </div>
      <div class="appTitle">
        <h2>Change profile</h2>
      </div>
     </header> 

     <form>
      <div class="inputContainer">
        <input type="text" v-model="name" placeholder="*Name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" v-model="last_name" placeholder="*Last_name"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input v-model="username" placeholder="*Username"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input placeholder="*Date of birth" v-model="birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="text" v-model="email" placeholder="*Email"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="password" v-model="password" placeholder="*Password"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="password" v-model="confirm" placeholder="*Confirm Password"><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <input type="file" accept="image/*" class="imgRedonda" @change="onFileSelected"><br/>
        <img src= files[0].name class='imgRedonda' /><br/><br/>
      </div>
      <br/><br/>


      <div class="inputContainer">
        <button v-on:click.prevent="applychange({ name, last_name, image });"> Apply Changes </button>
        <router-link to="/Home"><button>Register</button></router-link>
        </div> 
    </form>
        <img src='https://pbs.twimg.com/media/EztG5y0WQAAPS69?format=jpg&name=medium' class='imgRedonda' /><br/><br/>
        <input type="file" id="actual-btn" hidden/>
        <label class = "labeel" for="actual-btn">Change picture</label><br/><br/>
        <span id="file-chosen">No file chosen</span>
        
        
      
      

      <footer>
      </footer>
      
    </main>
  </template>

<style>
.labeel {
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}

</style>
