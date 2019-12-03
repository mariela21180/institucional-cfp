import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import Material from "./material.entity";

@Entity('tema')
export default class Tema {
    @PrimaryGeneratedColumn()
    private idTema: number;
    
    @Column('varchar', {length: 100})
    private tema: String;


    @Column('int')
    idMaterial: number;

    @JoinColumn({name: 'idMaterial'})
    @ManyToOne(type => Material, material => material.getIdMaterial)
    private material: Material;
    
    public constructor(tema: String) {
       this.tema = tema;
           
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
    

}