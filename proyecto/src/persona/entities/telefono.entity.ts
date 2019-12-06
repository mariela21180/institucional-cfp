import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import Persona from "./persona.entity";

@Entity('telefono')
export default class Telefono {
    @PrimaryGeneratedColumn()
    private idTelefono: number;

    @Column('int')
    private codArea: number;

    @Column('int')
    private nro: number;

    @Column('int')
    idPersona: number;

    @JoinColumn({name: 'idPersona'})
    @ManyToOne(type => Persona, titular => titular.getIdPersona, { onDelete: 'CASCADE'})
    private titular: Persona;

    public constructor(codArea:number, nro:number, idPersona: number) {
        this.codArea = codArea;
        this.nro = nro;
        this.idPersona = idPersona;
        // this.titular = null;
    }

    public setIdtelefono(id: number) {
        this.idTelefono = id;
    }

    public getIdTelefono(): number{
        return this.idTelefono;
    }

    public getCodArea(): number {
        return this.codArea;
    }
    public setCodArea(codArea: number) {
        this.codArea = codArea;
    }

    public getNro():number {
        return this.nro;
    }
    public setNro(nro: number) {
        this.nro = nro;
    }

    public getTitular(): Persona {
        return this.titular;
    }

    public setTitular(titular: Persona): void {
        this.titular = titular;
    }
}