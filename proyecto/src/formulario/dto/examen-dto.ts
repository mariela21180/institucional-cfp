export class ExamenDto {
    readonly idFormulario: number;
    readonly idCurso: number;
    readonly puntajeTotal?: number;
    readonly estaRespondido?: boolean;
    readonly estaCorregido?: boolean;
}
