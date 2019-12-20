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
    async function actualizarEnServidor(profesor) {
        let profesorId = profesor.idDocente;
        console.log(profesorId);
        let r = await fetch(`/docentes/${profesorId}`, { "method": "PUT", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(profesorId)});      
        return (r.ok);
    }

   
    
     /* async function crearProfesor() {
        if (validarCampos()) {
            let json = armarProfesor();
            if (!edit) {
                console.log("Creando Vehiculo:")
                if (agregarServidor(json)) {
                    armarProfesor();
                    limpiarCampos()
                    ocultarFormulario();
                }
                else {
                    alert ("Error grabando en servidor");
                }
            } else {
                console.log("Editando Vehiculo:")
                if (confirm("Está a punto de editar el vehículo patente "+json.idDocente+"\n¿Desea continuar?")) {
                    await actualizarEnServidor(json);
                    armarProfesor();
                    limpiarCampos();
                    ocultarFormulario();
                    
                } else {
                    cancelar();
                }
            }
        }
    } */

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
    function limpiarCampos() {
        nivelEstudiosProfesor.value = "";
        tituloProfesor.value = "";
        apellidoProfesor.value = "";
        dniProfesor.value = "";
        emailProfesor.value = "";
        codAreaProfesor.value = "";
        telefonoProfesor.value = "";
        calleProfesor.value = "";
        alturaDomicilioProfesor.value = "";
        pisoProfesor.value = "";
        dptoProfesor.value = "";
    }
    /* function limpiarValidacion() {    
        alertContainer.innerHTML = "";
        nivelEstudiosProfesor.classList.remove('is-invalid');
        tituloProfesor.classList.remove('is-valid');
        apellidoProfesor.classList.remove('is-invalid');
        dniProfesor.classList.remove('is-valid');
        emailProfesor.classList.remove('is-invalid');
        codAreaProfesor.classList.remove('is-valid');
        telefonoProfesor.classList.remove('is-invalid');
        calleProfesor.classList.remove('is-valid');
        alturaDomicilioProfesor.classList.remove('is-invalid');
        pisoProfesor.classList.remove('is-valid');
        dptoProfesor.classList.remove('is-invalid');
    }
    function ocultarFormulario() {
        fomulario.style.display = "none";
        acciones.style.display = "flex";
        limpiarValidacion();
        if (editar) {        
            inputPatente.readOnly = false;
            editar = false;
        }
    } */
    function cancelar() {
        limpiarCampos();
        ocultarFormulario();
    }


    function maxLengthCheck(object){
        if (object.value.length > object.maxLength)
            object.value = object.value.slice(0, object.maxLength)
        }
});