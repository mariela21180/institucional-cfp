import Persona from "./persona.entity";
import { Entity, PrimaryColumn } from "typeorm";

@Entity('docente')
export default class Docente {
    @PrimaryColumn()
    idDocente: number;

    private datos: Persona;
    private nivelEstudioAlcanzado: string;
    private titulo: string;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, titulo: string) {
        this.datos = datos;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.titulo = titulo;
        // this.setIdDocente(datos.getIdPersona());
        // this.idDocente = this.getIdDocente();
    }

    public setIdDocente(id: number) {
        this.idDocente = id;
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