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

    public constructor(usuario: string, password: string, persona: Persona, nivelAcceso?: number) {
        try {
            if (!persona) {
                throw new Error('Debe haber una Persona como parámetro.');
            } else {
                this.persona = persona;
                this.usuario = usuario;
                this.password = password;
                this.idUsuario = persona.getIdPersona();
                if (nivelAcceso == undefined) {
                    this.nivelAcceso = 1;
                }
                else {
                    this.nivelAcceso = nivelAcceso;
                }
            }            
        } catch (error) {
            console.log(error.message);
        }
    }

    public setIdUsuario(id: number) {
        this.idUsuario = id;
    }

    public getIdUsuario(): number {
        return this.idUsuario;
    }

    public getPersona(): Persona {
        return this.persona;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public getPassword(): string {
        return this.password;
    }

    public getNivelAcceso(): number {
        return this.nivelAcceso;
    }
}