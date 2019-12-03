export class PreguntaDto {
    readonly esEditable?: boolean;
    readonly consigna: string;
    readonly idTipoPregunta: number;
    readonly estaRespondida?: boolean;
    readonly puntaje?: number;
    readonly idFormulario: number;
}
