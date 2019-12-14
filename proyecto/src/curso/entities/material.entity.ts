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

    @Column('bit', {default: true})
    private habilitado: boolean; // por defecto true

    @Column('int')
    idClase: number;

    @JoinColumn({name: 'idClase'})
    @ManyToOne(type => Clase, clase => clase.getIdClase, { onDelete: 'CASCADE', nullable: false})
    private clase: Clase; // lo agregué --> CONSULTAR

    public constructor(archivos?: Archivo[], temas?: Tema[], habilitado?: boolean) {
        try {
            if (!archivos && !temas) {
                throw new Error('Al menos debe tener un archivo o un tema');
            } else {
                if (archivos) {
                    this.archivos = archivos;
                } else {
                    this.archivos = [];
                }
                if (temas) {
                    this.temas = temas;
                } else {
                    this.temas = [];
                }
            }

            if (habilitado) {
                this.habilitado = habilitado;
            }
            else {
                this.habilitado = true;
            }
        }
        catch (error) {
            console.log(error.message);
        }
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

    public habilitarDeshabilitar(): void {
        if (this.habilitado) {
            this.habilitado = false;
        }
        else {
            this.habilitado = true;
        }
    }

    public addArchivo(archivo: Archivo): void {
        this.archivos.push(archivo);
    }

    public addTema(tema: Tema): void {
        this.temas.push(tema);
    }

    // agregar los metodos de remover archivo y tema
}