export default {

    login(info = {}) {
        fetch('http://puigmal.salle.url.edu/api/v2/users/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)
        })
        .then(response => response.json()) 
        .then (data => { 
            if (data.hasOwnProperty('Error')) {
                alert('Mail or password wrong');
            } else {
                window.localStorage.setItem("token", data.accessToken);

                fetch('http://puigmal.salle.url.edu/api/v2/users/search?s=' + info.email, {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then(res => res.json())
                .then(data => { 
                    console.log(data)
                    window.localStorage.setItem("myId", data[0].id)
                    console.log(window.localStorage)
                })
                .then(data => {
                    window.location.assign('/Home')
                })
                
            }    
        })
        
    } 
}
  