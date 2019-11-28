export class FormularioDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly esEditable?: boolean;
    readonly preguntas?: number[];
}
