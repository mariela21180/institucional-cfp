import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import Material from "./material.entity";

@Entity('archivo')
export default class Archivo {
    @PrimaryGeneratedColumn()
    private idArchivo: number;

    @Column('varchar', {length: 100})
    private ruta: String;

    @Column('int')
    private idMaterial: number;

    @JoinColumn({name: 'idMaterial'})
    @ManyToOne(type => Material, material => material.getIdMaterial, { onDelete: 'CASCADE', nullable: false})
    private material: Material;

    public constructor(ruta: String, idMaterial: number) {
        this.ruta = ruta;
        this.idMaterial = idMaterial; 
    }


    public getIdArchivo(): number {
        return this.idArchivo;
    }
    public setIdArchivo(idArchivo: number): void {
        this.idArchivo = idArchivo;
    }


    public getRuta(): String {
        return this.ruta;
    }

    public setRuta(ruta: string): void {
        this.ruta = ruta;
    }

    public getIdMaterial(): number {
        return this.idMaterial;
    }
    
}