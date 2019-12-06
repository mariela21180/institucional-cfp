import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('domicilio')
export default class Domicilio {
    @PrimaryGeneratedColumn()
    private idDomicilio: number;

    @Column('varchar')
    private calle: string;

    @Column('int')
    private altura: number;

    @Column('varchar', {nullable: true})
    private piso: string;

    @Column('varchar', {nullable: true})
    private dpto: string;

    public constructor(calle: string, altura: number, piso?: string, dpto?: string) {
        this.calle = calle;
        this.altura = altura;
        if (piso) {
            this.piso = piso
        }
        else this.piso = null;

        if (dpto) {
            this.dpto = dpto
        }
        else this.dpto = null;
    }

    public setIdDomicilio(dom: number) {
        this.idDomicilio = dom;
    }

    public getIdDomicilio(): number {
        return this.idDomicilio;
    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setAltura(altura: number): void {
        this.altura = altura;
    }

    public setPiso(piso: string): void {
        this.piso = piso;
    }

    public getPiso(): string {
        return this.piso;
    }

    public setDpto(dpto: string): void {
        this.dpto = dpto;
    }

    public getDpto(): string {
        return this.dpto;
    }

    
}