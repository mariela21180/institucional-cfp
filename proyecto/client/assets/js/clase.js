
document.addEventListener("DOMContentLoaded", function(event) {

    let guardarClase = document.getElementById('guardarClase');
    guardarClase.addEventListener('click', crearClase);

    function crearClase(event) { 
        event.preventDefault();        
        var form = $('#clase-form');

        form.parsley().validate();

        if (form.parsley().isValid()){            
            // Poner acá las funciones para guardar en servidor
        }
    }
})