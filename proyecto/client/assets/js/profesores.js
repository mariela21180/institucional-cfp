'use strict';
document.addEventListener("DOMContentLoaded", function(event) {

    let tablaProfesores = document.getElementById('tblProfesores');

    cargarProfesores();

    function cargarProfesores() { 
        // Llamada ajax
        // Array de objetos profesores

            getProfesoresServidor().then((profesores) => {
            let html="";

            profesores.forEach(profesor => {
                html += getFilaProfesor(profesor);
            });
            tablaProfesores.innerHTML = html;

            // let btnsVer = document.querySelectorAll(".verProfesor");
             let btnsEliminar = document.querySelectorAll(".eliminarProfesor");
            // let btnsEditar = document.querySelectorAll(".editarProfesor");
            // btnsVer.forEach(c => {c.addEventListener("click", verDetalleProfesor});
            // btnsEditar.forEach(b => {b.addEventListener("click", editarProfesor)});
            btnsEliminar.forEach(a => {a.addEventListener("click", eliminarProfesor)});
        });
        
    }

    async function getProfesoresServidor(){
        let result = await fetch ("/docentes",{"method":"GET","headers":{"Content-Type":"application/json"}})
        let json = [];
        if(result.status != 404){
            json = await result.json();                      
        }
        console.log(json);
        return json; //es asi??        
    }

    // function verDetalleProfesor(){
    //     let id = this.getAttribute("data-id");
    //     console.log('ver detalles de Profesor con id ' + id);        
    // }

    // function editarProfesor(){ //va en js agregarProfesores?
    //     let id = this.getAttribute("data-id");
    //     console.log('editando el Profesor con id ' + id);        
    // }

    async function eliminarProfesorServidor(personaId){
        
        let r = await fetch(`/personas/${personaId}`, { "method": "DELETE", "headers": { "Content-Type": "application/json" }});
        
        if (r.status != 404)
        cargarProfesores();
    }

    function eliminarProfesor() {
        let personaId = this.getAttribute("data-id");
        if (confirm("Está a punto de eliminar al Docente: "+personaId+"\n¿Desea continuar?")) {
            eliminarProfesorServidor(personaId);
        }
    }


    function getFilaProfesor(profesor){
        console.log(profesor);
        
        let telefono = "";
        if(profesor.datos.telefono != null){
            if(profesor.datos.telefono.codArea != null){
                telefono += profesor.datos.telefono.codArea;
            }
            if(profesor.datos.telefono.nro != null){
                telefono += " " + profesor.datos.telefono.nro;
            }
        }
        console.log(profesor.idDocente);
        
        return `
        <tr>
            <td>${profesor.datos.nombre + " " + profesor.datos.apellido}</td>
            <td>${telefono}</td>
            <td>${profesor.datos.dni}</td>
            <th class="col w-25">${profesor.datos.eMail}</th>
            <td>
                <div class="row align-items-center">
                    <div class="col-auto m-0 w-100">
                        <button type="button" data-id="${profesor.idDocente}" class="btn m-1 btn-success verProfesor"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button type="button" data-id="${profesor.idDocente}" class="btn m-1 btn-primary editarProfesor"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        <button type="button" data-id="${profesor.idDocente}" class="btn m-1 btn-danger eliminarProfesor"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            </td>
        </tr>            
        `;
    }
});