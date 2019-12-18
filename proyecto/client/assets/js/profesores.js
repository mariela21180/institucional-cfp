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
        let persona = armarPersona();        
        agregarPersonaServidor(persona).then((p) => {
            
            if(p.idPersona != null){
                let profesor = armarProfesor(p.idPersona);
                agregarServidor(profesor);
                
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

    async function agregarServidor(profesordto){
        let result = await fetch ("/profesores",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(profesordto)})
        
        if(result.status != 404){
            let json = await result.json();          
        }
        return profesordto;
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
            'nombre': nombreProfesor.value,
            'apellido': apellidoProfesor.value,
            'dni': dniProfesor.value,
            'eMail': emailProfesor.value
        }
    }
    
    function armarProfesor(idPersona) { 
        return {
            'nivelEstudioAlcanzado': nivelEstudiosProfesor.value, //
            'titulo': tituloProfesor.value,
            'idPersona': idPersona
        }
    }

   function armarDomicilio(idPersona) { 
        return {
            'calle': calleProfesor.value,
            'altura': alturaDomicilioProfesor.value,
            'piso?': pisoProfesor.value,
            'dpto?': dptoProfesor.value,
            'idPersona': idPersona
        }
    }

    function armarTelefono(idPersona) { 
        return {
            'codArea': codAreaProfesor.value,
            'nro': telefonoProfesor.value,
            'idPersona': idPersona
        }
    }
 
});