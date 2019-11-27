import Docente from "src/persona/entities/docente.entity";
import Horario from "./horario.entity";
import Alumno from "src/persona/entities/alumno.entity";
import { Examen } from "src/formulario/entities/examen.entity";
import Clase from "./clase.entity";

export class Curso {
    private idCurso: number;
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

    public constructor(nombre: string, profesor: Docente, fechaInicio: Date, horarios: Horario[], fechaFin?: Date, descripcion?: string, cupoMaximoAlumnos?: number, asistenciaMinima?: number, cargaHorariaTotal?: number) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.fechaInicio = fechaInicio;
        this.horarios = horarios;
        if (fechaFin) {
            this.fechaFin = fechaFin;
            if (!cargaHorariaTotal) {
                this.cargaHorariaTotal = this.calcularCargaHoraria(this.horarios, this.fechaInicio, this.fechaFin);
            }
        } else {
            this.fechaFin = null;
        }

        if (cargaHorariaTotal) {
            this.cargaHorariaTotal = cargaHorariaTotal;
            if (!fechaFin) {
                this.cargaHorariaTotal = this.calcularCargaHoraria(this.horarios, this.fechaInicio, null, this.cargaHorariaTotal);
            }
        } else {
            this.cargaHorariaTotal = null;
        }

        if (descripcion) {
            this.descripcion = descripcion;
        } else {
            this.descripcion = '';
        }

        if (cupoMaximoAlumnos) {
            this.cupoMaximoAlumnos = cupoMaximoAlumnos;
        } else {
            this.cupoMaximoAlumnos = null;
        }

        if (asistenciaMinima) {
            this.asistenciaMinima = asistenciaMinima;
        } else {
            this.asistenciaMinima = 1;
        }

    }

    public getIdCurso(): number {
        return this.idCurso;
    }
    public setIdCurso(idCurso: number): void {
        this.idCurso = idCurso;
    }

    public getHorasDictadas(): number {
        return this.horasDictadas;
    }

    public setHorasDictadas(horas: number): void {
        this.horasDictadas = horas;
    }

    public setCargaHorariaTotal(cargaHoraria: number): void {
        this.cargaHorariaTotal = cargaHoraria;
    }

    public agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public agregarExamen(examen: Examen): void {
        this.examenes.push(examen);
    }

    public agregarClaseDictada(clase: Clase): void {
        this.clasesDictadas.push(clase);
    }

    public calcularCargaHoraria(horarios: Horario[], fechaInicio: Date, fechaFin?: Date, cargaHoraria?: number): number {
        return null;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }
    public getProfesor(): Docente {
        return this.profesor;
    }
    public getCupoMaximoAlumnos(): number {
        return this.cupoMaximoAlumnos;
    }
    public getAsistenciaMinima(): number {
        return this.asistenciaMinima;
    }

}