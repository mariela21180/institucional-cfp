import Persona from "./persona.entity";
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from "typeorm";

@Entity('alumno')
export default class Alumno {
    @PrimaryColumn('int')
    private idAlumno: number;    

    @JoinColumn({name: "idAlumno"})
    @OneToOne(type => Persona, datos => datos.getIdPersona)
    private datos: Persona;

    @Column('varchar')
    private nivelEstudioAlcanzado: string;

    @Column('bit')
    private adeudaDocumentacion: boolean;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, adeudaDocumentacion: boolean) {
        this.datos = datos;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.adeudaDocumentacion = adeudaDocumentacion;
        this.idAlumno = datos.getIdPersona();
    }

    public setIdAlumno(id: number) {
        this.idAlumno = id;
    }

    public getIdAlumno():number{
        return this.idAlumno;
    }

    public getDatos(): Persona {
        return this.datos;
    }

    public getNivelEstudioAlcanzado(): string {
        return this.nivelEstudioAlcanzado;
    }

    public getAdeudaDocumentacion(): boolean {
        return this.adeudaDocumentacion;
    }

    public cambiarEstadoDocumentacion(): void {
        if(this.adeudaDocumentacion) {
            this.adeudaDocumentacion = false;
        }
        else {
            this.adeudaDocumentacion = true;
        }
    }


}