import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import Material from "./material.entity";

@Entity('tema')
export default class Tema {
    @PrimaryGeneratedColumn()
    private idTema: number;
    
    @Column('varchar', {length: 100})
    private tema: String;

    @Column('int')
    private idMaterial: number;

    @JoinColumn({name: 'idMaterial'})
    @ManyToOne(type => Material, material => material.getIdMaterial, { onDelete: 'CASCADE', nullable: false})
    private material: Material;
    
    public constructor(tema: String, idMaterial: number) {
        this.tema = tema;
        this.idMaterial = idMaterial;
    }

    public getIdTema(): number {
        return this.idTema;
    }

    public setIdTema(idTema: number): void {
        this.idTema = idTema;
    }

    public getTema(): String {
        return this.tema;
    }

    public setTema(tema: string): void {
        this.tema = tema;
    }
    
    public getIdMaterial(): number {
        return this.idMaterial;
    }
}