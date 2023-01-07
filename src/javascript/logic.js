export default {

    login(info = {}) {
        fetch('http://puigmal.salle.url.edu/api/v2/users/login', {
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
        .then (data => { 
            window.localStorage.setItem("token", data.accessToken);
            window.localStorage.setItem("loggedIn", true);

            fetch('http://puigmal.salle.url.edu/api/v2/users/search?s=' + info.email, {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                window.localStorage.setItem("myId", data[0].id);
                console.log(window.localStorage);
            })
            .then(() => {
                window.location.assign('/Home');                
            })        
        })
        .catch(() => {
            alert('Mail or password wrong');
        })  
    },

    onFileSelected(event) {
        const formdata = new FormData()
        formdata.append("image", event.target.files[0])
          fetch("https://api.imgur.com/3/image/", {
            method: 'POST',
            headers: {'Authorization': "Client-ID 3eed77413905d63"},
            body: formdata
          })
          .then(data => data.json()).then(data => {
            return data.data.link
          })
    },

    checkFriends() {
        let isFriend = false;
        
        fetch("http://puigmal.salle.url.edu/api/v2/friends", {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(friends => {
            for (let i = 0; i < friends.length; i++) {
                if (localStorage.getItem("selectedUserId") == friends[i].id) {
                    isFriend = true
                }
            }
        })
        .then(() => {  
            console.log(localStorage.getItem("selectedUserId"))
            if (isFriend) {
                window.location.assign('/FriendProfile');
            }
        });
    }
    
}
  