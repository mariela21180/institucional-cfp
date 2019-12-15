///import { async } from "rxjs/internal/scheduler/async";

document.addEventListener("DOMContentLoaded", function(event) {

    let guardarAlumno = document.getElementById('guardarAlumno');

    let nombreAlumno = document.getElementById('nombreAlumno');
    let apellidoAlumno = document.getElementById('apellidoAlumno');
    let documentoAlumno = document.getElementById('documentoAlumno');
    let eMailAlumno = document.getElementById('eMailAlumno');
    let calleAlumno = document.getElementById('calleAlumno');
    let alturaDomicilioAlumno = document.getElementById('alturaDomicilioAlumno');
    let pisoAlumno = document.getElementById('pisoAlumno');
    let dptoAlumno = document.getElementById('dptoAlumno');
    let nivelAlumno = document.getElementById('nivelAlumno'); // tiene un select tde value 1,2,3,4,5
    let codAreaAlumno = document.getElementById('codAreaAlumno');
    let telefonoAlumno = document.getElementById('telefonoAlumno');

    guardarAlumno.addEventListener('click', crearAlumno); //llama a la funcion (solo en el addEventListener)

    function crearAlumno() { 
        let persona = armarPersona();        
        agregarPersonaServidor(persona).then((p) => {
            
            if(p.idPersona != null){
                let alumno = armarAlumno(p.idPersona);
                agregarAlumnoServidor(alumno);
                
                let domicilio = armarDomicilio(p.idPersona);
                agregarDomicilioServidor(domicilio);

                let telefono = armarTelefono(p.idPersona);
                agregarTelefonoServidor(telefono);
            }
            
        });
    }

    async function agregarPersonaServidor(personadto){
       let result = await fetch ("/personas",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(personadto)})
       if(result.status != 404){
            let json = await result.json();
            personadto.idPersona = json.idPersona;                  
        }
        return personadto;
    }

    async function agregarAlumnoServidor(alumnodto){
        let result = await fetch ("/alumnos",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(alumnodto)})
        
        if(result.status != 404){
            let json = await result.json();          
        }
        return alumnodto;
    }

    async function agregarDomicilioServidor(domiciliodto){
        let result = await fetch ("/domicilios",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(domiciliodto)});
        if(result.status != 404){
            let json = await result.json();          
        }
        return domiciliodto;
    }

    async function agregarTelefonoServidor(telefonodto){
        let result = await fetch ("/telefonos",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(telefonodto)})
        if(result.status != 404){
            let json = await result.json();          
        }
        return telefonodto;
    }

    function armarPersona() { 
        return {
            'nombre': nombreAlumno.value,
            'apellido': apellidoAlumno.value,
            'dni': documentoAlumno.value,
            'eMail': eMailAlumno.value
        }
    }
    
    function armarAlumno(idPersona) { 
        return {
            'nivelEstudioAlcanzado': nivelAlumno.value, //
            'adeudaDocumentacion': false,
            'idPersona': idPersona
        }
    }

   function armarDomicilio(idPersona) { 
        return {
            'calle': calleAlumno.value,
            'altura': alturaDomicilioAlumno.value,
            'piso?': pisoAlumno.value,
            'dpto?': dptoAlumno.value,
            'idPersona': idPersona
        }
    }

    function armarTelefono(idPersona) { 
        return {
            'codArea': codAreaAlumno.value,
            'nro': telefonoAlumno.value,
            'idPersona': idPersona
        }
    }
 
});