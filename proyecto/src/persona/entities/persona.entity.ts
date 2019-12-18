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

    @JoinColumn({name: "idTelefono"})
    @OneToOne(type => Telefono, telefono => telefono.getIdTelefono, { onDelete: 'CASCADE', eager: true})
    private telefono: Telefono;
    
    @JoinColumn({name: "idDomicilio"})
    @OneToOne(type => Domicilio, domicilio => domicilio.getIdDomicilio, { onDelete: 'CASCADE', eager: true})
    private domicilio: Domicilio;
    
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

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public getApellido():string {
        return this.apellido;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }
    public getDni():number {
        return this.dni;
    }

    public setEMail(eMail: string): void {
        this.eMail = eMail;
    }
    public getEMail():string {
        return this.eMail;
    }

    public getTelefono(): Telefono {
        return this.telefono;
    }

    public getDomicilio(): Domicilio {
        return this.domicilio;
    }
}