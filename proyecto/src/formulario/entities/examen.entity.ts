import { Formulario } from "./formulario.entity";
import { Curso } from "../../curso/entities/curso.entity";

export class Examen {
    private idExamen: number;
    private formulario: Formulario;
    private curso: Curso;
    private puntajeTotal: number;
    private estaRespondido: boolean;
    private estaCorregido: boolean;

    constructor(formulario: Formulario, curso: Curso, puntajeTotal?: number, estaRespondido?: boolean, estaCorregido?: boolean) {
        this.formulario = formulario;
        this.curso = curso;

        if (puntajeTotal) {
            this.puntajeTotal = puntajeTotal;
        } else {
            this.puntajeTotal = this.calcularPuntajeTotal(); // Ver método
        }

        // Al crearlo nunca estará respondido
        // Cuando el alumno submitea el formulario, se pone como respondido
        if (estaRespondido) {
            this.estaRespondido = estaRespondido;
        } else {
            this.estaRespondido = false;
        }

        // Al crearlo nunca estará Corregido
        // Cuando el docente evalua las preguntas de texto, se pone como respondido
        if (estaCorregido) {
            this.estaCorregido = estaCorregido;
        } else {
            this.estaCorregido = false;
        }

    }
    public getIdExamen(): number {
        return this.idExamen;
    }
    private setIdExamen(idExamen: number): void {
        this.idExamen = idExamen;
    }
    public getFormulario(): Formulario {
        return this.formulario;
    }
    private setFormulario(formulario: Formulario): void {
        this.formulario = formulario;
    }
    public getCurso(): Curso {
        return this.curso;
    }
    private setCurso(curso: Curso): void {
        this.curso = curso;
    }
    
    public getPuntajeTotal(): number {
        return this.puntajeTotal;
    }
    public setPuntajeTotal(puntajeTotal: number): void {
        this.puntajeTotal = puntajeTotal;
    }
    
    public getEstaRespondido(): boolean {
        return this.estaRespondido;
    }
    public setEstaRespondido(estaRespondido: boolean): void {
        this.estaRespondido = estaRespondido;
    }
    
    public getEstaCorregido(): boolean {
        return this.estaCorregido;
    }
    public setEstaCorregido(estaCorregido: boolean): void {
        this.estaCorregido = estaCorregido;
    }

    public calcularPuntajeTotal(): number {
        return null;
        // Terminar método. Recorrer la lista de preguntas del Formulario y sumar puntajes
        // Estoy en duda si se calcula es puntaje total de las preguntas (al crear el form), o la calificacion total de las respuestas (despues de estar respondido y corregido) 
    }
}