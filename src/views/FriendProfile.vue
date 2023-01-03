<script>
  export default {

    data() {
      return {
        name:"",
        image:""
      }
    },

    methods: {
      getFriend() {
        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("selectedId"), {
          headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(data => {
          this.name = data[0].name;
          this.image = data[0].image;
        })
      }
    },

    beforeMount() {
      this.getFriend()
    }
  }

</script>

<template>

  <header>
    <br/>
    <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
    <br/><br/>
    <div class="profileGrid">
      <div class="profileMain">
        <br/><br/><img v-bind:src="image" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'" class='imgRedonda'/>
        <h1>{{name}}</h1>
      </div>
    </div>
  </header>
  
  <main>
    <div class="elementsGrid">
      <div class="profileItem">
        <a href="/Statistics"><button class="buttonProfile">Public stats</button></a>
      </div>
    </div>
  </main>
    
</template>