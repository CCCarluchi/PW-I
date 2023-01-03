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
                window.location.href = "/Home";
            }    
        })
    } 
}
  