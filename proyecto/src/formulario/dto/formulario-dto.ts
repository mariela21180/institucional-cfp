export class FormularioDto {
    readonly idFormulario: number;
    readonly esEditable: boolean;
    readonly nombre: string;
    readonly descripcion: string;
    readonly preguntas: number[];
}
