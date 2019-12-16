export class AsistenciaDto {
    private horasCursadas: number;
    private porcentajeAsistencia: number;

    public setHorasCursadas(horas: number): void {
        this.horasCursadas = horas;
    }
    public setPorcentajeAsistencia(porcentaje: number): void {
        this.porcentajeAsistencia = porcentaje;
    }
}