export default {

    //Método que hace login con el usuario que se da
    login(info = {}) {
        fetch('http://puigmal.salle.url.edu/api/v2/users/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(info)
        })
        //En caso de que la respuesta no esté bien, se lanza un error
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then (data => { 
            //Se guarda el token de inicio de sesión del usuario
            window.localStorage.setItem("token", data.accessToken);

            //Una vez hecho el login se pide a la api la información del usuario en cuestión
            fetch('http://puigmal.salle.url.edu/api/v2/users/search?s=' + info.email, {
                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => { 
                //Se guarda la id del usuario para usarla más adelante
                window.localStorage.setItem("myId", data[0].id);
            })
            .then(() => {
                window.location.assign('/Home');                
            })        
        })
        //Si ha habido un error se muestra una alerta al usuario
        .catch(() => {
            alert('Mail or password wrong');
        })  
    },

    //Método que retrocede a la página anterior
    back() {
        history.back();
    },

    //Método que comprueba si el usuario que se ha seleccionado es amigo o no
    checkFriends() {
        let isFriend = false;
        
        fetch("http://puigmal.salle.url.edu/api/v2/friends", {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(friends => {
            //Se comprueba la id del usuario seleccionado con la de los amigos del usuario loggeado
            for (let i = 0; i < friends.length; i++) {
                if (localStorage.getItem("selectedUserId") == friends[i].id) {
                    isFriend = true
                }
            }
        })
        .then(() => {  
            //En caso de que sea amigo, se redirige al perfil de amigo, si no se queda en el perfil de usuario corriente
            if (isFriend) {
                window.location.assign('/FriendProfile');
            }
        });
    } 
    
}
  