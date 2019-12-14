import Curso from "./curso.entity";
import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, ManyToOne } from "typeorm";

@Entity('horario')
export default class Horario {
    @PrimaryGeneratedColumn()
    private idHorario: number;
    
    @Column('varchar', {length: 45})
    private dia: String;

    @Column('varchar', {length: 45})
    private horaInicio: String; 

    @Column('varchar', {length: 45})
    private horaFin: String; 

    @Column('int')
    private idCurso: number;

    @JoinColumn({name: 'idCurso'})
    @ManyToOne(type => Curso, curso => curso.getIdCurso)
    private curso: Curso;


    public constructor (idCurso: number, dia: String, horaInicio: String, horaFin: String) {
        this.idCurso = idCurso;
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

    public getIdCurso(): number {
        return this.idCurso;
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