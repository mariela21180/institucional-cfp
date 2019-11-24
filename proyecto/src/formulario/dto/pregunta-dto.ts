export class PreguntaDto {
    readonly idPregunta: number;
    readonly esEditable: boolean;
    readonly consigna: string;
    readonly tipo: number;
    readonly opciones: number[];
    readonly estaRespondida: boolean;
    readonly puntaje: number;
    readonly respuesta: number[];
}
