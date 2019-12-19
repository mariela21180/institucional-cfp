document.addEventListener("DOMContentLoaded", function(event) {

    let guardarProfesor = document.getElementById('guardarProfesor');

    let nombreProfesor = document.getElementById('nombreProfesor');
    let apellidoProfesor = document.getElementById('apellidoProfesor');
    let dniProfesor = document.getElementById('dniProfesor');
    let emailProfesor = document.getElementById('emailProfesor');
    let calleProfesor = document.getElementById('calleProfesor');
    let alturaDomicilioProfesor = document.getElementById('alturaDomicilioProfesor');
    let pisoProfesor = document.getElementById('pisoProfesor');
    let dptoProfesor = document.getElementById('dptoProfesor');
    let nivelEstudiosProfesor = document.getElementById('nivelEstudiosProfesor'); // tiene un select tde value 1,2,3,4,5
    let codAreaProfesor = document.getElementById('codAreaProfesor');
    let telefonoProfesor = document.getElementById('telefonoProfesor');
    let tituloProfesor= document.getElementById('tituloProfesor');

    guardarProfesor.addEventListener('click', crearProfesor); //llama a la funcion (solo en el addEventListener)

    function crearProfesor() { 
        let profesor = armarProfesor();        
        agregarServidor(profesor);
    }

   
    async function agregarServidor(docentedto){
        let result = await fetch ("/docentes/guardar",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(docentedto)})
        
        if(result.status != 404){
            window.location.href = window.location.origin + '/profesores.html'; 
            //let json = await result.json();          
        }
        return docentedto;
    }

   
    function armarProfesor() { 
        return {
            'nivelEstudioAlcanzado': nivelEstudiosProfesor.value, 
            'titulo': tituloProfesor.value,
            'nombre': nombreProfesor.value,
            'apellido': apellidoProfesor.value,
            'dni': dniProfesor.value,
            'eMail': emailProfesor.value,
            'codArea': codAreaProfesor.value,
            'nro': telefonoProfesor.value,
            'calle': calleProfesor.value,
            'altura': alturaDomicilioProfesor.value,
            'piso?': pisoProfesor.value,
            'dpto?': dptoProfesor.value,
        }
    } 
});