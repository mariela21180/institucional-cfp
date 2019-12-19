'use strict';
document.addEventListener("DOMContentLoaded", function(event) {

    let tablaAlumnos = document.getElementById('tblAlumnos');

    cargarAlumnos();

    function cargarAlumnos() { 
        // Llamada ajax
        // Array de objetos alumnos

            getAlumnosServidor().then((alumnos) => {
            let html="";

            alumnos.forEach(alumno => {
                html += getFilaAlumno(alumno);
            });
            tablaAlumnos.innerHTML = html;

            let btnsVer = document.querySelectorAll(".verAlumno");
            let btnsEliminar = document.querySelectorAll(".eliminarAlumno");
            let btnsEditar = document.querySelectorAll(".editarAlumno");
            btnsVer.forEach(c => {c.addEventListener("click", verDetalleAlumno)});
            btnsEditar.forEach(b => {b.addEventListener("click", editarAlumno)});
            btnsEliminar.forEach(a => {a.addEventListener("click", eliminarAlumno)});
        });
        
    }

    async function getAlumnosServidor(){
        let result = await fetch ("/alumnos",{"method":"GET","headers":{"Content-Type":"application/json"}})
        let json = [];
        if(result.status != 404){
            json = await result.json();                      
        }
        console.log(json);
        return json; //es asi??        
    }

    function verDetalleAlumno(){
        let id = this.getAttribute("data-id");
        console.log('ver detalles de alumno con id ' + id);        
    }

    function editarAlumno(){ //va en js agregarAlumnos?
        let id = this.getAttribute("data-id");
        console.log('editando el alumno con id ' + id);        
    }
    async function eliminarAlumnoServidor(alumnoId){
        
        let r = await fetch(`/alumnos/${alumnoId}`, { "method": "DELETE", "headers": { "Content-Type": "application/json" }});
        
        if (r.status != 404)
        cargarAlumnos();
    }

    function eliminarAlumno() {
        let alumnoId = this.getAttribute("data-id");
        if (confirm("Está a punto de eliminar a la Persona: "+alumnoId+"\n¿Desea continuar?")) {
            eliminarAlumnoServidor(alumnoId);
        }
    }

   

    function getFilaAlumno(alumno){
        console.log(alumno);
        
        let telefono = "";
        if(alumno.datos.telefono != null){
            if(alumno.datos.telefono.codArea != null){
                telefono += alumno.datos.telefono.codArea;
            }
            if(alumno.datos.telefono.nro != null){
                telefono += " " + alumno.datos.telefono.nro;
            }
        }

        return `
        <tr>
            <td>${alumno.datos.nombre + " " + alumno.datos.apellido}</td>
            <td>${telefono}</td>
            <td>${alumno.datos.dni}</td>
            <th class="col w-25">${alumno.datos.eMail}</th>
            <td>
                <div class="row align-items-center">
                    <div class="col-auto m-0 w-100">
                        <button type="button" data-id="${alumno.idAlumno}" class="btn m-1 btn-success verAlumno"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button type="button" data-id="${alumno.idAlumno}" class="btn m-1 btn-primary editarAlumno"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        <button type="button" data-id="${alumno.idAlumno}" class="btn m-1 btn-danger eliminarAlumno"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            </td>
        </tr>            
        `;
    }
});