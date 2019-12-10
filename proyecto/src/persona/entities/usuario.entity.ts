import Persona from "./persona.entity";
import { Entity, PrimaryColumn, JoinColumn, OneToOne, Column } from "typeorm";

@Entity('usuario')
export default class Usuario {
    @PrimaryColumn('int')
    private idUsuario: number;

    @Column('varchar', {unique: true})
    private usuario: string;

    @Column('varchar')
    private password: string;

    @Column('int', {default: 1})
    private nivelAcceso: number;

    @JoinColumn({name: "idUsuario"})
    @OneToOne(type => Persona, persona => persona.getIdPersona)
    private persona: Persona;

    public constructor(usuario: string, password: string, idUsuario: number, nivelAcceso?: number) {
              
                this.usuario = usuario;
                this.password = password;
                this.idUsuario = idUsuario;
                if (nivelAcceso == undefined) {
                    this.nivelAcceso = 1;
                }
                else {
                    this.nivelAcceso = nivelAcceso;
                }
                     
    }

    public setIdUsuario(id: number) {
        this.idUsuario = id;
    }

    public getIdUsuario(): number {
        return this.idUsuario;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public setUsuario(usuario: string) {
        this.usuario = usuario;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public getNivelAcceso(): number {
        return this.nivelAcceso;
    }

    public setNivelAcceso(nivel: number) {
        this.nivelAcceso = nivel;
    }
}