import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tipo_pregunta')
export default class TipoPregunta {
    @PrimaryGeneratedColumn()
    private idTipoPregunta: number;
    
    @Column("varchar")
    private texto: string;
    // Texto = 1,
    // OpcionSimple = 2,
    // OpcionMultiple = 3,
    // OpcionPorLista = 4
    constructor(idTipoPregunta: number, texto: string) {
        this.idTipoPregunta = idTipoPregunta;
        this.texto = texto;
    }

    public getIdTipoPregunta(): number {
        return this.idTipoPregunta;
    }
    public getText(): string {
        return this.texto;
    }
}