import { Curso } from "./curso.entity";

export default class Horario {
    private curso: Curso;
    private dia: String;
    private horaInicio: Date; // ver si está bien poner tipo Date
    private horaFin: Date; // ver si está bien poner tipo Date

    public constructor (curso: Curso, dia: String, horaInicio: Date, horaFin: Date) {
        this.curso = curso;
        this.dia = dia;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    public getCurso(): Curso {
        return this.curso;
    }

    public getDia(): String {
        return this.dia;
    }

    public getHoraInicio(): Date {
        return this.horaInicio;
    }

    public getHoraFin(): Date {
        return this.horaFin;
    }

    public setCurso(curso: Curso): void {
        this.curso = curso;
    }

    public setDia(dia: string): void {
        this.dia = dia;
    }

    public setHoraInicio(hora: Date): void {
        this.horaInicio = hora;
    }

    public setHoraFin(hora: Date): void {
        this.horaFin = hora;
    }
 
 }