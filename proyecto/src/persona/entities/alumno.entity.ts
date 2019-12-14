import Persona from "./persona.entity";
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne, ManyToMany, JoinTable } from "typeorm";
import Clase from "src/curso/entities/clase.entity";
import Curso from "src/curso/entities/curso.entity";

@Entity('alumno')
export default class Alumno {
    @PrimaryColumn('int')
    private idAlumno: number;    

    @JoinColumn({name: "idAlumno"})
    @OneToOne(type => Persona, datos => datos.getIdPersona, {onDelete: 'CASCADE', primary: true, eager: true, cascade: true})
    private datos: Persona;

    @Column('varchar')
    private nivelEstudioAlcanzado: string;

    @Column('boolean')
    private adeudaDocumentacion: boolean;

    @ManyToMany(type => Clase, clase => clase.getIdClase)
    private clases: Clase[]; // hacer metodo getClases()??

    @ManyToMany(type => Curso, curso => curso.getIdCurso)
    @JoinTable({name: 'alumno_curso'})
    private cursos: Curso[];

    public constructor(idPersona: number, nivelEstudioAlcanzado: string, adeudaDocumentacion: boolean) {
                this.idAlumno = idPersona;
                this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
                this.adeudaDocumentacion = adeudaDocumentacion;
    }

    public setIdAlumno(id: number) {
        this.idAlumno = id;
    }

    public getIdAlumno():number{
        return this.idAlumno;
    }

    public setNivelEstudioAlcanzado(nivel: string)  {
        this.nivelEstudioAlcanzado = nivel;
    }

    public getNivelEstudioAlcanzado(): string  {
        return this.nivelEstudioAlcanzado;
    }

    public getAdeudaDocumentacion(): boolean {
        return this.adeudaDocumentacion;
    }

    public setAdeudaDocumentacion(estado: boolean): void {
        this.adeudaDocumentacion = estado;
    }
}