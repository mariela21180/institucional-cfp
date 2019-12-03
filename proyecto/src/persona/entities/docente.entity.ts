import Persona from "./persona.entity";
import { Entity, PrimaryColumn, JoinColumn, OneToOne, Column } from "typeorm";

@Entity('docente')
export default class Docente {
    @PrimaryColumn('int')
    private idDocente: number;

    @JoinColumn({name: "idDocente"})
    @OneToOne(type => Persona, datos => datos.getIdPersona)
    private datos: Persona;

    @Column('varchar')
    private nivelEstudioAlcanzado: string;

    @Column('varchar')
    private titulo: string;


    public constructor(datos: Persona, nivelEstudioAlcanzado: string, titulo: string) {
        try {
            if (!datos) {
                throw new Error('Debe haber una Persona como parámetro.');
            } else {
                this.datos = datos;
                this.nivelEstudioAlcanzado = nivelEstudioAlcanzado;
                this.titulo = titulo;
                this.idDocente = datos.getIdPersona();
            }            
        } catch (error) {
            console.log(error.message);
        }
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