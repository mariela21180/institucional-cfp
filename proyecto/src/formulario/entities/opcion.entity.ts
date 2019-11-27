export class Opcion {
    private idOpcion: number;
    private texto: string;
    private isOk: boolean; // nulleable
    private calificacion: number;

    constructor(texto: string, isOk?: boolean, calificacion?: number) {
        this.texto = texto;
        if (isOk) {
            this.isOk = isOk;
        } else {
            this.isOk = false; // Si la pregunta no es para un Examen, isOk es null, y hay que evitar hacer todos los cálculos de la "respuesta correcta"
        }
        
        // Por defecto es "1". 
        // En caso de repuesta a preguntas de texto, se puede setear a 0; 0,5 ó 1 segun sea mal, regular o bien respectivamente la calificacion del docente
        if (calificacion) {
            this.calificacion = calificacion;
        } else {
            this.calificacion = 1; 
            // Si la respuesta no es para un Examen, hay que evitar hacer todos los cálculos de la nota total
        }
    }

    public getIdOpcion(): number {
        return this.idOpcion;
    }
    public setIdOpcion(idOpcion: number): void {
        this.idOpcion = idOpcion;
    }
    
    public getTexto(): string {
        return this.texto;
    }
    public setTexto(texto: string): void {
        this.texto = texto;
    }

    public getIsOk(): boolean {
        return this.isOk;
    }
    public setIsOk(isOk: boolean): void  {
        this.isOk = isOk;
    }

    public getCalificacion(): number {
        return this.calificacion;
    }
    public setCalificacion(calificacion: number): void  {
        this.calificacion = calificacion;
    }

}