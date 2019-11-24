export default class Material {
    private idMaterial: number;
    private archivos: String[];
    private temas: String[];
    private habilitado: boolean; // por defecto true

    public constructor (archivos: String[], temas: String[], habilitado?: boolean) {
        this.archivos = archivos;
        this.temas = temas;

        if(habilitado) {
            this.habilitado = habilitado;
        }
        else {
            this.habilitado = true;
        }
    }


    public getIdMaterial(): number {
        return this.idMaterial;
    }
    public setIdMaterial(idMaterial: number): void {
        this.idMaterial = idMaterial;
    }

    public getArchivos(): String[] {
        return this.archivos;
    }

    public getTemas(): String[] {
        return this.temas;
    }

    public habilitarDeshabilitar(): void {
        if(this.habilitado) {
            this.habilitado = false;
        }
        else {
            this.habilitado = true;
        }
    }

    public addArchivo(archivo: string): void {
        this.archivos.push(archivo);
    }

    public addTema(tema: string): void {
        this.temas.push(tema);
    }

    // agregar los metodos de remover archivo y tema
}