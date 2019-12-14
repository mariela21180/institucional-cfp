import Persona from "./persona.entity";
import { Entity, PrimaryColumn, JoinColumn, OneToOne, Column } from "typeorm";

@Entity('docente')
export default class Docente {
    @PrimaryColumn('int')
    private idDocente: number;

    @JoinColumn({ name: "idDocente" })
    @OneToOne(type => Persona, datos => datos.getIdPersona, {onDelete: 'CASCADE', primary: true, eager: true, cascade: true})
    private datos: Persona;

    @Column('varchar')
    private nivelEstudioAlcanzado: string;

    @Column('varchar')
    private titulo: string;

    public constructor(idDocente: number, nivelEstudioAlcanzado: string, titulo: string) {
        this.idDocente = idDocente;
        this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
        this.titulo = titulo;
    }

    public setIdDocente(id: number) {
        this.idDocente = id;
    }

    public getIdDocente(): number {
        return this.idDocente;
    }


    public getDatos(): Persona {
        return this.datos;
    }

    public getNivelEstudioAlcanzado(): string {
        return this.nivelEstudioAlcanzado;
    }

    public setNivelEstudioAlcanzado(nivel: string) {
        this.nivelEstudioAlcanzado = nivel;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }

}