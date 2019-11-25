import Domicilio from "./domicilio.entity";
import Telefono from "./telefono.entity";

export default class Persona {
    private idPersona: number;
    private nombre: string;
    private apellido: string;
    private dni: number;
    private domicilio: Domicilio;
    private eMail: string;
    private telefono: Telefono[];
    
    public constructor(nombre: string, apellido: string, dni: number, domicilio: Domicilio, eMail: string, telefono?: Telefono[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
        this.eMail = eMail;
        if (telefono) {
            this.telefono = telefono;
        }
        else {
        this.telefono = null;
        };
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

    public getApellido():string {
        return this.apellido;
    }

    public getDni():number {
        return this.dni;
    }

    public getDomicilio():Domicilio{
        return this.domicilio;
    }

    public getEMail():string {
        return this.eMail;
    }

    public setTelefono(telefono: Telefono[]) {
        this.telefono = telefono;
    }

    public getTelefono(): Telefono[] {
        return this.telefono;
    }

}