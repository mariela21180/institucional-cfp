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
    let checkboxDocumentacion = document.getElementById('adeudaDocumentacionCheckbox');
    let tblCursos = document.getElementById('tblCursos');
    let selectCurso = document.getElementById('selectCurso');
    let btnAgregarCurso = document.getElementById('btnAgregarCurso');
    let agregarCursoModal = document.getElementById('agregarCursoModal'); 
    //cuando llamo al boton del modal me tiene que agarrar id de los cursos del select 
    //comparo con el arreglo de cursos del alumno para ver si ya esta o no (recorro el arreglo)
    //si no existe ir a buscar el curso con datos compeltos al servidor
    //agregarlo al arreglo del curso alumnos
    //volver a cargar la tabla llamando a armarFilasTablaCursos();
    //cerrar modal
    let listaCursosAlumno = [];


    guardarAlumno.addEventListener('click', crearAlumno); //llama a la funcion (solo en el addEventListener)
    btnAgregarCurso.addEventListener('click', getCursosServidor);

    function crearAlumno() { 
        let alumno = armarAlumno();
        agregarAlumnoServidor(alumno);
    }    

    async function agregarAlumnoServidor(alumnodto){
        console.log(alumnodto);
        
        let result = await fetch ("/alumnos/guardar",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(alumnodto)})
        console.log(result);
        

        if(result.status != 404){
            //window.location.href = window.location.origin + '/alumnos.html';                     
            //let json = await result.json(); 
        }
        return alumnodto;
    }

    async function getCursosServidor(){
        let result = await fetch ("/cursos",{"method":"GET","headers":{"Content-Type":"application/json"}});
        let cursos = [];
        
        if(result.status != 404){
            cursos = await result.json();  
            console.log(cursos);
            
                                
            armarSelect(cursos);
            //armarFilaCursos(cursos);

            
        }
    }     

    function armarSelect(cursos){
        let html="";
        for (let i=0; i<cursos.length;i++){
            html += `<option value= ${cursos[i].nombre}>${cursos[i].nombre}</option>`;        
        }
        selectCurso.innerHTML = html;
    }

    function armarFilaTablaCursos(){ //despues de que me crear arreglo con cursos del alumno
        let html="";
        for (let i=0; i<listaCursosAlumno.length;i++){ //armar arreglo con cursos del select que me tome el id del curso seleccionado
            html += `
            <tr>
                <td>${listaCursosAlumno[i].nombre}</td>
                <td>Lunes,Miercoles,Viernes</td>
                <td>19 a 21</td>
                <td>
                    <div class="row align-items-center">
                        <div class="col-auto m-0 w-100">
                            <button type="button" data-id="${listaCursosAlumno[i].idCurso}" class="btn m-1 btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <button type="button" data-id="${listaCursosAlumno[i].idCurso}" class="btn m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </td>
            </tr>    
            `;        
        }
        selectCurso.innerHTML = html;
    }

    function armarAlumno() { 
        return {
            'nivelEstudioAlcanzado': nivelAlumno.value, 
            'adeudaDocumentacion': checkboxDocumentacion.checked,
            'nombre': nombreAlumno.value,
            'apellido': apellidoAlumno.value,
            'dni': parseInt(documentoAlumno.value),
            'eMail': eMailAlumno.value,
            'codArea': parseInt(codAreaAlumno.value),
            'nro': parseInt(telefonoAlumno.value),
            'calle': calleAlumno.value,
            'altura': parseInt(alturaDomicilioAlumno.value),
            'piso?': pisoAlumno.value,
            'dpto?': dptoAlumno.value,
            'cursos': [
                { 
                'idCurso': 1 //ver como agregar
                }  
            ]          
        }
    }
 
}) 
