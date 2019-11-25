import { Curso } from "./curso.entity";

export default class Horario {
    private idHorario: number;
    private curso: Curso;
    private dia: String;
    private horaInicio: String; 
    private horaFin: String; 

    public constructor (curso: Curso, dia: String, horaInicio: String, horaFin: String) {
        this.curso = curso;
        this.dia = dia;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    public getIdHorario(): number {
        return this.idHorario;
    }
    public setIdHorario(idHorario: number): void {
        this.idHorario = idHorario;
    }

    public getCurso(): Curso {
        return this.curso;
    }

    public getDia(): String {
        return this.dia;
    }

    public getHoraInicio(): String {
        return this.horaInicio;
    }

    public getHoraFin(): String {
        return this.horaFin;
    }

    public setCurso(curso: Curso): void {
        this.curso = curso;
    }

    public setDia(dia: String): void {
        this.dia = dia;
    }

    public setHoraInicio(hora: String): void {
        this.horaInicio = hora;
    }

    public setHoraFin(hora: String): void {
        this.horaFin = hora;
    }
 
 }