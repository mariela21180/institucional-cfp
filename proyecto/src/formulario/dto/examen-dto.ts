export class ExamenDto {
    readonly idExamen: number; // estoy en duda si se pone el id propio
    readonly idFormulario: number;
    readonly idCurso: number;
    readonly puntajeTotal?: number;
    readonly estaRespondido?: boolean;
    readonly estaCorregido?: boolean;
}
