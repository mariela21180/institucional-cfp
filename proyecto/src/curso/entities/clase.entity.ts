import Curso from "./curso.entity";
import Alumno from "src/persona/entities/alumno.entity";
import Material from "./material.entity";
import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, JoinColumn, ManyToOne, OneToMany, JoinTable } from "typeorm";

@Entity('clase')
export default class Clase {
    @PrimaryGeneratedColumn()
    private idClase: number;

    @Column('int')
    private idCurso: number;

    @JoinColumn({ name: 'idCurso' })
    @ManyToOne(type => Curso, curso => curso.getIdCurso)
    private curso: Curso;

    @Column('datetime')
    private inicio: Date;

    @Column('datetime')
    private fin: Date;


    @ManyToMany(type => Alumno, asistencia => asistencia.getIdAlumno, { nullable: true })
    @JoinTable({
        name: 'asistencia',
        joinColumn: {
            name: "idClase",
            referencedColumnName: "idClase"
        },
        inverseJoinColumn: {
            name: "idAlumno",
            referencedColumnName: "idAlumno"
        }
    })
    private asistencia: Alumno[];

    @OneToMany(type => Material, material => material.getIdMaterial, { onDelete: 'NO ACTION', nullable: true })
    private material: Material[];

    

    public constructor(idCurso: number, inicio: Date, fin: Date) { 
        this.idCurso = idCurso;
        this.inicio = inicio;
        this.fin = fin;
    }

    public getIdCurso(): number {
        return this.idCurso;
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