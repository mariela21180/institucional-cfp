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

    @Column('int', {nullable: false})
    private idTelefono: number;
    
    @JoinColumn({name: "idTelefono"})
    @OneToOne(type => Telefono, telefono => telefono.getIdTelefono, { onDelete: 'CASCADE', eager: true, nullable: true})
    private telefono: Telefono;

    @Column('int', {nullable: false})
    private idDomicilio: number;
    
    @JoinColumn({name: "idDomicilio"})
    @OneToOne(type => Domicilio, domicilio => domicilio.getIdDomicilio, { onDelete: 'CASCADE', eager: true, nullable: true})
    private domicilio: Domicilio;
    
    public constructor(nombre: string, apellido: string, dni: number, eMail: string, idDomicilio: number, idTelefono: number) { 
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.eMail = eMail;
        this.idDomicilio = idDomicilio;
        this.idTelefono = idTelefono;
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

    
    public setIdDomicilio(idDomicilio: number): void {
        this.idDomicilio = idDomicilio;
    }
    public getIdDomicilio():number {
        return this.idDomicilio;
    }
    
    public setIdTelefono(idTelefono: number): void {
        this.idTelefono = idTelefono;
    }
    public getIdTelefono():number {
        return this.idTelefono;
    }
}