import { Pregunta } from "./pregunta.entity"

export class Formulario {
    private idFormulario: number;
    private esEditable: boolean;
    private nombre: string;
    private descripcion: string;
    private preguntas: Pregunta[];

    constructor(esEditable: boolean, nombre: string, descripcion: string, preguntas: Pregunta[]) {
        // Siempre va a ser true para los examenes. Para otros formularios los vamos a poner en false
        this.esEditable = esEditable;
        this.nombre = nombre;
        this.descripcion = descripcion;
        // Debe tener al menos una pregunta para ser un formulario
        this.preguntas = preguntas;
    }
    public getIdFormulario(): number {
        return this.idFormulario;
    }
    private setIdFormulario(idFormulario: number): void {
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
}