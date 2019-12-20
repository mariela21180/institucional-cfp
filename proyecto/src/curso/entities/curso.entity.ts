import Docente from "../../persona/entities/docente.entity";
import Alumno from "src/persona/entities/alumno.entity";
import Examen from "src/formulario/entities/examen.entity";
import Horario from "./horario.entity";
import Clase from "./clase.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, ManyToMany } from "typeorm";

@Entity('curso')
export default class Curso {
    @PrimaryGeneratedColumn()
    private idCurso: number;
    
    @Column('varchar')
    private nombre: string;

    @Column({type: 'varchar', length: 150, nullable: true})
    private descripcion: string;

    @Column('int', {nullable: true})
    private idDocente: number;

    @JoinColumn({name: "idDocente"})
    @OneToOne(type => Docente, profesor => profesor.getIdDocente, { nullable: true, onDelete: "SET NULL"})
    private profesor: Docente;

    @Column({type: 'int', nullable: true})
    private cupoMaximoAlumnos: number;

    @Column({type: 'float', default: 100})
    private asistenciaMinima: number;

    @OneToMany(type => Horario, horarios => horarios.getIdHorario)
    private horarios: Horario[];

    @Column('float')
    private cargaHorariaTotal: number;

    @Column('date')
    private fechaInicio: Date;

    @Column({type: 'date', nullable: true})
    private fechaFin: Date;

    @ManyToMany(type => Alumno, alumno => alumno.getIdAlumno)
    private alumnos: Alumno[];

    @OneToMany(type => Examen, examenes => examenes.getIdExamen)
    private examenes: Examen[];

    @OneToMany(type => Clase, clases => clases.getIdClase)
    private clases: Clase[];

    public constructor(nombre: string, idDocente: number, fechaInicio: Date, cargaHorariaTotal: number, fechaFin?: Date, descripcion?: string, cupoMaximoAlumnos?: number, asistenciaMinima?: number) {
        this.nombre = nombre;
        this.idDocente = idDocente;
        this.fechaInicio = fechaInicio;
        this.cargaHorariaTotal = cargaHorariaTotal;

        if (fechaFin) {
            this.fechaFin = fechaFin;
        } else {
            this.fechaFin = null;
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
            this.asistenciaMinima = 100;
        }
    }

    public getIdCurso(): number {
        return this.idCurso;
    }
    public setIdCurso(idCurso: number): void {
        this.idCurso = idCurso;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getIdDocente(): number {
        return this.idDocente;
    }
    public setIdDocente(idDocente: number): void {
        this.idDocente = idDocente;
    }

    public getCupoMaximoAlumnos(): number {
        return this.cupoMaximoAlumnos;
    }    
    public setCupoMaximoAlumnos(cupoMaximoAlumnos: number): void {
        this.cupoMaximoAlumnos = cupoMaximoAlumnos;
    }

    public getAsistenciaMinima(): number {
        return this.asistenciaMinima;
    }    
    public setAsistenciaMinima(asistenciaMinima: number): void {
        this.asistenciaMinima = asistenciaMinima;
    }
    
    public getCargaHorariaTotal(): number {
        return this.cargaHorariaTotal;
    }
    public setCargaHorariaTotal(cargaHoraria: number): void {
        this.cargaHorariaTotal = cargaHoraria;
    }
    
    public getFechaInicio(): Date {
        return this.fechaInicio;
    }    
    public setFechaInicio(fecha: Date): void {
        this.fechaInicio = fecha;
    }
    
    public getFechaFin(): Date {
        return this.fechaFin;
    }    
    public setFechaFin(fecha: Date): void {
        this.fechaFin = fecha;
    }

    public agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    
    public agregarExamen(examen: Examen): void {
        this.examenes.push(examen);
    }
    
    public agregarClase(clase: Clase): void {
        this.clases.push(clase);
    }
    
}