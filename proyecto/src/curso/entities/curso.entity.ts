import Docente from "src/persona/entities/docente.entity";
import Horario from "./horario.entity";
import Alumno from "src/persona/entities/alumno.entity";
import { Examen } from "src/formulario/entities/examen.entity";
import Clase from "./clase.entity";

export class Curso {
    private nombre: string;
    private descripcion: string;
    private profesor: Docente;
    private cupoMaximoAlumnos: number;
    private asistenciaMinima: number;
    private horarios: Horario[];
    private cargaHorariaTotal: number;
    private fechaInicio: Date;
    private fechaFin: Date;
    private horasDictadas: number;
    private alumnos: Alumno[];
    private examenes: Examen[];
    private clasesDictadas: Clase[];
    

}