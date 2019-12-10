/*Cuando tocas guardar llenar el formulario en la tabla
y refrescar la tabla y cambiar la paguina al home de formulario*/
document.addEventListener("DOMContentLoaded", function (event) {
    
    let tblFormulario = document.querySelector('#tblFormulario');

    cargarCursos();

    function cargarCursos() {


        let cursos = mock();
        let html = "";

        cursos.forEach(curso => {
            html += agrregarTabla(curso);
        });
        tblFormulario.innerHTML = html;
        let btnsEliminar = document.querySelectorAll(".eliminarCurso");
        let btnsEditar = document.querySelectorAll(".editarCurso");
        btnsEditar.forEach(b => {b.addEventListener("click", editarCurso) });
        btnsEliminar.forEach(a => {a.addEventListener("click", eliminarCurso) });

    }


    function mock() {
        return [
            {
                idCurso: 1,
                nombreFormulario: 'Curso',
                descripcion: 'curso programador full stack'
            },
            {
                idCurso: 2,
                nombreFormulario: 'Alumnos',
                descripcion: 'Inscrpción de Alumnos'
            },
            {
                idCurso: 3,
                nombreFormulario: 'Asistencias',
                descripcion: 'Cómputo de asistencias'
            }
        ];

    }

    console.log(mock.values[1]);

    let campos = [];

    function agrregarTabla(curso) {
        return `
                <tr>
                <td>${curso.nombreFormulario}</td>
                <td>${curso.descripcion}</td>
                <td>
                <div class="row align-items-center">
                    <div class="col-auto m-0 w-100">
                        <button type="button" data-id="${curso.idCurso}" class="btn editarCurso m-1 btn-primary">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                        <button type="button" data-id="${curso.idCurso}" class="btn eliminarCurso m-1 btn-danger">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    </div>
                </div>
                </td>
            </tr>
            `;
    }

    function editarCurso() {
        let id = this.getAttribute("data-id");
        console.log('editando el curso con id ' + id);
    }

    function eliminarCurso() {
        let id = this.getAttribute("data-id");
        console.log('eliminando el curso con id ' + id);
    }
});