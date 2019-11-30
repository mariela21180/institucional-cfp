import { PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('material')
export default class Material {
    @PrimaryGeneratedColumn()
    private idMaterial: number;

    private archivos: String[];
    private temas: String[];
    private habilitado: boolean; // por defecto true

    public constructor(archivos?: String[], temas?: String[], habilitado?: boolean) {
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

    public getArchivos(): String[] {
        return this.archivos;
    }

    public getTemas(): String[] {
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

    public addArchivo(archivo: string): void {
        this.archivos.push(archivo);
    }

    public addTema(tema: string): void {
        this.temas.push(tema);
    }

    // agregar los metodos de remover archivo y tema
}