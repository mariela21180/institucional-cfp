
document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';

    let guardarClase = document.getElementById('guardarClase');
    let agregarArchivoModal = document.getElementById('agregarArchivoModal'); 
    let agregarTemaModal = document.getElementById('agregarTemaModal'); 

    guardarClase.addEventListener('click', crearClase);
    agregarArchivoModal.addEventListener('click',guardarArchivo );
    agregarTemaModal.addEventListener('click',guardarTema );

    function crearClase(event) { 
        event.preventDefault();        
        var form = $('#clase-form');

        form.parsley().validate();

        if (form.parsley().isValid()){            
            // Poner acá las funciones para guardar en servidor
        }
    }
    function guardarArchivo(){
        event.preventDefault();        
        var form = $('#archivo-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar archivo a la tabla y validar que aun no exista

            $('#modalArchivo').modal('hide');
        }
    }
    function guardarTema(){
        event.preventDefault();        
        var form = $('#tema-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar tema a la tabla y validar que aun no exista

            $('#modalTema').modal('hide');
        }
    }
})