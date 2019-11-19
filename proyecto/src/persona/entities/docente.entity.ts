import Persona from "./persona.entity";

export default class Docente {
    private idDocente: number;
    private datos: Persona;
    private nivelEstudioAlcanzado: string;
    private titulo: string;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, titulo: string) {
        this.datos = datos;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.titulo = titulo;
        this.idDocente = datos.getIdPersona();
    }

    public getIdDocente():number{
        return this.idDocente;
    }


    public getDatos(): Persona {
        return this.datos;
    }

    public getNivelEstudioAlcanzado(): string {
        return this.nivelEstudioAlcanzado;
    }

    public getTitulo(): string {
        return this.titulo;
    }


}