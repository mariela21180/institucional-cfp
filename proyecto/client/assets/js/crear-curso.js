document.addEventListener("DOMContentLoaded", function(event) {

    let guardarCurso = document.getElementById('guardar-curso');

    let nombreCurso = document.getElementById('nombreCurso');
    let descripcionCurso = document.getElementById('descripcionCurso');

    guardarCurso.addEventListener('click', crearCurso); //llama a la funcion (solo en el addEventListener)

    function crearCurso() { 
        let curso = armarCurso();
        console.log(curso);
        
        //llamadaAjax post curso
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

});