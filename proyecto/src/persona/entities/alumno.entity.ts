import Persona from "./persona.entity";
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from "typeorm";

@Entity('alumno')
export default class Alumno {
    @PrimaryColumn('int')
    private idAlumno: number;    

    @JoinColumn({name: "idAlumno"})
    @OneToOne(type => Persona, datos => datos.getIdPersona, {onDelete: 'CASCADE', primary: true})
    private datos: Persona;

    @Column('varchar')
    private nivelEstudioAlcanzado: string;

    @Column('boolean')
    private adeudaDocumentacion: boolean;


    public constructor(idAlumno: number, nivelEstudioAlcanzado: string, adeudaDocumentacion: boolean) {
                this.idAlumno = idAlumno;
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