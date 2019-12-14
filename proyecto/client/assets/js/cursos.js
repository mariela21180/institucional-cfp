document.addEventListener("DOMContentLoaded", function(event) {

    let tablaCursos = document.querySelector('#tablaCursos');

    cargarCursos();

    function cargarCursos() { 
        // Llamada ajax
        // Array de objetos Curso
        // id / nombre / descripcion / Horario[] {dia / hora inicio / hora fin}

        let cursos = getMock();
        let html="";

        cursos.forEach(curso => {
            html += getFilaCurso(curso);
        });
        tablaCursos.innerHTML = html;
        let btnsEliminar = document.querySelectorAll(".eliminarCurso");
        let btnsEditar = document.querySelectorAll(".editarCurso");
        btnsEditar.forEach(b => {b.addEventListener("click", editarCurso)});
        btnsEliminar.forEach(a => {a.addEventListener("click", eliminarCurso)});

    }

    function editarCurso(){
        let id = this.getAttribute("data-id");
        console.log('editando el curso con id ' + id);        
    }

    function eliminarCurso(){
        let id = this.getAttribute("data-id");
        console.log('eliminando el curso con id ' + id);        
    }

    function getFilaCurso(curso){
        return `
            <tr>
                <td>${curso.nombre}</td>
                <td>${getHorarios(curso.horarios)}</td>
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

    function getHorarios(horarios){
        let horarioCurso = "";
        horarios.forEach(horario => {
            horarioCurso+= horario.dia + ' de ' +horario.horaInicio + ' a ' + horario.horaFin + ' ';            
        });


        return horarioCurso;
    }


    function getMock (){
        return [
            {
                idCurso: 1,
                nombre: "Programacion Full Stack",
                descripcion: "Nest, Node js, MySQL, TypeORM",
                horarios: [
                    {
                        dia: "Lunes",
                        horaInicio: "19hs",
                        horaFin: "21hs"
                    },
                    {
                        dia: "Miercoles",
                        horaInicio: "19hs",
                        horaFin: "21hs"
                    }
                ]
            },
            {
                idCurso: 2,
                nombre: "Carpinteria",
                descripcion: "Sillas y mesas de calidad",
                horarios: [
                    {
                        dia: "Martes",
                        horaInicio: "19hs",
                        horaFin: "21hs"
                    },
                    {
                        dia: "Jueves",
                        horaInicio: "19hs",
                        horaFin: "21hs"
                    }
                ]
            }
        ]
    }




});