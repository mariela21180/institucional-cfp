export default class Domicilio {
    private idDomicilio: number;
    private calle: string;
    private altura: number;
    private piso: string;
    private dpto: string;

    public constructor(calle: string, altura: number, piso?: string, dpto?: string) {
        this.calle = calle;
        this.altura = altura;
        if (piso) {
            this.piso = piso
        }
        else this.piso = null;

        if (dpto) {
            this.dpto = dpto
        }
        else this.dpto = null;
    }

    public setIdDomicilio(dom: number) {
        this.idDomicilio = dom;
    }

    public getIdDomicilio(): number {
        return this.idDomicilio;
    }

    public getCalle(): string {
        return this.calle;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setPiso(piso: string): void {
        this.piso = piso;
    }

    public getPiso(): string {
        return this.piso;
    }

    public setDpto(dpto: string): void {
        this.dpto = dpto;
    }

    public getDpto(): string {
        return this.dpto;
    }

}