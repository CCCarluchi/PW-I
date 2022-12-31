<script>
/*
One-way binding
 */
export default {
  data() {
    return {
      isHidden: true,
      buttonText: "Display?",
      name: "",

    }
  },
  methods: {
    changeState() {
      if (this.isHidden === false) {
        this.isHidden = true;
        this.buttonText = "Display?"
      } else {
        this.isHidden = false;
        this.buttonText = "Hide?"
      }
    },

    getUsers() {
      fetch('http://puigmal.salle.url.edu/api/v2')
         .then(res => res.json())
         .then(data => {
           console.log(data)
         });
    }    
  }
}
</script>


<template>
    <header class="appTitle">
        <h1>Home</h1>
    </header>

    <main> 
    
    <div class="buttonHome">
        <div class="homeItemLeft">
            <button class="buttonH" v-on:click="getUsers()">{{ buttonText }}</button>
        </div>
        <div class="homeItemRight">
            <a href="/FriendsList" id="button"><button class="buttonH">Friends</button></a>
        </div>
        <div class="homeItemLeft">
            <a href="/Events" id="button"><button class="buttonH">Events</button></a>
        </div>
        <div class="homeItemRight">
            <a href="/Chat" id="button"><button class="buttonH">Chat</button></a>
        </div>
    </div>
    
    </main>

  </template>

  <style>
.buttonHome {
  display: grid;
  grid-template-columns: 10% auto 7.5% auto 10%;
  grid-template-rows: auto;
  grid-gap: 15px;
}

.buttonHome > div > a > button {
  background-color: rgba(255, 204, 153);
  border: 2px solid black;
  height: 100%;
  width: 100%;
  font-size: 25px;
  font-family: 'Fredoka', sans-serif;
  color: black;
}

.homeItemLeft {
  grid-column: 2/3;
  grid-row: auto;
  height: 150px;
}

.homeItemRight {
  grid-column: 4/5;
  grid-row: auto;
  height: 150px;
}

.buttonH {
  border-radius: 4px;
  border: 1px solid rgb(62, 41, 41);
  background-color: rgba(255, 204, 153);
  width: 137px;
  height: 137px;
  cursor: pointer;
}
.buttonH:hover {
  border-color: #4e0101;
}

@media only screen and (min-width: 640px) {
.buttonHome {
    display: grid;
    grid-template-columns: 10% auto 10% auto 10%;
    grid-template-rows: auto;
    grid-gap: 50px;
  }

  .buttonHome > div > a > button {
    background-color: rgba(255, 204, 153);
    border: 2px solid black;
    height: 100%;
    width: 100%;
    font-size: 35px;
    font-family: 'Fredoka', sans-serif;
    color: black;
  }
  
  .homeItemLeft {
    grid-column: 2/3;
    grid-row: auto;
    height: 300px;
  }
  
  .homeItemRight {
    grid-column: 4/5;
    grid-row: auto;
    height: 300px;
  }

  .buttonH {
    border-radius: 4px;
    border: 1px solid rgb(62, 41, 41);
    background-color: rgba(255, 204, 153);
    width: 230px;
    height: 230px;
    cursor: pointer;
  }
  .buttonH:hover {
    border-color: #4e0101;
  }
 }
  </style>