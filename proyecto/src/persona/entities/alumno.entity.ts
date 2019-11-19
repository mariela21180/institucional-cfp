import Persona from "./persona.entity";

export default class Alumno {
    private datos: Persona;
    private nivelEstudioAlcanzado: string;
    private adeudaDocumentacion: boolean;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, adeudaDocumentacion: boolean) {
        this.datos = datos;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.adeudaDocumentacion = adeudaDocumentacion;
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