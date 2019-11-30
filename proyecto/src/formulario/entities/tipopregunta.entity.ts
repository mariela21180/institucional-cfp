import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tipo_pregunta')
export default class TipoPregunta {
    @PrimaryGeneratedColumn()
    private idTipoPregunta: number;
    
    @Column("varchar")
    private text: string;
    // Texto = 1,
    // OpcionSimple = 2,
    // OpcionMultiple = 3,
    // OpcionPorLista = 4
    constructor(idTipoPregunta: number, text: string) {
        this.idTipoPregunta = idTipoPregunta;
        this.text = text;
    }

    public getIdTipoPregunta(): number {
        return this.idTipoPregunta;
    }
    public getText(): string {
        return this.text;
    }
}