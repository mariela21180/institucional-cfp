
document.addEventListener("DOMContentLoaded", function(event) {
    "use strict";
    
    let btnLogin = document.getElementById('login-btn');

    let nombreUsuario = document.getElementById('nombre-usuario');
    let pssUsuario = document.getElementById('pss-usuario');
    

    btnLogin.addEventListener('click', login); //llama a la funcion (solo en el addEventListener)

    function login(event) { 
        event.preventDefault();        
        var form = $('#login-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            let usuario = armarUsuario();
            validarUsuario(usuario);   
        }
    }

    async function validarUsuario(usuarioDto){
       let result = await fetch ("/auth/login",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(usuarioDto)})
              
       if(result.status != 404){
            let json = await result.json();
            
            if(json.status == 200){                
                // Save token to local storage
                var now = new Date().getTime();
                var setupTime = localStorage.getItem('setupTime');
                localStorage.setItem('setupTime', now)
                window.localStorage.setItem('token', json['access_token']);
                // Go to homepage
                window.location.href = window.location.origin + '/home.html';
            }
                                
        }
    }

    function armarUsuario() { 
        let usuario = {
            'usuario': nombreUsuario.value,
            'password': pssUsuario.value            
        }
        return usuario;
    }

});