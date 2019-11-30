import Persona from "./persona.entity";
import { Entity, PrimaryColumn, JoinColumn, OneToOne, Column } from "typeorm";

@Entity('docente')
export default class Docente {
    @PrimaryColumn()
    private idDocente: number;

    @JoinColumn({name: "idDocente"})
    @OneToOne(type => Persona, datos => datos.getIdPersona)
    private datos: Persona;

    @Column()
    private nivelEstudioAlcanzado: string;

    @Column()
    private titulo: string;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, titulo: string) {
        this.datos = datos;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.titulo = titulo;
        this.idDocente = datos.getIdPersona();
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