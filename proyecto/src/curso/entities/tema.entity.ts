import { PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('tema')
export default class Tema {
    @PrimaryGeneratedColumn()
    idTema: number;
    
    private tema: String;

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