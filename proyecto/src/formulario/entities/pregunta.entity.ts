import Opcion from "./opcion.entity";
import TipoPregunta from "./tipopregunta.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, ManyToMany } from "typeorm";

@Entity('pregunta')
export default class Pregunta {
    @PrimaryGeneratedColumn()
    private idPregunta: number;
    
    @Column("bit", {default: true})
    private esEditable: boolean;

    @Column("varchar")
    private consigna: string;

    @JoinColumn({name: "idTipoPregunta"})
    @OneToOne(type => TipoPregunta, idTipoPregunta => idTipoPregunta.getIdTipoPregunta)
    private idTipoPregunta: TipoPregunta;
    
    @OneToMany(type => Opcion, opciones => opciones.getIdOpcion)
    private opciones: Opcion[];
    
    @Column("bit", {default: false})
    private estaRespondida: boolean;
    
    @Column({ nullable: true })
    private puntaje: number;
    
    // @ManyToMany(type => Opcion, respuesta => respuesta.getIdOpcion)
    private respuesta: Opcion[]; // nulleable

    constructor(consigna: string, idTipoPregunta: TipoPregunta, opciones?: Opcion[], esEditable?: boolean, estaRespondida?: boolean, respuesta?: Opcion[], puntaje?: number) {
        this.consigna = consigna;
        this.idTipoPregunta = idTipoPregunta;

        // Si es de texto puede venir vacía
        // Si es de otro idTipoPregunta, debe venir como mínimo debe venir 1.
        // Si es pregunta de examen, debe venir al menos una con "isOk"
        try {
            if (this.idTipoPregunta.getIdTipoPregunta() != 1) {
                if (!opciones) {
                    throw new Error('Debe haber como mínimo una opción.')
                }
            }
            if (opciones) {
                this.opciones = opciones;                
            } else {
                this.opciones = [];
            }
        } catch(error) {
            console.log(error.message);
        }

        // Por defecto es true.
        // Si la pregunta no es de Texto, hay que setearlo a false.
        // Si la pregunta es de texto, queda en true hasta que el docente la edite y la marque como corregida (o sea, la lea y le ponga Bien/Regular/Mal))
        if (esEditable) {
            this.esEditable = esEditable;
        } else {
            this.esEditable = true; 
        }

        // Al crearla nunca estará respondida
        // Cuando el alumno submitea el formulario, se pone como respondida
        if (estaRespondida) {
            this.estaRespondida = estaRespondida;
        } else {
            this.estaRespondida = false;
        }

        // Al crearla, nunca tendrá respuesta
        // Cuando el alumno submitea el formulario, se envía la respuesta
        if (respuesta) {
            this.respuesta = respuesta;
        } else {            
            this.respuesta = null;
        }
        
        
        // Si la pregunta no es para un Examen, el puntaje es null, y hay que evitar hacer todos los cálculos de la nota total
        if (puntaje) {
            this.puntaje = puntaje;
        } else {
            this.puntaje = null; 
        }

    }

    public getIdPregunta(): number {
        return this.idPregunta;
    }
    public setIdPregunta(idPregunta: number): void {
        this.idPregunta = idPregunta;
    }
    public getEsEditable(): boolean {
        return this.esEditable;
    }
    public setEsEditable(esEditable: boolean): void {
        this.esEditable = esEditable;
    }
    public getConsigna(): string {
        return this.consigna;
    }
    public setConsigna(consigna: string): void {
        this.consigna = consigna;
    }
    public getTipo(): TipoPregunta {
        return this.idTipoPregunta;
    }
    public getOpciones(): Opcion[] {
        return this.opciones;
    }
    public setOpciones(opciones: Opcion[]): void {
        this.opciones = opciones;
    }
    
    public getEstaRespondida(): boolean {
        return this.estaRespondida;
    }
    public setEstaRespondida(estaRespondida: boolean): void {
        this.estaRespondida = estaRespondida;
    }

    public getRespuesta(): Opcion[] {
        return this.respuesta;
    }
    public setRespuesta(respuesta: Opcion[]): void {
        this.respuesta = respuesta;
    }

    public getPuntaje(): number {
        return this.puntaje;
    }
    public setPuntaje(puntaje: number): void {
        this.puntaje = puntaje;
    }

    public agregarOpcion(opcion: Opcion) {
        this.opciones.push(opcion);
    }
}