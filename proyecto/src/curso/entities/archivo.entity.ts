import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('archivo')
export default class Archivo {
    @PrimaryGeneratedColumn()
    idArchivo: number;

    private ruta: String;

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