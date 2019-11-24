import { Curso } from "./curso.entity";
import Alumno from "src/persona/entities/alumno.entity";
import Material from "./material.entity";

export default class Clase {
    private curso: Curso;
    private fecha: Date;
    private horaInicio: Date; // ver si está bien poner tipo Date
    private horaFin: Date; // ver si está bien poner tipo Date
    private asistencia: Alumno[]; 
    private material: Material[];
    

    public constructor (curso: Curso, fecha: Date, horaInicio: Date, horaFin: Date) {
        this.curso = curso;
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    public getCurso(): Curso {
        return this.curso;
    }
    
    public getFecha(): Date {
        return this.fecha;
    }

    public getHoraInicio(): Date {
        return this.horaInicio
    }

    public getHoraFin(): Date {
        return this.horaFin
    }

    public getAsistencia(): Alumno[] {
        return this.asistencia;
    }

    public setAsistencia(asistencia: Alumno[]): void {
        this.asistencia = asistencia;
    }

    public getMaterial(): Material[] {
        return this.material;
    }

    public setMaterial(material: Material[]): void {
        this.material = material;
    }

}