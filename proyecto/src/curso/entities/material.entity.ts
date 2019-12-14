import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import Clase from "./clase.entity";
import Archivo from "./archivo.entity";
import Tema from "./tema.entity";

@Entity('material')
export default class Material {
    @PrimaryGeneratedColumn()
    private idMaterial: number;

    @OneToMany(type => Archivo, archivos => archivos.getIdArchivo)
    private archivos: Archivo[];

    @OneToMany(type => Tema, temas => temas.getIdTema)
    private temas: Tema[];

    @Column('boolean', { default: true })
    private habilitado: boolean; // por defecto true

    @Column('int')
    private idClase: number;

    @JoinColumn({ name: 'idClase' })
    @ManyToOne(type => Clase, clase => clase.getIdClase, { onDelete: 'CASCADE', nullable: false })
    private clase: Clase; // lo agregué --> CONSULTAR

    public constructor(idClase: number, habilitado?: boolean) {

        if (habilitado == undefined || habilitado == null) {
            this.habilitado = true;
        }
        else {
            this.habilitado = habilitado;
        }

        this.idClase = idClase;
    }


    public getIdMaterial(): number {
        return this.idMaterial;
    }
    public setIdMaterial(idMaterial: number): void {
        this.idMaterial = idMaterial;
    }

    public getArchivos(): Archivo[] {
        return this.archivos;
    }

    public getTemas(): Tema[] {
        return this.temas;
    }

    public setHabilitado(habilitado: boolean): void {
        this.habilitado = habilitado;
    }

    public addArchivo(archivo: Archivo): void {
        this.archivos.push(archivo);
    }

    public addTema(tema: Tema): void {
        this.temas.push(tema);
    }

    // agregar los metodos de remover archivo y tema
}