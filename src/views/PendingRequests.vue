<script>

  export default {
      data() {
        return {
          user: {id, name:"", last_name:"", email:"", image:"", status: int}
          }
        },

      methods: {
        getRequests() {
          fetch("http://puigmal.salle.url.edu/api/v2/users/friends/requests", {headers: {'Authentication': 'token'}})
          .then(res => res.json())
          .then(data => {
            for (let i = 0; i < data.lenght; i++) {
                user[i].name = data[i].name
                user[i].last_name = data[i].last_name
                user[i].email = data[i].email
                user[i].image = data[i].image
                user[i].status = data[i].status
            }
            console.log(data)
          });
      },
      acceptRequest() {
        fetch("http://puigmal.salle.url.edu/api/v2/friends/" + user.id, {method: 'PUT', headers: {'Authentication': 'token'}})
          .then(res => res.json())
          .then(data => {
            console.log(data)
          }); 
      }
    }
  }
</script>

<template>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
     <header>
        <br/>
        <a onclick="window.history.back()" id="i"><i class="arrow left"></i></a>
        <br/><br/>
        <div class="topText">
            <h1>Pending Requests</h1>
        </div>
        <br/><br/>
        <div class="searchContainer">
            <input type="text" placeholder="Search friend...">
            <button type="submit"><i class="fa fa-search"></i></button><br/><br/>
        </div>
        <br/>
    </header>

    <main>
        <div class="grid-container">
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
                <p>Person 1</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a> 
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                <p>Person 2</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a> 
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
                <p>Person 3</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a>  
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/>
                <p>Person 4</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a> 
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                <p>Person 5</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a>  
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                <p>Person 6</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a>  
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                <p>Person 7</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a>  
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' class='imgList'/> 
                <p>Person 8</p>
                <button>Deny</button>   
                <button>Accept</button>
                <a href="/NotFriendProfile" id="button"><button>Profile</button></a> 
            </div>
        </div>
    </main>
</template>

<style>
    .grid-container > div > button {
    float: right;
    background-color: white;
    border: 1px solid black;
    height: 50px;
    width: 80px;
    margin-right: 2px;
    margin-left: 2px;
    font-size: 15px;
    font-family: 'Fredoka', sans-serif;
    color: black;
    margin-top: 0.6%;
    }

    @media only screen and (min-width: 640px) {

        .grid-container > div > button {
        float: right;
        background-color: white;
        border: 1px solid black;
        height: 50px;
        width: 150px;
        padding: 20px;
        font-size: 20px;
        line-height: 0px;
        font-family: 'Fredoka', sans-serif;
        color: black;
        }
    }

</style>