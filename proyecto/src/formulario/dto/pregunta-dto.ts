export class PreguntaDto {
    readonly consigna: string;
    readonly tipo: number;
    readonly opciones?: number[];
    readonly esEditable?: boolean;
    readonly estaRespondida?: boolean;
    readonly puntaje?: number;
    readonly respuesta?: number[];
}
