function activarNav(){
    let itemLinks = document.querySelectorAll('.nav-link');
    let navItems = document.querySelectorAll('.nav-item.active');
    let cerrarSesionBtn = document.getElementById('cerrar-sesion');

    activarItemClick();

    cerrarSesionBtn.addEventListener('click', function () { 
        window.location.href = window.location.origin;
    });
    
    function activarItemClick() {
        let url = window.location.pathname;

        if(url !== '/' && url !== '/index.html'){
            removeItemActive();
        }
        if(url === '/agregar-alumno.html'){
            url = '/alumnos.html'
        }
        if(url === '/crear-examen.html'){
            url = '/formularios.html'
        }
        if(url === '/crear-curso.html'){
            url = '/cursos.html'
        }
        if(url === '/agregar-clase.html'){
            url = '/cursos.html'
        }
        if(url === '/agregar-profesor.html'){
            url = '/profesores.html'
        }

        itemLinks.forEach(function(item) {
            let itemUrl = "/" + item.getAttribute("href");
            if(itemUrl === url){
                item.parentNode.classList.add('active');
            }
        });
    }
    
    function removeItemActive() {
        for (let i = 0; i < navItems.length; i++) {
            if(navItems[i].classList.contains('active')){
                navItems[i].classList.remove('active');
            }
        }
    }
}