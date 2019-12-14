import { async } from "rxjs/internal/scheduler/async";

document.addEventListener("DOMContentLoaded", function(event) {

    let guardarAlumno = document.getElementById('guardarAlumno');

    let nombreAlumno = document.getElementById('nombreAlumno');
    let apellidoAlumno = document.getElementById('apellidoAlumno');
    let documentoAlumno = document.getElementById('documentoAlumno');
    let eMailAlumno = document.getElementById('eMailAlumno');
    let calleAlumno = document.getElementById('calleAlumno');
    let alturaAlumno = document.getElementById('alturaAlumno');
    let pisoAlumno = document.getElementById('pisoAlumno');
    let dptoAlumno = document.getElementById('dptoAlumno');
    let nivelAlumno = document.getElementById('nivelAlumno'); // tiene un select tde value 1,2,3,4,5


    guardarAlumno.addEventListener('click', crearAlumno); //llama a la funcion (solo en el addEventListener)

    function crearAlumno() { 
        let curso = armarAlumno();
        console.log(curso);
        
        //llamadaAjax post curso
    }

    async function agregarPersonaServidor(persona){
       let p = await fetch ("/personas",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(persona)})
       console.log(p) 
       if(p.status != 404){
            let json = await p.json();
            persona.id = json.id            
        }
    }



    function armarPersona() { 
        let persona = {
            'nombre': nombreAlumno.value,
            'apellido': apellidoAlumno.value,
            'dni': documentoAlumno.value,
            'eMail': eMailAlumno.value
        }
        return persona;
    }

   /*  function armarDomicilio() { 
        return {
            'calle': calleAlumno.value,
            'altura': alturaAlumno.value,
            'piso?': pisoAlumno.value,
            'dpto?': dptoAlumno.value,
            'idPersona': cuando creo una persona me devuelve un id [] investigar como buscarlo
        }
    }
    function armarAlumno() { 
        return {
            'nivelEstudioAlcanzado': nombreAlumno.value,
            'adeudaDocumentacion': false
            'idPersona': cuando creo una persona me devuelve un id [] investigar como buscarlo
        }
    }
    function armarTelefono() { 
        return {
            objeto dentro de objeto
        }
    }
 */
});