import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Persona from "./persona.entity";

@Entity('telefono')
export default class Telefono {
    @PrimaryGeneratedColumn()
    private idTelefono: number;

    @Column('int')
    private codArea: number;

    @Column('int')
    private nro: number;

    @Column('int', {nullable: false})
    idPersona: number;

    @OneToOne(type => Persona, persona => persona.getIdPersona, { onDelete: 'CASCADE'})
    private persona: Persona;

    public constructor(codArea:number, nro:number, idPersona: number) {
        this.codArea = codArea;
        this.nro = nro;
        this.idPersona = idPersona;
    }

    public setIdtelefono(id: number) {
        this.idTelefono = id;
    }
    public getIdTelefono(): number{
        return this.idTelefono;
    }

    public setCodArea(codArea: number) {
        this.codArea = codArea;
    }
    public getCodArea(): number {
        return this.codArea;
    }

    public setNro(nro: number) {
        this.nro = nro;
    }
    public getNro():number {
        return this.nro;
    }

    public setTitular(persona: Persona): void {
        this.persona = persona;
    }
    public getTitular(): Persona {
        return this.persona;
    }
}