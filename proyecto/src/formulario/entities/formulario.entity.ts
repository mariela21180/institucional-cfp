import Pregunta from "./pregunta.entity"
import Opcion from "./opcion.entity";
import { text } from "body-parser";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('formulario')
export default class Formulario {
    @PrimaryGeneratedColumn()
    private idFormulario: number;
    
    private esEditable: boolean;
    private nombre: string;
    private descripcion: string;
    private preguntas: Pregunta[];

    constructor(nombre: string, descripcion: string, esEditable?: boolean, preguntas?: Pregunta[]) {
        // Siempre va a ser true para los examenes. Para otros formularios los vamos a poner en false
        this.nombre = nombre;
        this.descripcion = descripcion;
        if (esEditable) {
            this.esEditable = esEditable;
        } else {
            this.esEditable = true;
        }
        // Debe tener al menos una pregunta para ser un formulario
        if (preguntas) {
            this.preguntas = preguntas;
        } else {
            this.preguntas = [];
        }
            
    }
    public getIdFormulario(): number {
        return this.idFormulario;
    }
    public setIdFormulario(idFormulario: number): void {
        this.idFormulario = idFormulario;
    }
    public getEsEditable(): boolean {
        return this.esEditable;
    }
    public setEsEditable(esEditable: boolean): void {
        this.esEditable = esEditable;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    public getPreguntas(): Pregunta[] {
        return this.preguntas;
    }
    public setPreguntas(preguntas: Pregunta[]): void {
        this.preguntas = preguntas;
    }

    public responderPreguntaDeTexto(texto: string, idPregunta: number) {
        // Busca en la lista de preguntas del formulario la pregunta de texto en cuestión, y le agrega una opcion (que antes no tenía) con el texto de la respuesta enviada y con isOk = true y texto = texto

        // En BD, la respuesta enviada se guarda en la tabla Opciones y se agrega a la tabla referencial Respuestas

        let pregunta: Pregunta;
        for (let index = 0; index < this.preguntas.length; index++) {
            const element = this.preguntas[index];

            if (element.getIdPregunta() == idPregunta) {
                pregunta = element;
            }
            
        }
        let opcion: Opcion = new Opcion(texto, true);
        pregunta.agregarOpcion(opcion);
    }
}