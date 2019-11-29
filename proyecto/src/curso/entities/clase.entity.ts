import Curso from "./curso.entity";
import Alumno from "src/persona/entities/alumno.entity";
import Material from "./material.entity";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clase')
export default class Clase {
    @PrimaryGeneratedColumn()
    idClase: number;
    
    private curso: Curso;
    private inicio: Date;
    private fin: Date;
    private asistencia: Alumno[]; 
    private material: Material[];
    

    public constructor (curso: Curso, inicio: Date, fin: Date, asistencia?: Alumno[], material?: Material[]) {
        this.curso = curso;
        this.inicio = inicio;
        this.fin = fin;
        if(asistencia) {
            this.asistencia = asistencia;
        } else {
            this.asistencia = [];
        }

        if(material) {
            this.material = material;
        } else {
            this.material = [];
        }
    }

    public getIdClase(): number {
        return this.idClase;
    }

    public setIdClase(idClase: number): void {
        this.idClase = idClase;
    }

    public getCurso(): Curso {
        return this.curso;
    }
    
    public getInicio(): Date {
        return this.inicio;
    }

    public setInicio(fecha: Date): void {
        this.inicio = fecha;
    }

    public getFin(): Date {
        return this.fin;
    }

    public setFin(fecha: Date): void {
        this.fin = fecha;
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