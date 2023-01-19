<script>
  import BackArrow from "../components/BackArrow.vue";
  import Logic from "../javascript/logic.js";
  export default {
    components: { BackArrow },

      data() {
        return {
          name: "",
          last_name: "",
          username:"",
          birth:"",
          email:"",
          password:"",
          confirm:"",
          image:"",
          minDate: new Date(((new Date().getFullYear()) - 100), 12, 31),
          maxDate: new Date((new Date().getFullYear()), new Date().getMonth, new Date().getDate)
        }

      },
      methods: {
        signUp(info = {}) {
          fetch("http://puigmal.salle.url.edu/api/v2/users", {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)
          })
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
              console.log(data)
              const email = info.email;
              const password = info.password;
              window.localStorage.removeItem("token");
              logic.login({email, password});
          })
          .catch(() => {
            alert('The information has an incorrect format, or that mail is already registered');
          })
        },
        
        //A vegades no pilla la imatge nose perque
        onFileSelected(event) {
          const formdata = new FormData()
          formdata.append("image", event.target.files[0])
            fetch("https://api.imgur.com/3/image/", {
                method: 'POST',
                headers: {'Authorization': "Client-ID 3eed77413905d63"},
                body: formdata
            })
            .then(data => data.json())
            .then(data => {
                this.image = data.data.link
                console.log(this.image)
            });
        },

        checkDataForSignUp(info = {}) {
          if (this.name.length == 0 || this.last_name.length == 0 || this.username.length == 0 || this.birth.length == 0 || this.email.length == 0 || this.password.length == 0 || this.confirm.length == 0 || this.image == 0) {
            alert('All fields are required');
          } else {
          if(this.password.localeCompare(this.confirm) == 0) {
            this.signUp(info);
          } else {
              console.log(this.password)
              console.log(this.confirm)
              alert('Passwords do not match');
            }
          }
        },
        
        goBack() {
          Logic.back();
        }
        /*,

        setMaxDate() {
          let min = new Date((new Date().getFullYear()), new Date().getMonth, new Date().getDate).toString.Split('T')[0];
          console.log(min);
          return min;
        },

        setMinDate() {
          let max = new Date(((new Date().getFullYear()) - 100), 0o1, 0o1).toString.Split('T')[0];
          console.log(max);
          return max;
        }*/
      },
      beforeMount() {
        window.localStorage.clear();
      }
    }
  
</script>
<template>
  <header>
    <br/>
    <div class="arrowContainer"> 
      <BackArrow v-on:back="goBack"></BackArrow>
    </div>
    <div class="appTitle">
      <h2>Sign up</h2>
    </div>
  </header>
    
  <main>
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
        <input placeholder="*Date of birth" v-model="birth" min="1900-12-31" max="2023-12-31" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"><br/>
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
        <input type="file" accept="image/*" class="custom" @change="onFileSelected"><br/>
        <h3 class="previewFont">Preview:</h3>
        <img v-bind:src="image" referrerpolicy="no-referrer" class='imgRedonda'/><br/><br/>
      </div>
      <br/><br/>

      <div class="inputContainer">
        <button v-on:click.prevent="checkDataForSignUp({ name, last_name, email, password, image });"> Register </button>
      </div>
    </form>
    <br/><br/>
  </main>

  <footer>
  </footer>

</template>