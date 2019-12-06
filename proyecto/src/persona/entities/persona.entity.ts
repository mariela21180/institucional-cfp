import Domicilio from "./domicilio.entity";
import Telefono from "./telefono.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany } from "typeorm";

@Entity('persona')
export default class Persona {
    @PrimaryGeneratedColumn()
    private idPersona: number;

    @Column('varchar')
    private nombre: string;

    @Column('varchar')
    private apellido: string;

    @Column('int')
    private dni: number;

    @Column('varchar')
    private eMail: string;
    
    public constructor(nombre: string, apellido: string, dni: number, eMail: string) { 
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.eMail = eMail;
    }

    public setIdPersona(id: number) {
        this.idPersona = id;
    }

    public getIdPersona():number{
        return this.idPersona;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido():string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni():number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getEMail():string {
        return this.eMail;
    }

    public setEMail(eMail: string): void {
        this.eMail = eMail;
    }

}