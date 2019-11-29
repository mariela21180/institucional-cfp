import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import Persona from "./persona.entity";

@Entity('telefono')
export default class Telefono {
    @PrimaryGeneratedColumn()
    private idTelefono: number;

    @Column()
    private codArea: number;

    @Column()
    private nro: number;

    @Column()
    idPersona: number;

    @JoinColumn({name: 'idPersona'})
    @ManyToOne(type => Persona, titular => titular.getIdPersona)
    private titular: Persona;

    public constructor(codArea:number, nro:number, titular: Persona) {
        this.codArea = codArea;
        this.nro = nro;
        this.titular = titular;
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

    public getNro():number {
        return this.nro;
    }

    public getTitular(): Persona {
        return this.titular;
    }

    public setTitular(titular: Persona): void {
        this.titular = titular;
    }
}