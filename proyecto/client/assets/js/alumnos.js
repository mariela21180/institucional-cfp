document.addEventListener("DOMContentLoaded", function(event) {

    let tablaAlumnos = document.getElementById('tablaAlumnos');

    cargarAlumnos();

    function cargarAlumnos() { 
        // Llamada ajax
        // Array de objetos alumnos

        let alumnos = getAlumnosServidor().then((a) => {
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
        
        if(result.status != 404){
            let json = await result.json();                      
        }
        return result; //es asi??
    }

    // function verDetalleAlumno(){
    //     let id = this.getAttribute("data-id");
    //     console.log('ver detalles de alumno con id ' + id);        
    // }

    // function editarAlumno(){
    //     let id = this.getAttribute("data-id");
    //     console.log('editando el alumno con id ' + id);        
    // }

    // function eliminarAlumno(){
    //     let id = this.getAttribute("data-id");
    //     console.log('eliminando el alumno con id ' + id);        
    // }

    function getFilaAlumno(alumno){
        return `
        <tr>
            <td>${alumno.nombre + " " + alumno.apellido}</td>
            <td>${alumno.nro}</td> //tiene que ser mismo nombre de variable que dto?
            <td>${alumno.dni}</td>
            <th class="col w-25">${alumno.eMail}</th>
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