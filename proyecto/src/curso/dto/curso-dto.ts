export class CursoDto {
    readonly nombre: string;
    readonly idDocente: number;
    readonly fechaInicio: Date;
    readonly fechaFin?: Date;
    readonly descripcion?: string;
    readonly cupoMaximoAlumnos?: number;
    readonly asistenciaMinima?: number;
    readonly cargaHorariaTotal?: number;
}
