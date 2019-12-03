import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import Material from "./material.entity";

@Entity('archivo')
export default class Archivo {
    @PrimaryGeneratedColumn()
    private idArchivo: number;

    @Column('varchar', {length: 100})
    private ruta: String;

    @Column('int')
    idMaterial: number;

    @JoinColumn({name: 'idMaterial'})
    @ManyToOne(type => Material, material => material.getIdMaterial)
    private material: Material;

    public constructor(ruta: String) {
       this.ruta = ruta;
           
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
    

}