import Persona from "./persona.entity";
import { Entity, PrimaryColumn } from "typeorm";

@Entity('alumno')
export default class Alumno {
    @PrimaryColumn()    
    idAlumno: number;
    
    private datos: Persona;
    private nivelEstudioAlcanzado: string;
    private adeudaDocumentacion: boolean;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, adeudaDocumentacion: boolean) {
        this.datos = datos;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.adeudaDocumentacion = adeudaDocumentacion;
        // this.setIdAlumno(datos.getIdPersona());
        // this.idAlumno = this.getIdAlumno();
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