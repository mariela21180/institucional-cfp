document.addEventListener("DOMContentLoaded", function(event) {

    let guardarCurso = document.getElementById('guardarCurso');

    let nombreCurso = document.getElementById('nombreCurso');
    let descripcionCurso = document.getElementById('descripcionCurso');
    let agregarHorarioModal = document.getElementById('agregarHorarioModal'); 

    guardarCurso.addEventListener('click', crearCurso); //llama a la funcion (solo en el addEventListener)
    agregarHorarioModal.addEventListener('click',guardarHorario );

    function crearCurso() { 
        event.preventDefault();        
        var form = $('#curso-form');

        form.parsley().validate();

            if (form.parsley().isValid()){
            let curso = armarCurso();
            // console.log(curso);
            
            //llamadaAjax post curso
        }
    }

    function armarCurso() { 
        return {
            nombre: nombreCurso.value,
            descripcion: descripcionCurso.value,
            horarios: [
                {
                    dia: "Lunes",
                    horaInicio: "19hs",
                    horaFin: "21hs"
                },
                {
                    dia: "Miercoles",
                    horaInicio: "19hs",
                    horaFin: "21hs"
                }
            ]
        }
    }

    function guardarHorario(){
        event.preventDefault();        
        var form = $('#horario-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar horario a la tabla y validar que aun no exista

            $('#modalHorario').modal('hide');
        }
    }
});